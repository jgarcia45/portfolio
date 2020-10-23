import React from 'react';
import Link from './Link';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link href="/" className="button">Home</Link>
            <Link href="/About" className="button">About</Link>
            <Link href="/Projects" className="button">Projects</Link>
            <Link href="/Contact" className="button">Contact</Link>
        </nav>
    );

};

export default Header;