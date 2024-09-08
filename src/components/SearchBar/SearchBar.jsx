import { useState } from 'react';
import toast from 'react-hot-toast';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const submitForm = e => {
    e.preventDefault();

    if (search.trim() === '') {
      toast.error('Search request can not be empty');
      return;
    }

    onSubmit(search);
  };

  return (
    <header className={style.searchBar}>
      <form onSubmit={submitForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
