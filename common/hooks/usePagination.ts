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
  };
};
