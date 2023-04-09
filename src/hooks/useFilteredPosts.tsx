import React from 'react';
import { Post } from '../types/types';

const useFilteredPosts = (posts: Post[], inputSearch: string) => {
  const filteredPosts = React.useMemo(() => {
    const lowerSearch = inputSearch.toLowerCase();

    return posts?.filter((post) => {
      return post.title.toLowerCase().includes(lowerSearch);
    });
  }, [inputSearch]);

  return {
    filteredPosts,
  };
};

export default useFilteredPosts;
