import { useState } from "react";

export const usePagination = (
  initialPage: number = 1,
  itemsPerPage: number = 3
) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = (items: any[]) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  };

  const totalPages = (items: any[]) => {
    return Math.ceil(items.length / itemsPerPage);
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    paginate,
    changePage,
  };
};
