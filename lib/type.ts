import { z } from "zod";

export interface Emoji {
  width?: number;
  height?: number;
  fill?: string;
}

export const Emotion = z.enum(["MOVED", "HAPPY", "THINK", "SAD", "ANGER"]);

export const User = z.object({
  image: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  teamId: z.string(),
  nickname: z.string(),
  id: z.number(),
});

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

export const Comment = z.object({
  epigramId: z.number(),
  writer: User.pick({
    nickname: true,
    image: true,
    id: true,
  }),
  updatedAt: z.string(),
  createdAt: z.string(),
  isPrivate: z.boolean(),
  content: z.string(),
  id: z.number(),
});

export const EmotionData = z.object({
  createdAt: z.string(),
  emotion: Emotion,
  userId: z.number(),
  id: z.number(),
});

export const MontlyEmotionData = z.array(EmotionData);

export const PageParams = z.array(z.number());

export const InfiniteQueryEpigram = z.object({
  pageParams: PageParams,
  pages: z.array(
    z.object({
      list: z.array(Epigram),
      nextCursor: z.number(),
      totalCount: z.number(),
    })
  ),
});

export const InfiniteQueryComment = z.object({
  pageParams: PageParams,
  pages: z.array(
    z.object({
      totalCount: z.number(),
      nextCursor: z.number(),
      list: z.array(Comment),
    })
  ),
});

export const PatchEpigramData = Epigram.pick({
  tags: true,
  referenceTitle: true,
  referenceUrl: true,
  author: true,
  content: true,
});

export const PatchCommentData = Comment.pick({
  isPrivate: true,
  content: true,
});

export const PostCommentData = PatchCommentData.extend({
  epigramId: z.number(),
});

export const PatchMyData = User.pick({
  image: true,
  nickname: true,
});

export type User = z.infer<typeof User>;

export type Epigram = z.infer<typeof Epigram>;

export type Comment = z.infer<typeof Comment>;

export type Tag = z.infer<typeof Tag>;

export type Emotion = z.infer<typeof Emotion> | undefined;

export type EmotionData = z.infer<typeof EmotionData>;

export type MontlyEmotionData = z.infer<typeof MontlyEmotionData>;

export type InfiniteQueryEpigram = z.infer<typeof InfiniteQueryEpigram>;

export type InfiniteQueryComment = z.infer<typeof InfiniteQueryComment>;

export type PatchEpigramData = z.infer<typeof PatchEpigramData>;

export type PatchCommentData = z.infer<typeof PatchCommentData>;

export type PostCommentData = z.infer<typeof PostCommentData>;

export type PatchMyData = z.infer<typeof PatchMyData>;
