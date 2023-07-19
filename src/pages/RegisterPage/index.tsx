import { Link } from 'react-router-dom';

import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';

import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';

const RegisterPage = () => (
  <StyledRegisterPage>
    <StyledContainer>
      <figure style={{ justifyContent: 'flex-start', height: '50px' }}>
        <img src='logo.svg' id='small-logo' alt='' />
      </figure>
      <div className='flexGrid'>
        <div className='left'>
          <IllustrationBox />
        </div>
        <div className='right'>
          <StyledGridBox className='formBox'>
            <header>
              <StyledTitle tag='h1' $fontSize='three'>
                Cadastro
              </StyledTitle>
              <Link to='/'>Retornar para o login</Link>
            </header>

            <RegisterForm />
          </StyledGridBox>
        </div>
      </div>
    </StyledContainer>
  </StyledRegisterPage>
);

export default RegisterPage;
