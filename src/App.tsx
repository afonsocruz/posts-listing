import { FC } from 'react';
import './styles/global.css';

import Feed from './components/Feed';
import CardsGrid from './components/CardsGrid';

import usePosts from './hooks/usePosts';
import Layout from './layout/Layout';

const App: FC = () => {
  const { data, isLoading } = usePosts();

  return (
    <>
      <Layout>
        <CardsGrid>
          <Feed data={data!} postsLoaded={isLoading} />
        </CardsGrid>
      </Layout>
    </>
  );
};

export default App;
