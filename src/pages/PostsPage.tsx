import React from 'react';

import Layout from '../layout/Layout';
import Feed from '../components/Feed';
import CardsGrid from '../components/CardsGrid';
import SearchBar from '../components/SearchBar';
import LoadingPage from '../components/UI/LoadingSpinner';
import PostsNotFound from '../components/PostsNotFound';
import Pagination from '../components/Pagination';

import usePosts from '../hooks/usePosts';
import useFilteredPosts from '../hooks/useFilteredPosts';
import { AppContext } from '../context/AppContext';

const PostsPage: React.FC = () => {
  const { currentPage, user } = React.useContext(AppContext);
  const [inputSearch, setInputSearch] = React.useState<string>('');
  const { isLoading, data } = usePosts();

  const postsPerPage: number = 20;

  const { filteredPosts } = useFilteredPosts(data!, inputSearch);

  if (isLoading) return <LoadingPage size={35} />;

  // Handle the logic to calculate the starting and ending indexes of the posts to be displayed in the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedData = data?.slice(startIndex, endIndex);

  if (!paginatedData) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Layout>
      {user && (
        <>
          <SearchBar
            onChange={(event) => setInputSearch(event.target.value)}
            value={inputSearch}
            onSubmit={handleSubmit}
          />
          {filteredPosts && filteredPosts.length === 0 && <PostsNotFound />}
          <CardsGrid>
            <Feed data={!inputSearch ? paginatedData : filteredPosts} />
          </CardsGrid>
          <Pagination postsPerPage={postsPerPage} currentPage={currentPage} />
        </>
      )}
    </Layout>
  );
};

export default PostsPage;
