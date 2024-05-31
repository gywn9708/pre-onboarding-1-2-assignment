import HTTPError from '../network/httpError';

const getIssueList = async page => {
  const response = await fetch(
    `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=30&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new HTTPError(response.status, response.statusText);
  } else {
    const data = await response.json();
    return data;
  }
};

export default getIssueList;
