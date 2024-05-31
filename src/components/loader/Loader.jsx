import React from 'react';
import S from './styles';

const Loader = () => {
  return (
    <S.Loader>
      <S.Spinner />
      <span>Loading...</span>
    </S.Loader>
  );
};

export default Loader;
