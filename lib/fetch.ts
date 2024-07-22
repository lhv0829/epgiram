import { instance } from "./axios";

export const getTodayEpigram = async () => {
  try {
    const { data } = await instance.get("epigrams/today");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getEpigramTotalCount = async () => {
  try {
    const { data } = await instance.get("epigrams", {
      params: {
        limit: 3,
      },
    });
    return data.totalCount;
  } catch (e) {
    console.error(e);
  }
};

export const getRecentEpigrams = async (pageParam: number) => {
  try {
    const { data } = await instance.get(`epigrams?limit=3&cursor=${pageParam}`);
    return data;
  } catch (error) {
    alert(error);
  }
};
