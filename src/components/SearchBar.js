import React, { useEffect, useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log(term)
  }, [term])

  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Search for a YouTube video!</label>
          <div className="ui icon input">
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="input"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
