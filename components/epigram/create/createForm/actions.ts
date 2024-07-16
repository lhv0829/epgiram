"use server";

import { z } from "zod";

// 데이터 스키마 정의
// const formDataSchema = z.object({
//   content: z.string().min(1, "내용을 입력하세요."),
//   author: z.string().min(1, "작성자 이름을 입력하세요."),
//   sourceTitle: z.string().min(1, "출처 제목을 입력하세요."),
//   sourceURL: z.string().url("유효한 URL을 입력하세요."),
//   tags: z.string().min(1, "태그를 입력하세요."),
// });

export const formAction = (prev: any, formData: FormData) => {
  const data = {
    content: formData.get("content") || "",
    author: formData.get("author") || "",
    sourceTitle: formData.get("sourceTitle") || "",
    sourceURL: formData.get("sourceURL") || "",
    tags: formData.get("tags") || "",
  };

  // 유효성 검사
  // const result = formDataSchema.safeParse(data);
  console.log(data);

  // if (!result.success) {
  //   return result.error.flatten();
  // }

  // console.log("유효성 검사 성공:", result.data);
};
