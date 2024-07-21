import { Post } from "@/components/search/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get("cursor") || "";
  const keyword = searchParams.get("keyword") || "";

  try {
    const url = `${process.env.EPIGRAM_API}epigrams?limit=5&keyword=${keyword}${
      cursor ? `&cursor=${cursor}` : ""
    }`;
    const data = await fetch(url).then((res) => res.json());
    let results: Post[] = data.list;

    // 필터링 및 정렬 로직 추가
    results = results
      .filter(
        (post) =>
          post.tags.some((tag) => tag.name.includes(keyword)) ||
          post.content.includes(keyword) ||
          post.author.includes(keyword)
      )
      .sort((a, b) => {
        const aTags = a.tags.some((tag) => tag.name.includes(keyword));
        const bTags = b.tags.some((tag) => tag.name.includes(keyword));
        if (aTags && !bTags) return -1;
        if (!aTags && bTags) return 1;

        const aContent = a.content.includes(keyword);
        const bContent = b.content.includes(keyword);
        if (aContent && !bContent) return -1;
        if (!aContent && bContent) return 1;

        const aAuthor = a.author.includes(keyword);
        const bAuthor = b.author.includes(keyword);
        return aAuthor && !bAuthor ? -1 : !aAuthor && bAuthor ? 1 : 0;
      });

    return NextResponse.json({
      results,
      nextCursor: data.nextCursor,
      hasMore: data.nextCursor != null,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      results: [],
      nextCursor: null,
      hasMore: false,
    });
  }
}
