import React from 'react';
import './search-box.styles.css';


// functional component - get props and returns html
// does not require access to state

export const SearchBox = ({ placehodler, handleChange }) => (
    <input className='search'
        type='search'
        placeholder={placehodler}
        onChange={handleChange}
    />
);
