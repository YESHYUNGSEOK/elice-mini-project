import styled from "styled-components";

interface Props {
  size: number;
  direction: "L" | "R";
  isClickable: boolean;
  dispatcher: () => void;
}

export default function PaginationArrowButton({
  size,
  direction,
  isClickable,
  dispatcher,
}: Props) {
  const handleOnClick = () => isClickable && dispatcher();

  return (
    <Button onClick={handleOnClick} $isClickable={isClickable}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        style={{
          width: size,
          aspectRatio: 1,
          transform: `rotate(${direction === "R" ? 180 : 0}deg)`,
          fill: isClickable ? "#222" : "#ccc",
        }}
      >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
      </svg>
    </Button>
  );
}

const Button = styled.button<{ $isClickable: boolean }>`
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "not-allowed")};
  display: flex;
  padding: 0;
  border: none;
`;
