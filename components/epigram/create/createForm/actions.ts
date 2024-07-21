"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const MAX_TAG_LENGTH = 10;
const MAX_TAG_COUNT = 3;

const checkTagLength = (tags: string) => {
  const result = tags.split(",");
  return result.every((item) => item.length <= MAX_TAG_LENGTH);
};

const checkTagCount = (tags: string) => {
  const result = tags.split(",");
  return result.length <= MAX_TAG_COUNT;
};

// 데이터 스키마 정의
const formDataSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: "내용을 입력해주세요.",
    })
    .max(500, "내용은 500자 이내로 입력해주세요."),
  author: z.string().min(1, "작성자 이름을 입력하세요."),
  referenceTitle: z.string().optional(),
  referenceUrl: z
    .union([z.string().url("유효한 URL을 입력하세요."), z.literal("")])
    .optional(),
  tags: z
    .string()
    .refine(checkTagLength, {
      message: `각 태그명은 ${MAX_TAG_LENGTH}글자를 넘길 수 없습니다.`,
    })
    .refine(checkTagCount, {
      message: `태그는 최대 ${MAX_TAG_COUNT}개까지 입력할 수 있습니다.`,
    }),
});

export const formAction = async (prev: any, formData: FormData) => {
  const data = {
    content: (formData.get("content") as string) || "",
    author: (formData.get("author") as string) || "",
    referenceTitle: (formData.get("referenceTitle") as string) || "",
    referenceUrl: (formData.get("referenceUrl") as string) || "",
    tags: (formData.get("tags") as string) || "",
  };

  // 유효성 검사
  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  const response = await fetch(`${process.env.BASE_URL}/api/epigram`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
    },
    body: JSON.stringify(result.data),
  }).then((res) => res.json());

  console.log(response);

  //유효성 검사 성공하고, 폼 제출 성공 시
  redirect(`/epigrams/${response.redirectId}`);
};
