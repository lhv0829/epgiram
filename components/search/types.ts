export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  likeCount: number;
  id: number;
  content: string;
  author: string;
  referenceTitle: string;
  referenceUrl: string;
  writerId: number;
  tags: Tag[];
}
