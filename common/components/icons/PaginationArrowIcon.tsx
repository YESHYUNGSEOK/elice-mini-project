import { Dispatch, SetStateAction } from "react";

interface Props {
  size: number;
  direction: "left" | "right";
  isClickable: boolean;
  dispatcher: () => void;
}

export default function PaginationArrowIcon({
  size,
  direction,
  isClickable,
  dispatcher,
}: Props) {
  const handleOnClick = () => dispatcher();

  return (
    <svg
      onClick={handleOnClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      style={{
        cursor: isClickable ? "pointer" : "not-allowed",
        width: size,
        aspectRatio: 1,
        transform: `rotate(${direction === "right" ? 180 : 0}deg)`,
        fill: isClickable ? "#222" : "#ccc",
      }}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}
