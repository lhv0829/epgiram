import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed right-6 bottom-16 flex justify-center items-center md:right-[72px] md:bottom-48 lg:right-[120px] lg:bottom-[312px] w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-900"
    >
      <ChevronUp className="w-16 h-8 text-blue-200 stroke-2 lg:w-[88px] lg:h-12" />
    </button>
  );
};

export default ScrollToTopButton;
