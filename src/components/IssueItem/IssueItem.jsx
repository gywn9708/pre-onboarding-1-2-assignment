import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router';
import S from './styles';
import formatDate from '../../utils/formatDate';

const IssueItem = ({ id, number, title, user, created_at, comments }) => {
  const navigate = useNavigate();
  const params = useParams();
  const date = formatDate(created_at);
  const handleClick = () => {
    if (!params.id) {
      navigate(`/detail/${id}`);
    }
  };
  return (
    <S.List onClick={handleClick} params={!!params.id}>
      <S.LeftBox>
        <header>
          <span>{`#${number}`}</span>
          <S.Title>{title}</S.Title>
        </header>
        <div>
          <span>{`작성자: ${user && user.login}`}</span>
          <span>{date}</span>
        </div>
      </S.LeftBox>
      <S.RightBox>
        코멘트:
        {comments}
      </S.RightBox>
    </S.List>
  );
};

export default memo(IssueItem);
