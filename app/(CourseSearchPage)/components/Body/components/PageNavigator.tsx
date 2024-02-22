"use client";

import styled from "styled-components";
import PaginationArrowIcon from "@/components/icons/PaginationArrowIcon";

export default function PageNavigator() {
  return (
    <Wrapper>
      <Navigator>
        <PaginationArrowIcon size={25} direction="left" />
        <IndexButton>1</IndexButton>
        <IndexButton>2</IndexButton>
        <IndexButton>3</IndexButton>
        <IndexButton>4</IndexButton>
        <IndexButton>5</IndexButton>
        <PaginationArrowIcon size={25} direction="right" />
      </Navigator>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Navigator = styled.div`
  display: flex;
  align-items: center;
`;

const IndexButton = styled.button`
  cursor: pointer;
  width: 24px;
  margin: 0px 6px;
  aspect-ratio: 1;
  border-radius: 4px;
  border: none;
  color: var(--gray-color2);
  &:focus {
    color: var(--white-color);
    background-color: var(--purple-color);
  }
  &:hover {
    font-weight: 700;
    color: var(--purple-color);
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
`;
