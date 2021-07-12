import React from 'react';
import Footer from './partials/Footer';
import Header from './partials/Header';
import './styles.scss';

const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
