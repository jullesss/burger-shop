import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext';
import { UserContext } from '../../providers/UserContext';

const Header = () => {
  const { setUser } = useContext(UserContext);
  const { setModal } = useContext(CartContext);
  const navigate = useNavigate();

  const openModal = () => {
    setModal(true);
  };

  const logOut = () => {
    localStorage.removeItem('@kenzie-hamburgueria-token');
    setUser(null);
    navigate('/');
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img src='logo.svg' alt='' />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={openModal}>
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={logOut}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
