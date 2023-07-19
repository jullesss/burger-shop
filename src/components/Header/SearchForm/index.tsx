import { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext, IProduct } from '../../../providers/CartContext';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const { products, filteredProducts, setFilteredProducts } =
    useContext(CartContext);

  interface IFormProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  }

  const showProducts = (
    event: React.FormEvent<HTMLFormElement> /* :Event */
  ) => {
    event.preventDefault();
    if (inputValue) {
      const filters = products.filter(
        (element: IProduct) =>
          element.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          element.category.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filters);
    }
  };

  return (
    <StyledSearchForm onSubmit={(e) => showProducts(e)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        onChange={(event) => setInputValue(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
