/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 615);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu after clicking a link
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div style={{
            width: '100%',
            background: '#020617',
            padding: '0 25px',
            fontFamily: 'Arial',
            fontSize: '2em',
            fontWeight: 'bold',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px',
            position: 'fixed',
            zIndex: 50,
        }}>
            <div className="navLogo">
                <h1>About<span style={{ color: '#EAB308' }}>Me</span></h1>
            </div>
            <nav>
                {isMobile && (
                    <button onClick={toggleMenu} className="hamburger">
                        ☰
                    </button>
                )}
                <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    {/* Close the menu when a link is clicked */}
                    <li><Link href="#Homepage" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="#About" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#Education" onClick={closeMenu}>Education</Link></li>
                    <li><Link href="#Skills" onClick={closeMenu}>Skills</Link></li>
                    <li><Link href="#Experience" onClick={closeMenu}>Experience</Link></li>
                    <li><Link href="#Contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
