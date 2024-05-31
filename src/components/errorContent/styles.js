import styled from 'styled-components';

const ContentBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  h1 {
    margin: 0;
    font-weight: 200;
    font-size: 2rem;
  }
  img {
    width: 600px;
    margin-bottom: 1em;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 1em;
  svg {
    margin-right: 0.5em;
  }
`;

const S = { ContentBox, Button };
export default S;
