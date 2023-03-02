import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { DiApple } from 'react-icons/di';
import { upFirstLetter } from 'utils/index';
import { Container, Title, SubTitle } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      <DiApple size={70} />
      <Title>Wellcome to your Phonebook!</Title>
      <SubTitle>
        {isLoggedIn
          ? `${upFirstLetter(name)}, it is safe place to keep your data`
          : 'To enter, please register or log in'}
      </SubTitle>
    </Container>
  );
}
