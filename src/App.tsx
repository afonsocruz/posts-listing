import { FC } from 'react';
import './styles/global.css';

import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const data = [
  {
    id: 1,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 2,
    title: 'Sports',
    description: 'Basketball is cool',
    author: 'David Silva',
  },
  {
    id: 3,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 4,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 5,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 6,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 7,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 8,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
  {
    id: 9,
    title: 'Health',
    description: 'Health for your life',
    author: 'Afonso Cruz',
  },
];

const App: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((item) => (
            <Card
              key={item?.id}
              title={item?.title}
              description={item?.description}
              author={item?.author}
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
