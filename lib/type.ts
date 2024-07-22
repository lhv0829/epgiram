import { z } from "zod";

export interface Emoji {
  width?: number;
  height?: number;
  fill?: string;
}

export const Tag = z.object({
  name: z.string(),
  id: z.number(),
});

export const Epigram = z.object({
  likeCount: z.number(),
  tags: z.array(Tag),
  writerId: z.number(),
  referenceUrl: z.string(),
  referenceTitle: z.string(),
  author: z.string(),
  content: z.string(),
  id: z.number(),
  isLiked: z.boolean(),
});

export const InfiniteQueryEpigram = z.object({
  pageParams: z.array(z.number()),
  pages: z.array(
    z.object({
      list: z.array(Epigram),
      nextCursor: z.number(),
      totalCount: z.number(),
    })
  ),
});

export type Epigram = z.infer<typeof Epigram>;

export type Tag = z.infer<typeof Tag>;

export type InfiniteQueryEpigram = z.infer<typeof InfiniteQueryEpigram>;
