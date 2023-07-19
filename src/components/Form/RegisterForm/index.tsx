import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import {
  IRegisterFormValues,
  UserContext,
} from '../../../providers/UserContext/index';

const schema = yup
  .object({
    name: yup
      .string()
      .required('Nome é obrigatório')
      .matches(/.{3,}/, 'Deve conter no mínimo 3 caracteres'),
    email: yup
      .string()
      .email('Deve ser um e-mail')
      .required('E-mail é obrigatório'),
    password: yup
      .string()
      .required('A criação de senha é obrigatória')
      .matches(/(\d)/, 'Deve conter ao menos 1 número')
      .matches(/[a-z]/, 'Deve conter ao menos 1 letra mínuscula')
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/(\W|_)/, 'Deve conter ao menos 1 caracter especial')
      .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres'),
  })
  .required();

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const { submitsRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    submitsRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu nome:'
        type='text'
        register={register('name')}
        error={errors.name}
      />
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
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
