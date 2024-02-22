interface Props {
  size: number;
  direction: "left" | "right";
}

export default function PaginationArrowIcon({ size, direction }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      style={{
        cursor: "pointer",
        width: size,
        aspectRatio: 1,
        transform: `rotate(${direction === "right" ? 180 : 0}deg)`,
        fill: "#222",
      }}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}
