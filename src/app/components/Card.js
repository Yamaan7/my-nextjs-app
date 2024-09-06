/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import React from 'react';

// Card Component
const Card = ({ logoSrc, headerText, descriptionText }) => {
    return (
        <div
            className='CardDiv'
            style={styles.card}>
            <div style={styles.logoContainer}>
                <img src={logoSrc} alt="Logo" style={styles.logo} />
            </div>
            <h2 style={styles.header}>{headerText}</h2>
            <p style={styles.description}>{descriptionText}</p>
        </div>
    );
};

// Styles
const styles = {
    card: {
        // width: '350px',
        // height: '500px',
        padding: '20px',
        backgroundColor: '#020617',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease', /* Smooth transition for hover effects */
        overflow: 'hidden', /* For neat appearance if content overflows */
    },
    logoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    logo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    header: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EAB308',
    },
    description: {
        fontSize: '1em',
        color: '#666',
        textAlign: 'center',
    },
};

export default Card;
