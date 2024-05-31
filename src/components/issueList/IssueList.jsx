import React, { useContext } from 'react';
import S from './styles';
import IssueItem from '../issueItem/IssueItem';
import AdBox from '../adBox/AdBox';
import useFetch from '../../hooks/useFetch';
import useObservation from '../../hooks/useObservation';
import { ListContext } from '../../context/ListContext';
import Loader from '../loader/Loader';

const IssueList = () => {
  const { setNextPage } = useContext(ListContext);
  const [isLoading, error, issues, lastPage] = useFetch();
  const onObserve = (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && !lastPage) {
      setNextPage();
    }
  };

  const targetRef = useObservation(onObserve);

  return (
    <>
      <S.List>
        {Object.values(issues)
          .sort((a, b) => b.comments - a.comments)
          .map((issue, idx) => {
            if (idx === 4) {
              return (
                <div key={issue.id}>
                  <AdBox />
                  <IssueItem {...issue} />
                </div>
              );
            }
            return <IssueItem key={issue.id} {...issue} />;
          })}
        {isLoading && <Loader />}
      </S.List>
      {!lastPage ? (
        <S.Target ref={targetRef} />
      ) : (
        <S.Banner>마지막 페이지입니다🎈</S.Banner>
      )}
    </>
  );
};

export default IssueList;
