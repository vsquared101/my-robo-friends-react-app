import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className="Search-Box">
            <input placeholder="Search Robot" onChange={onSearchChange}/>
        </div>
    );
};

export default SearchBox;