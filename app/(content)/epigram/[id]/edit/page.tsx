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

export default function Edit() {
  return (
    <div>
      <h1>Edit</h1>
    </div>
  );
}
