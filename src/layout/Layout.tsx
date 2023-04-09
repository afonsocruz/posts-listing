import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
