import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

export interface IInput {
  label: string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

const Input = ({ label, type, register, error }: IInput) => (
  <fieldset>
    <StyledTextField type={type} label={label} {...register} />
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
