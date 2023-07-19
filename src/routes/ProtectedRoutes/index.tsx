import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { CartContext } from '../../providers/CartContext';
import { api } from '../../services/api';

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { setProducts } = useContext(CartContext);

  useEffect(() => {
    const token = localStorage.getItem('@kenzie-hamburgueria-token');
    const getHamburgers = async () => {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get('/products');
        setProducts(response.data);
        navigate('/shop');
      } catch (err) {
        navigate('/');
      }
    };
    getHamburgers();
  }, []);

  return <Outlet />;
};

export default ProtectedRoute;
