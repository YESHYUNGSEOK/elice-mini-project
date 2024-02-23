interface Props {
  offset: number;
  count: number;
  totalLength: number;
}

export const usePagination = ({ offset, count, totalLength }: Props) => {
  const totalPages = Math.ceil(totalLength / count);

  const currentPage = Math.floor(offset / count) + 1;

  const nextOffset =
    currentPage * count < totalLength ? currentPage * count : null;

  const prevOffset =
    (currentPage - 2) * count >= 0 ? (currentPage - 2) * count : null;

  return {
    currentPage,
    totalPages,
    hasPrevPage: prevOffset !== null,
    hasNextPage: nextOffset !== null,
    pages: calculatePageRange(currentPage, totalPages),
  };
};

const calculatePageRange = (currentPage: number, totalPages: number) => {
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
};
