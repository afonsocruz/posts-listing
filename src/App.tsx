import { FC, useState } from 'react';
import './styles/global.css';

import Feed from './components/Feed';
import CardsGrid from './components/CardsGrid';
import Layout from './layout/Layout';
import SearchBar from './components/SearchBar';

import usePosts from './hooks/usePosts';
import useFilteredPosts from './hooks/useFilteredPosts';
import LoadingPage from './components/LoadingSpinner';
import PostsNotFound from './components/PostsNotFound';

const App: FC = () => {
  const [inputSearch, setInputSearch] = useState('');
  const { data, isLoading } = usePosts();
  const { filteredPosts } = useFilteredPosts(data!, inputSearch);

  if (isLoading) return <LoadingPage />;

  if (!data) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
          <Feed data={!inputSearch ? data : filteredPosts} />
        </CardsGrid>
      </Layout>
    </>
  );
};

export default App;
