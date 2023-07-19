import { StyledIllustrationBox } from './style';
import Icon from '../../assets/Icon.svg';
import { StyledParagraph } from '../../styles/typography';

const IllustrationBox = () => (
  <StyledIllustrationBox>
    <div id='illustrations'>
      <img src='bag.svg' alt='bag' />
      <img src='burger.svg' alt='Logo Kenzie Burguer' />
    </div>
    <div className='styledBox'>
      <img src={Icon} alt='Ícone de cesta de compras' />
      <StyledParagraph>
        Na Vurger Shop você mata sua fome <strong>sem</strong> crueldade animal!
      </StyledParagraph>
    </div>
  </StyledIllustrationBox>
);

export default IllustrationBox;
