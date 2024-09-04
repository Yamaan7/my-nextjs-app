"use client"; // This ensures the component is rendered on the client side

import Link from 'next/link';

const Navbar = () => {
    return (
        <div style={{
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
        }}>
            <div className="logo">
                <h1>About<span style={{ color: '#EAB308' }}>Me</span></h1>
            </div>
            <nav>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    margin: 0,
                    padding: 0,
                    textTransform: 'uppercase',
                    fontWeight: 'normal',
                    fontSize: '24px',
                }}>
                    <li><Link href="#Homepage" >Home</Link></li>
                    <li><Link href="#About" >About</Link></li>
                    <li><Link href="#Education" >Education</Link></li>
                    <li><Link href="#Skills" >Skills</Link></li>
                    <li><Link href="#Experience" >Experience</Link></li>
                    <li><Link href="#Contact" >Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
