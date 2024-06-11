import React from 'react';
import '../TodoSearch/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input
      placeholder="Task search"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };