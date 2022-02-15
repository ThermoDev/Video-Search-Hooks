import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // Cleanup function, invoked in the next rerender
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm.length !== 0) onSubmit(debouncedTerm);
  }, [debouncedTerm, onSubmit]);

  return (
    <div>
      <div className="ui form">
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
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
