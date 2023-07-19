import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import {
  UserContext,
  ILoginFormValues,
} from '../../../providers/UserContext/index';
import Input from '../Input';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Deve ser um e-mail')
      .required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();

const LoginForm = () => {
  const { submitsLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    submitsLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu email:'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Crie sua senha:'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
