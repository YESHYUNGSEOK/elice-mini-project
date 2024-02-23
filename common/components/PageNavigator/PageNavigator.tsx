"use client";

import styled from "styled-components";
import PaginationArrowButton from "@/common/components/buttons/PaginationArrowButton";
import { usePagination } from "@/common/hooks/usePagination";
import { Dispatch, SetStateAction } from "react";

interface Props {
  totalLength: number;
  offset: number;
  count: number;
  dispatcher: Dispatch<SetStateAction<number>>;
}

export default function PageNavigator({
  totalLength,
  offset,
  count,
  dispatcher,
}: Props) {
  const { pages, currentPage, hasNextPage, hasPrevPage } = usePagination({
    offset,
    count,
    totalLength,
  });

  const hasNoData = totalLength === 0;

  return (
    <Wrapper $hasNoData={hasNoData}>
      <Navigator>
        <PaginationArrowButton
          size={25}
          direction="L"
          isClickable={hasPrevPage}
          dispatcher={() => {
            dispatcher(offset - count);
          }}
        />
        {pages.map((page) => (
          <IndexButton
            key={page}
            onClick={() => {
              dispatcher(count * (page - 1));
            }}
            $isCurrentPage={page === currentPage}
          >
            {page}
          </IndexButton>
        ))}
        <PaginationArrowButton
          size={25}
          direction="R"
          isClickable={hasNextPage}
          dispatcher={() => {
            dispatcher(offset + count);
          }}
        />
      </Navigator>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $hasNoData: boolean }>`
  display: ${(props) => (props.$hasNoData ? "none" : "flex")};
  justify-content: center;
  margin-top: 24px;
`;

const Navigator = styled.div`
  display: flex;
  align-items: center;
`;

const IndexButton = styled.button<{ $isCurrentPage: boolean }>`
  cursor: pointer;

  width: 24px;
  margin: 0px 6px;
  padding: 0;
  aspect-ratio: 1;
  border-radius: 4px;
  border: none;
  color: ${(props) =>
    props.$isCurrentPage ? "var(--white-color)" : "var(--gray-color2)"};
  background-color: ${(props) => props.$isCurrentPage && "var(--purple-color)"};
  &:hover {
    font-weight: 700;
    color: var(--purple-color);
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
`;
