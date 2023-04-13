import React from 'react';
import usePosts from '../hooks/usePosts';
import { SetPageContext } from '../context/PageContext';

interface PaginationProps {
  postsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const setCurrentPage = React.useContext(SetPageContext);
  const { data } = usePosts();

  const handleClick = (i: number) => {
    setCurrentPage(i);
  };

  return (
    <div className="bg-white text-black">
      {Array.from(
        { length: Math.ceil(data?.length! / props.postsPerPage) },
        (_, i) => (
          <button key={i} onClick={() => handleClick(i + 1)}>
            {i + 1}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
