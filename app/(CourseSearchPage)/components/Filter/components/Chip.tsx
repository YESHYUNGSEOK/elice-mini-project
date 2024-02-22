"use client";

import { useState } from "react";
import styled from "styled-components";

export default function Chip({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
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
  transition: filter 0.2s ease;
`;
