import { Emoji } from "@/lib/type";

const SmilingFace = ({ width = 32, height = 32, fill = "none" }: Emoji) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill={fill}>
      <g clipPath="url(#clip0_2005_8361)">
        <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FBC85B" />
        <path
          d="M17.8125 21.75C19.2622 21.75 20.4375 20.5747 20.4375 19.125C20.4375 17.6753 19.2622 16.5 17.8125 16.5C16.3628 16.5 15.1875 17.6753 15.1875 19.125C15.1875 20.5747 16.3628 21.75 17.8125 21.75Z"
          fill="#3E414D"
        />
        <path
          d="M30.1875 21.75C31.6372 21.75 32.8125 20.5747 32.8125 19.125C32.8125 17.6753 31.6372 16.5 30.1875 16.5C28.7378 16.5 27.5625 17.6753 27.5625 19.125C27.5625 20.5747 28.7378 21.75 30.1875 21.75Z"
          fill="#3E414D"
        />
        <path
          d="M34.5 29.9062C32.5135 33.5871 28.5777 36.0938 24.0469 36.0938C19.5161 36.0938 15.5803 33.5871 13.5938 29.9062"
          stroke="#9A695E"
          strokeWidth="2.15054"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2005_8361">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SmilingFace;
