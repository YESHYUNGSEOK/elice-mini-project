"use client";

import { ICourseChip } from "@/common/constants/filter.constant";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  targetChip: ICourseChip;
  chips: ICourseChip[];
  dispatcher: Dispatch<SetStateAction<ICourseChip[]>>;
}

export default function Chip({
  children,
  targetChip,
  chips,
  dispatcher,
}: Props) {
  const [isClicked, setIsClicked] = useState(
    chips.some((chip) => chip.name === children)
  );

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (chips.some((chip) => chip.name === children)) {
      dispatcher((prev) => prev.filter((chip) => chip.name !== children));
      return;
    }
    dispatcher([...chips, targetChip]);
  };

  return (
    <Wrapper onClick={handleClick} $isClicked={isClicked}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button<{ $isClicked: boolean }>`
  cursor: pointer;
  padding: 4px 12px;
  color: ${(props) =>
    props.$isClicked ? "var(--white-color)" : "var(--gray-color)"};
  background-color: ${(props) =>
    props.$isClicked ? "var(--purple-color)" : "var(--lightgray-color)"};
  border: none;
  border-radius: 10px;
  margin: 8px;
  font-size: 14px;
  &:hover {
    color: ${(props) => !props.$isClicked && "var(--black-color)"};
    filter: brightness(90%);
  }
  transition: all 0.3s ease;
`;
