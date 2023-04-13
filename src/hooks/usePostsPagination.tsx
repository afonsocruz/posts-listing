import React from 'react';
import usePosts from './usePosts';
import { Post } from '../types/types';
import { PageContext, SetPageContext } from '../context/PageContext';

interface UsePostsPaginationProps {
  paginatedData: Post[] | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  postsPerPage: number;
}

const usePostsPagination = (pageSize: number): UsePostsPaginationProps => {
  const currentPage = React.useContext(PageContext);

  const [localCurrentPage, setCurrentPage] = React.useState(currentPage);

  const { data } = usePosts();

  const postsPerPage: number = pageSize;

  // Handle the logic to calculate the starting and ending indexes of the posts to be displayed in the current page
  const startIndex = (localCurrentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedData = data?.slice(startIndex, endIndex);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    paginatedData,
    currentPage: localCurrentPage,
    setCurrentPage: handleChangePage as React.Dispatch<
      React.SetStateAction<number>
    >,
    postsPerPage,
  };
};

export default usePostsPagination;
