"use client";

import styled from "styled-components";
import SearchIcon from "@/common/components/icons/SearchIcon";

export default function Search() {
  return (
    <Wrapper>
      <SearchIconBox>
        <SearchIcon size={13} />
      </SearchIconBox>
      <TextBox placeholder="배우고 싶은 언어, 기술을 검색해 보세요"></TextBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 0px;
  border: 1px solid var(--textbox-border-color);
  border-radius: 4px;
  background-color: var(--white-color);

  &:focus-within {
    border-color: var(--purple-color);
  }
`;

const SearchIconBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 16px;
`;

const TextBox = styled.input`
  font-size: 14px;
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: gray;
  }
`;
