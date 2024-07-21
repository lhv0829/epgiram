import { useFormData } from "@/contexts/FormProvider";

export default function GnbButton() {
  const { formRef } = useFormData();

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submit();
    }
  };
  return (
    <button
      type="submit"
      className="text-base font-bold text-white px-4 border h-11 rounded-lg bg-black-500"
      onClick={handleSubmit}
    >
      완료
    </button>
  );
}
