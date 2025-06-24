import css from './SearchBox.module.css';
const SearchBox = ({ filter, onFilterChange }) => {
    return (
      <div className={css.wrapper}>
        <label htmlFor="search" className={css.label}>Find contact by name</label>
        <input
          id="search"
          type="text"
          value={filter}
          onChange={e => onFilterChange(e.target.value)}
          className={css.input}
          placeholder="Enter name to search..."
        />
      </div>
    );
  };
  export default SearchBox;