import { instance } from "./axios";
import { Emotion, PatchCommentData, PatchMyData, PostCommentData } from "./type";

export const getMyData = async () => {
  try {
    const { data } = await instance.get("users/me");
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const patchMyData = async (modifiedData: PatchMyData) => {
  try {
    const { data } = await instance.patch("users/me", modifiedData);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const uploadImage = async (image: File) => {
  try {
    const { data } = await instance.post("images/upload", image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    alert("이미지 업로드 실패");
    console.log(error);
  }
};

export const getTodayEpigram = async () => {
  try {
    const { data } = await instance.get("epigrams/today");
    return data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const getRecentEpigramTotalCount = async () => {
  try {
    const { data } = await instance.get("epigrams", {
      params: {
        limit: 3,
      },
    });
    return data.totalCount;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const getRecentEpigrams = async (pageParam: number, limit = 3) => {
  try {
    const { data } = await instance.get(`epigrams?limit=${limit}&cursor=${pageParam}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getEpigramDetailData = async (epigramId: number) => {
  try {
    const { data } = await instance.get(`epigrams/${epigramId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patchEpigram = async (epigramId: number) => {
  try {
    const { data } = await instance.patch(`epigrams/${epigramId}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const deleteEpigram = async (epigramId: number) => {
  try {
    const { data } = await instance.delete(`epigrams/${epigramId}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const postEpigramLike = async (epigramId: number) => {
  try {
    const { data } = await instance.post(`epigrams/${epigramId}/like`);
    return data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const deleteEpigramLike = async (epigramId: number) => {
  try {
    const { data } = await instance.delete(`epigrams/${epigramId}/like`);
    return data;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const getRecentComments = async (pageParam: number) => {
  try {
    const { data } = await instance.get(`comments?limit=4&cursor=${pageParam}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getEpigramComment = async (epigramId: number, pageParam: number) => {
  try {
    const { data } = await instance.get(`epigrams/${epigramId}/comments?limit=4&cursor=${pageParam}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getRecentCommentTotalCount = async () => {
  try {
    const { data } = await instance.get("comments", {
      params: {
        limit: 4,
      },
    });
    return data.totalCount;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const getMyCommentTotalCount = async (userId: number) => {
  try {
    const { data } = await instance.get(`users/${userId}/comments`, {
      params: {
        limit: 5,
      },
    });
    return data.totalCount;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

export const postComment = async (commentData: PostCommentData) => {
  try {
    const { data } = await instance.post("comments", commentData);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const patchComment = async ({ commentData, commentId }: { commentId: number; commentData: PatchCommentData }) => {
  try {
    const { data } = await instance.patch(`comments/${commentId}`, commentData);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const deleteComment = async (commentId: number) => {
  try {
    const { data } = await instance.delete(`comments/${commentId}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getMyComment = async (userId: number, pageParam: number) => {
  try {
    const { data } = await instance.get(`users/${userId}/comments?limit=4&cursor=${pageParam}`);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const postEmotion = async (emotionData: { emotionData: Emotion }) => {
  try {
    const { data } = await instance.post("emotionLogs/today", emotionData);
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getTodayEmotion = async (userId: number) => {
  try {
    const { data } = await instance.get("emotionLogs/today", {
      params: {
        userId: userId,
      },
    });
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};

export const getMonthlyEmotion = async (userId: number, year: number, month: number) => {
  try {
    const { data } = await instance.get("emotionLogs/monthly", {
      params: {
        userId: userId,
        year: year,
        month: month,
      },
    });
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};
