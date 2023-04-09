import { FC, useState } from 'react';
import './styles/global.css';

import Feed from './components/Feed';
import CardsGrid from './components/CardsGrid';

import usePosts from './hooks/usePosts';
import Layout from './layout/Layout';
import SearchBar from './components/SearchBar';
import useFilteredPosts from './hooks/useFilteredPosts';

const App: FC = () => {
  const [inputSearch, setInputSearch] = useState('');

  const { data, isLoading } = usePosts();
  const { filteredPosts } = useFilteredPosts(data!, inputSearch);

  if (!data) return null;

  return (
    <>
      <Layout>
        <SearchBar
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
        />
        <CardsGrid>
          <Feed
            data={inputSearch ? filteredPosts! : data}
            postsLoaded={isLoading}
          />
        </CardsGrid>
      </Layout>
    </>
  );
};

export default App;
