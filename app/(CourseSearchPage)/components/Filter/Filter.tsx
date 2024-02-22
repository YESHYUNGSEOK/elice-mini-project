"use client";

import styled from "styled-components";

import Chip from "@/app/(CourseSearchPage)/components/Filter/components/Chip";

export default function Filter() {
  return (
    <Wrapper>
      <FilterList>
        <FilterTitle>가격</FilterTitle>
        <ChipContainer>
          <Chip>무료</Chip>
          <Chip>유료</Chip>
        </ChipContainer>
      </FilterList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  width: 100%;
  & > div {
    border: 1px solid var(--lightgray-color3);
    border-bottom: none;
  }
  & > div:last-child {
    border-bottom: 1px solid var(--lightgray-color3);
  }
`;

const FilterList = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: var(--gray-color);
  background-color: var(--lightgray-color2);
  width: 96px;
  padding: 14px 16px;
  border-right: 1px solid var(--lightgray-color3);
`;

const ChipContainer = styled.div`
  display: flex;
  padding: 0px 8px;
  background-color: var(--white-color);
  width: 100%;
`;
