"use client";

import { patchMyData, uploadImage } from "@/lib/fetch";
import { PatchMyData } from "@/lib/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";

interface MyProfileImageProps {
  profileIamge: string;
  nickname: string;
}

const MyProfileImage = ({ profileIamge, nickname }: MyProfileImageProps) => {
  const [image, setImage] = useState(profileIamge);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const queryClient = useQueryClient();

  const {
    mutate: modifyImage,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async (image: File) => uploadImage(image),
    onSuccess: (data) => {
      const otherData = {
        nickname: nickname,
        image: data.url,
      };
      modifyProfile(otherData);
      setImage(data);
    },
    onError: (error) => {
      console.error("이미지 업로드 중 오류 발생:", error);
      alert("이미지 업로딩 실패");
    },
  });

  const { mutate: modifyProfile } = useMutation({
    mutationFn: async (modifiedData: PatchMyData) => patchMyData(modifiedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
    onError: (error) => {
      console.error("프로필 업데이트 실패:", error);
    },
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      modifyImage(file);
    }
  };

  return (
    <div className="w-[120px] h-[120px] rounded-full">
      <img src={profileIamge} alt="프로필 이미지" onClick={handleImageClick} className="w-full h-full rounded-full" />
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
      {isPending && <p>업로드 중...</p>}
      {isError && <p>업로드 실패: {(error as Error).message}</p>}
    </div>
  );
};

export default MyProfileImage;
