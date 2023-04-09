import { FC } from 'react';
import './styles/global.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
