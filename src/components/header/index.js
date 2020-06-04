import React from 'react';
import Navbar from '../navbar';
import Search from '../search';
import './style.css';

function Header(){
    return(
        <div className="header">
            <div className="container-header">
                <span className="logo">Doação</span>
                <Navbar />
                <Search />
            </div>
        </div>
    )
}

export default Header;