import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  return {
    title: id,
  };
}

export default function EpigramDetail() {
  return <div></div>;
}
