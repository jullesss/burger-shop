import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import ShopPage from '../../pages/ShopPage';
import ProtectedRoute from '../ProtectedRoutes';

const Router = () => (
  <>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/shop' element={<ProtectedRoute />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
    <ToastContainer
      position='bottom-center'
      autoClose={1500}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  </>
);

export default Router;
