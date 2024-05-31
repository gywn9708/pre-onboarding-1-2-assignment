import { useNavigate } from 'react-router';
import S from './styles';

const ErrorScreen = () => {
  const navigate = useNavigate();
  const onHomePage = () => {
    navigate('/');
  };
  return (
    <S.Section>
      <S.Title>Not Found</S.Title>
      <S.HomeButton onClick={onHomePage} type="button">
        Go Home
      </S.HomeButton>
    </S.Section>
  );
};
export default ErrorScreen;
