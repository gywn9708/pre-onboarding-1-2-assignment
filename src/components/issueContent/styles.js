import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  img {
    border-radius: 0.5em;
    width: 10%;
    margin-right: 0.5em;
  }
  li {
    flex: 90%;
  }
`;

const ContentBox = styled.main`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 600px) and (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.4rem;
  }
`;

const S = { Header, ContentBox };
export default S;
