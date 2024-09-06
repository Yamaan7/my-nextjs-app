import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className='scrollButton'
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '100px',
                        fontSize: '40px',
                        backgroundColor: '#1F2937',
                        color: 'white',
                        border: '2px dashed #EAB308',
                        borderRadius: '50%',
                        width: '75px',
                        height: '75px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        transition: 'all 0.3s ease', /* Smooth transition for hover effects */
                    }}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollTop;