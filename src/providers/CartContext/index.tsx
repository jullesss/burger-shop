/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface ICartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (currentProduct: IProduct) => void;
  removeFromCart: (id: number) => void;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cart: ICartItem[];
  setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const localStorageCart = localStorage.getItem('@kenzie-hamburgueria-cart');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICartItem[]>(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [modal, setModal] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    localStorage.setItem('@kenzie-hamburgueria-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (currentProduct: IProduct) => {
    if (!cart.some((product: IProduct) => product.id === currentProduct.id)) {
      setCart((prevState) => [...prevState, currentProduct]);
      toast.success('Produto adicionado ao carrinho!');
    } else {
      toast.info('Produto já adicionado ao carrinho!');
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    toast.success('Produto removido do carrinho!');
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        modal,
        cart,
        setCart,
        setModal,
        addToCart,
        removeFromCart,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
