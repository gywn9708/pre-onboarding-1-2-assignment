import React from 'react';
import Header from '../header/Header';
import S from './styles';

const Layout = ({ children, isError }) => {
  return (
    <S.Layout>
      {!isError && <Header />}
      {children}
    </S.Layout>
  );
};

export default Layout;
