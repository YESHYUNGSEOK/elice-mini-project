"use client";

import styled from "styled-components";
import PaginationArrowIcon from "@/common/components/icons/PaginationArrowIcon";
import { usePagination } from "@/common/hooks/usePagination";
import { Dispatch, SetStateAction } from "react";

interface Props {
  totalLength: number;
  offset: number;
  count: number;
  dispatcher: Dispatch<SetStateAction<number>>;
}

function calculatePageRange(currentPage: number, totalPages: number) {
  const MAX_ADJACENT_PAGES = 4;
  let startPage, endPage;

  if (currentPage - MAX_ADJACENT_PAGES <= 1) startPage = 1;
  else startPage = currentPage - MAX_ADJACENT_PAGES;

  if (currentPage + MAX_ADJACENT_PAGES >= totalPages) endPage = totalPages;
  else if (startPage === 1) endPage = startPage + MAX_ADJACENT_PAGES * 2;
  else endPage = currentPage + MAX_ADJACENT_PAGES;

  if (endPage === totalPages) startPage = endPage - MAX_ADJACENT_PAGES * 2;

  const pages = [];

  for (let page = startPage; page <= endPage; page++) {
    if (page > 0 && page <= totalPages) pages.push(page);
  }

  return pages;
}

export default function PageNavigator({
  totalLength,
  offset,
  count,
  dispatcher,
}: Props) {
  const { currentPage, totalPages, nextOffset, prevOffset } = usePagination({
    offset,
    count,
    totalLength,
  });
  const pages = calculatePageRange(currentPage, totalPages);

  return (
    <Wrapper>
      <Navigator>
        <PaginationArrowIcon
          size={25}
          direction="left"
          isClickable={prevOffset !== null}
          dispatcher={() => {
            dispatcher(offset - count), window.scrollTo(0, 0);
          }}
        />
        {pages.map((page) => (
          <IndexButton
            key={page}
            onClick={() => {
              dispatcher(count * (page - 1));
              window.scrollTo(0, 0);
            }}
            $isCurrentPage={page === currentPage}
          >
            {page}
          </IndexButton>
        ))}
        <PaginationArrowIcon
          size={25}
          direction="right"
          isClickable={nextOffset !== null}
          dispatcher={() => {
            dispatcher(offset + count), window.scrollTo(0, 0);
          }}
        />
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

const IndexButton = styled.button<{ $isCurrentPage: boolean }>`
  cursor: pointer;
  width: 24px;
  margin: 0px 6px;
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
