interface Props {
  offset: number;
  count: number;
  totalLength: number;
}

export const usePagination = ({ offset, count, totalLength }: Props) => {
  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalLength / count);

  // 현재 페이지 계산 (offset을 이용)
  const currentPage = Math.floor(offset / count) + 1;

  // 다음 페이지의 offset 계산. 다음 페이지가 없다면 null 반환
  const nextOffset =
    currentPage * count < totalLength ? currentPage * count : null;

  // 이전 페이지의 offset 계산. 이전 페이지가 없다면 null 반환
  const prevOffset =
    (currentPage - 2) * count >= 0 ? (currentPage - 2) * count : null;

  return {
    currentPage,
    totalPages,
    nextOffset,
    prevOffset,
    hasPrevPage: prevOffset !== null,
    hasNextPage: nextOffset !== null,
  };
};
