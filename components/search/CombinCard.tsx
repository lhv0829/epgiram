"use client";

import { useEffect, useRef, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import Mark from "mark.js";
import Link from "next/link";

interface ICombinCardProps {
  id: string;
  content: string;
  author: string;
  tags: string[];
}

const CombinCard = forwardRef<HTMLDivElement, ICombinCardProps>(
  (props, ref) => {
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
      <Link
        href={`/epigram/${props.id}`}
        className="block p-6 text-xl border-b-gray-100 border-b"
      >
        <div ref={ref}>
          <div
            ref={contentRef}
            className="flex flex-col gap-6 font-iropke text-xl"
          >
            <p>{props.content}</p>
            <span ref={authorRef}>- {props.author} -</span>
          </div>
          <div ref={tagRef} className="text-end">
            {props.tags.map((tag, index) => (
              <span key={index} className="text-blue-400 ml-3">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }
);

CombinCard.displayName = "CombinCard";

export default CombinCard;
