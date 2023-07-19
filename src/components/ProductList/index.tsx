import { useContext } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { CartContext, IProduct } from '../../providers/CartContext';

const ProductList = () => {
  const { products, filteredProducts } = useContext(CartContext);
  return (
    <StyledProductList>
      {filteredProducts.length > 0
        ? filteredProducts.map((element: IProduct) => (
            <ProductCard key={element.id} element={element} />
          ))
        : products.map((element: IProduct) => (
            <ProductCard key={element.id} element={element} />
          ))}
    </StyledProductList>
  );
};
export default ProductList;
