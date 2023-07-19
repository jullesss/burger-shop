/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api';

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  nome: string;
  email: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  submitsRegister: (formData: IRegisterFormValues) => Promise<void>;
  submitsLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogout: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const submitsRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post('/users', formData);
      setUser(response.data.user);
      localStorage.setItem(
        '@kenzie-hamburgueria-token',
        response.data.accessToken
      );
      toast.success('Cadastro feito com sucesso, bem vinde!');
      navigate('/shop');
    } catch (err) {
      toast.info(
        'Esse e-mail já está em uso. Faça o login ou crie uma nova conta'
      );
    } finally {
      setLoading(false);
    }
  };

  const submitsLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post('/login', formData);
      setUser(response.data);
      localStorage.setItem(
        '@kenzie-hamburgueria-token',
        response.data.accessToken
      );
      toast.success('Login feito com sucesso!');
      navigate('/shop');
    } catch (err) {
      toast.info('Algo deu errado, verifique as informações enviadas');
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@kenzie-hamburgueria-token');
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('@kenzie-hamburgueria-token');
    if (!token) {
      setLoading(false);
      setUser(null);
      navigate('/');
    }
    const getUser = async () => {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get('/products');
        navigate('/shop');
      } catch (err) {
        localStorage.removeItem('@kenzie-hamburgueria-token');
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        submitsRegister,
        submitsLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
