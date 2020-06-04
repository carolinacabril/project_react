import React from 'react';
import './style.css';

function Search(){
    return(
        <div>
            <input type="search" placeholder="Buscar doação"></input>
            <button type="submit" className="search-button">Buscar</button>
        </div>
    )
}

export default Search;