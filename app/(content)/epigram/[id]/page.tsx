"use client";

import { useParams } from "next/navigation";

export default function EpigramDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>epigram : {id}</h1>
    </div>
  );
}
