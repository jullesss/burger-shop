import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, ICartItem } from '../../../../providers/CartContext';

interface IProductCartProps {
  element: ICartItem;
}

const CartProductCard = ({ element }: IProductCartProps) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={element.img} alt={element.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {element.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeFromCart(element.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
