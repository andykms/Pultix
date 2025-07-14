import styles from './SearchField.module.scss';
import { InputUI } from '../../shared/ui/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { ButtonUI } from '../../shared/ui/Button/Button';

export const SearchField = (props: { searchValue: string }) => {
  const [value, setValue] = useState(props.searchValue);

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;

    setValue(inputValue);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length > 0) navigate(`/search?query=${value}`);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <InputUI onChange={onChange} value={value} placeholder='поиск' width='100%'>
        <ButtonUI htmlType='submit' type='tertiary' width='auto'>
          <svg
            width='30px'
            height='30px'
            viewBox='0 0 24 24'
            fill='var(--main-text-color)'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z'
              fill='var(--main-text-color)'
            />
          </svg>
        </ButtonUI>
      </InputUI>
    </form>
  );
};
