import { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/ListContext';
import getIssueList from '../utils/issueService';

const useFetch = () => {
  const { issues, setIssues, page } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastPage, setLastPage] = useState(false);
  const getList = async () => {
    setIsLoading(true);
    try {
      const data = await getIssueList(page);
      if (data.length === 0) {
        setLastPage(true);
      }
      setIssues(prev => {
        const updated = { ...prev };
        data.forEach(issue => {
          updated[issue.id] = issue;
        });
        return updated;
      });
    } catch (error) {
      setError(error.errorMessage);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getList();
  }, [page]);

  return [isLoading, error, issues, lastPage];
};

export default useFetch;
