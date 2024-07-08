import { Camera } from "lucide-react";

const EditButton = () => {
  return (
    <div className="flex justify-center items-center w-20 h-20 md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-black-700">
      <Camera className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white" />
    </div>
  );
};

export default EditButton;
