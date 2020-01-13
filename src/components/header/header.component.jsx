import React from 'react'
import {Link} from 'react-router-dom';
import './header.styles.scss'



const Header = () => (
    <div className="header">
        <Link to = "/" className="option">
        <p>PROJECT</p>
        </Link>
        <div className = "options">
            <Link to = "/signin" className="option">
            SIGN IN
            </Link >
            <Link to = "/signup"className="option">
            SIGN UP
            </Link>
        </div>
    </div>
)


export default Header;