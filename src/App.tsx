import React from 'react';
import './styles/global.css';

import Layout from './layout/Layout';
import Feed from './components/Feed';
import CardsGrid from './components/CardsGrid';
import SearchBar from './components/SearchBar';
import LoadingPage from './components/LoadingSpinner';
import PostsNotFound from './components/PostsNotFound';
import Pagination from './components/Pagination';

import usePosts from './hooks/usePosts';
import useFilteredPosts from './hooks/useFilteredPosts';
import usePostsPagination from './hooks/usePostsPagination';
import { PageContext, SetPageContext } from './context/PageContext';

const App: React.FC = () => {
  const [inputSearch, setInputSearch] = React.useState<string>('');
  const { isLoading } = usePosts();

  const postsPerPage: number = 20;

  const { paginatedData, currentPage, setCurrentPage } =
    usePostsPagination(postsPerPage);

  const { filteredPosts } = useFilteredPosts(paginatedData!, inputSearch);

  if (isLoading) return <LoadingPage />;

  if (!paginatedData) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <PageContext.Provider value={currentPage}>
      <SetPageContext.Provider value={setCurrentPage}>
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
          <Pagination postsPerPage={postsPerPage} />
        </Layout>
      </SetPageContext.Provider>
    </PageContext.Provider>
  );
};

export default App;
