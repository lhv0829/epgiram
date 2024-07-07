import CreateForm from "@/components/epigram/create/CreateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "글 작성",
};

export default function Create() {
  return (
    <div className="w-[640px] mt-14">
      <CreateForm />
    </div>
  );
}
