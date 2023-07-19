import { CartProvider } from './providers/CartContext';
import { UserProvider } from './providers/UserContext/index';
import Router from './routes/PublicRoutes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </UserProvider>
  </>
);

export default App;
