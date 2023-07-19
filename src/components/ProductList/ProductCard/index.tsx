/* eslint-disable arrow-body-style */
import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import UINumber from '../../UINumber/index';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, IProduct } from '../../../providers/CartContext';

interface IProductCardProps {
  element: IProduct;
}

const ProductCard = ({ element }: IProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={element.img} alt={element.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {element.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {element.category}
        </StyledParagraph>
        <StyledParagraph className='price'>
          <UINumber format='$0,0.00'>{element.price}</UINumber>
        </StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => addToCart(element)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
