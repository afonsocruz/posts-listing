import React from 'react';
import './styles/global.css';

import Feed from './components/Feed';
import CardsGrid from './components/CardsGrid';
import Layout from './layout/Layout';
import SearchBar from './components/SearchBar';

import usePosts from './hooks/usePosts';
import useFilteredPosts from './hooks/useFilteredPosts';
import LoadingPage from './components/LoadingSpinner';
import PostsNotFound from './components/PostsNotFound';
import usePostsPagination from './hooks/usePostsPagination';

const App = () => {
  const [inputSearch, setInputSearch] = React.useState<string>('');
  const { isLoading, data } = usePosts();
  const { paginatedData, currentPage, setCurrentPage, postsPerPage } =
    usePostsPagination(20);

  const { filteredPosts } = useFilteredPosts(paginatedData!, inputSearch);

  if (isLoading) return <LoadingPage />;

  if (!paginatedData) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  if (!data) return;

  return (
    <>
      <Layout>
        <SearchBar
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
          onSubmit={handleSubmit}
        />
        {filteredPosts && filteredPosts.length === 0 && <PostsNotFound />}
        <CardsGrid>
          <Feed data={!inputSearch ? paginatedData : filteredPosts} />
        </CardsGrid>
      </Layout>
    </>
  );
};

export default App;
