import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <footer className="footer px-9 py-14 lg:px-24 lg:pt-20 lg:pb-28 lg:flex lg:justify-between">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>

                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover"></Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teeth Whitening</Link>


                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>

                </div>
            </footer>
            <div className='text-center mb-11'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;