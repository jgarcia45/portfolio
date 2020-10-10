import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <nav>
            <Link href="/" className="">Home</Link> |
            <Link href="/About" className="">About</Link> |
            <Link href="/Projects" className="">Projects</Link> |
            <Link href="/Contact" className="">Contact</Link>
        </nav>
    );

};

export default Header;