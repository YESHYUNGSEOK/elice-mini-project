"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "@/common/hooks/useDebounce";
import SearchIcon from "@/common/components/icons/SearchIcon";

interface Props {
  value: string | null;
  dispatcher: Dispatch<SetStateAction<string | null>>;
}

export default function Search({ value, dispatcher }: Props) {
  if (!value) value = "";

  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(value);
  const { debounce } = useDebounce();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debounce(
      "course-search",
      () => {
        dispatcher(e.target.value);
      },
      300
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <SearchIconBox>
        <SearchIcon size={13} />
      </SearchIconBox>
      <TextBox
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={input}
        onChange={handleValueChange}
        ref={inputRef}
      ></TextBox>
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
