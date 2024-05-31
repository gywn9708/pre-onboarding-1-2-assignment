import { useMemo, useState, createContext } from 'react';

export const ListContext = createContext();
export const ListContextProvider = ({ children }) => {
  const [issues, setIssues] = useState({});
  const [page, setPage] = useState(1);
  const setNextPage = () => setPage(page + 1);
  const value = useMemo(
    () => ({ issues, page, setNextPage, setIssues }),
    [issues, page]
  );
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
