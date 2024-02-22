interface Props {
  size: number;
}

export default function LevelIcon({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      style={{
        width: size,
        aspectRatio: 1,
      }}
    >
      <path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z" />
    </svg>
  );
}
