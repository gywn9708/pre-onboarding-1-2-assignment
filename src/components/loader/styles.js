import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 5em;
  height: 5em;
  margin: 1em;
  border-radius: 50%;
  border: 0.6em solid lightgray;
  border-top: 0.6em solid lightblue;
  animation: ${spin} 1.5s infinite;
`;

const Loader = styled.div`
  align-self: center;
  text-align: center;
`;

const S = {
  Loader,
  Spinner,
};

export default S;
