import { useState, useRef, useCallback } from "react";

export const useInfiniteScroll = (
  initialData: any[],
  fetchMoreData: () => Promise<any[]>
) => {
  const [data, setData] = useState(initialData);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          fetchMoreData().then((newData) => {
            setTimeout(() => {
              if (newData.length === 0) {
                setHasMore(false);
              } else {
                setData((prev) => [...prev, ...newData]);
              }
              setLoading(false);
            }, 1000);
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, loading, fetchMoreData]
  );

  return { data, lastElementRef, hasMore, loading };
};
