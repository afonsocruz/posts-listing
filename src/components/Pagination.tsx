import React from 'react';
import usePosts from '../hooks/usePosts';
import { SetPageContext } from '../context/PageContext';
import Button, { ButtonProps } from './Button';

interface CustomButtonProps extends ButtonProps {
  active: boolean;
}

interface PaginationProps {
  postsPerPage: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const setCurrentPage = React.useContext(SetPageContext);
  const { data } = usePosts();

  const handleClick = (i: number) => {
    setCurrentPage(i);
  };

  return (
    <div className="bg-secondary text-white flex items-center justify-center mt-16">
      {Array.from(
        { length: Math.ceil(data?.length! / props.postsPerPage) },
        (_, i) => (
          <Button
            key={i}
            onClick={() => handleClick(i + 1)}
            className={`mx-4 font-bold text-fluorescent ${
              i + 1 === props.currentPage ? 'opacity-100' : 'opacity-20'
            } hover:opacity-100`}
            label={i + 1}
          />
        )
      )}
    </div>
  );
};

export default Pagination;
