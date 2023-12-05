import React, {useState} from 'react';

const Search = (props) => {
  const {searchMovies = Function.prototype} = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const onChange = (event) => {setSearch(event.target.value)}


  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type)
    }
  }

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  }

  return <div className="row">
    <div className="input-field">
      <input
        name="search"
        type="search"
        className="validate input-search"
        placeholder="Search"
        value={search}
        onChange={onChange}
        onKeyDown={handleKey}
      />
      <button
        className='btn btn-search'
        onClick={() => {searchMovies(search, type)}}
      >
        Search
      </button>
    </div>
    <div className='radio-btns'>
      <label>
        <input name="type"
          data-type="all"
          type="radio"
          checked={type === "all"}
          onChange={handleFilter}
        />
        <span>All</span>
      </label>
      <label>
        <input name="type"
          data-type="movie"
          type="radio"
          onChange={handleFilter}
          checked={type === "movie"}
        />
        <span>Movie</span>
      </label>
      <label>
        <input name="type"
          data-type="series"
          type="radio"
          onChange={handleFilter}
          checked={type === "series"}
        />
        <span>Series</span>
      </label>
    </div>
  </div>
}

export {Search}