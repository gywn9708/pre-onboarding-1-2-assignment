import styled from 'styled-components';

const List = styled.li`
  height: 10%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  padding: 1em 0.2em;
  font-size: 1rem;
  cursor: ${props => (props.params ? 'initial' : 'pointer')};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
const LeftBox = styled.div`
  flex: 85%;
  header {
    align-items: center;
    display: flex;
    font-weight: bolder;
  }
  header,
  div {
    margin-bottom: 0.5em;
  }

  span {
    margin-right: 1em;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
`;

const RightBox = styled.div`
  flex: 20%;
  font-size: 1rem;
  text-align: end;
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

const S = {
  List,
  LeftBox,
  RightBox,
  Title,
};

export default S;
