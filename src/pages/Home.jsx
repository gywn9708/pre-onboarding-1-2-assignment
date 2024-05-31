import React from 'react';
import IssueList from '../components/issueList/IssueList';
import Layout from '../components/layout/Layout';

const Home = ({ issues }) => {
  return (
    <Layout>
      <IssueList issues={issues} />
    </Layout>
  );
};

export default Home;
