import { FC } from 'react';
import './styles/global.css';

import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import usePosts from './hooks/usePosts';

const App: FC = () => {
  const { data, isLoading } = usePosts();

  return (
    <>
      <Header />
      <Container>
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Feed data={data!} postsLoaded={isLoading} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
