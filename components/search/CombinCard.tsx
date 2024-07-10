"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Mark from "mark.js";

interface ICombinCardProps {}

export default function CombinCard(props: ICombinCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const params = useSearchParams();

  useEffect(() => {
    const query = params.get("word");

    if (query) {
      const markInstances = [];

      if (contentRef.current) {
        const markInstance = new Mark(contentRef.current);
        markInstance.unmark({
          done: () => {
            markInstance.mark(query, {
              element: "span",
              className: "text-illust-blue",
            });
          },
        });
        markInstances.push(markInstance);
      }

      if (authorRef.current) {
        const markInstance = new Mark(authorRef.current);
        markInstance.unmark({
          done: () => {
            markInstance.mark(query, {
              element: "span",
              className: "text-illust-blue",
            });
          },
        });
        markInstances.push(markInstance);
      }

      if (tagRef.current) {
        const markInstance = new Mark(tagRef.current);
        markInstance.unmark({
          done: () => {
            markInstance.mark(query, {
              element: "span",
              className: "text-illust-blue",
            });
          },
        });
        markInstances.push(markInstance);
      }
    }
  }, [params]);

  return (
    <div className="p-6 text-xl border-b-gray-100 border-b">
      <div ref={contentRef} className="flex flex-col gap-6 font-iropke text-xl">
        <p>
          이 세상에는 위대한 진실이 하나 있어. 무언가를 온 마음을 다해 원한다면,
          반드시 그렇게 된다는 거야.
        </p>
        <span ref={authorRef}>- 파우울로 코엘료 -</span>
      </div>
      <div ref={tagRef} className="text-end">
        <span className="text-blue-400">#새로운영감</span>
      </div>
    </div>
  );
}
