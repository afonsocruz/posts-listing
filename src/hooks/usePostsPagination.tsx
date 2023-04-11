import React from 'react';
import usePosts from './usePosts';
import { Post } from '../types/types';

interface UsePostsPaginationProps {
  paginatedData: Post[] | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  postsPerPage: number;
}

const usePostsPagination = (pageSize: number): UsePostsPaginationProps => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data } = usePosts();

  const postsPerPage: number = pageSize;

  // Handle the logic to calculate the starting and ending indexes of the posts to be displayed in the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedData = data?.slice(startIndex, endIndex);

  return {
    paginatedData,
    setCurrentPage,
    currentPage,
    postsPerPage,
  };
};

export default usePostsPagination;
