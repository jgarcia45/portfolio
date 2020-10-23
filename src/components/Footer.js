import React from 'react';
import Link from './Link';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <row>
                <div class="col-md-6 d-flex justify-content-start">
                    <div class="footer-copyright text-center bg-transparent">© 2020 Copyright: Garcia</div>
                </div>
                <div class="col-md-6 d-flex justify-content-end">
                    <Link href="https://github.com/jgarcia45" className="txtalign">Github</Link>
                    <Link href="https://www.linkedin.com/in/jgarcia45/" className="txtalign">Linkedin</Link>
                </div>
            </row>
        </footer>
    );
};

export default Footer;