import Image from "next/image";

interface ISubSectionProps {
  reverse?: boolean;
  mainText: string;
  subText: string;
  imageUrl: string;
}

export default function SubSection({
  reverse = false,
  mainText,
  subText,
  imageUrl,
}: ISubSectionProps) {
  return (
    <div
      className={`flex items-center justify-center gap-[80px] ${
        reverse ? "flex-row-reverse" : "flex-row"
      } my-[190px]`}
    >
      {/* Image space */}
      <div className="w-[744px] h-[388px] relative">
        <Image src={imageUrl} alt="landingImage" fill />
      </div>
      <div
        className={`flex flex-col justify-between h-[388px] ${
          reverse ? "text-right" : "text-left"
        }`}
      >
        <div></div> {/* Spacer */}
        {/* Text space */}
        <div>
          <p className="text-3xl font-bold mb-2">
            {mainText.split("\\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="text-blue-600 text-2xl">
            {subText.split("\\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
