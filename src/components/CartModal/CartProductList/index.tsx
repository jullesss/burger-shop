import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext, ICartItem } from '../../../providers/CartContext';

const CartProductList = () => {
  const { setCart, cart } = useContext(CartContext);

  const removeAll = () => {
    setCart([]);
  };

  function calculator() {
    const mapAll = cart.map((element) => element.price);

    const reduceAll = mapAll.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return reduceAll.toFixed(2);
  }

  return (
    <StyledCartProductList>
      <ul>
        {cart.map((element: ICartItem) => (
          <CartProductCard key={element.id} element={element} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{calculator()}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => removeAll()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
