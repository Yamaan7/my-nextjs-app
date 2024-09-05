/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */



import React from 'react'

export default function Homepage() {
    return (
        <div id='Homepage'
            className='heroDiv'
            style={{
                background: '#111827',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'left',
                // padding: '96px 165px',
            }}>
            <div
                className='heroText'
                style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    width: '466px',
                    // gap: '24px',
                }}>
                <h3
                    className='HelloText'
                    style={{
                        lineHeight: '27px',
                        color: '#EAB308',
                    }}>Hello, Welcome</h3>
                <h1
                    className='heroName'
                    style={{
                        color: '#F3F4F6',
                        // fontSize: '42px',
                        fontWeight: 'bold',
                    }}>I'm Yamaan Arif</h1>
                <p
                    className='heroPara'
                    style={{
                        color: '#6B7280',
                        // fontSize: '20px',
                        // lineHeight: '27px',
                    }}>Welcome to my portfolio! I’m a passionate and skilled web developer with a strong foundation in front-end technologies and design. With experience in creating dynamic, responsive web applications and a keen eye for design, I am dedicated to building user-centric solutions that stand out.</p>
                <button
                    className='ContactButton'
                    style={{
                        // width: '145px',
                        color: 'black',
                        background: '#FACC15',
                        borderRadius: '4px',
                        // padding: '8px 20px',
                    }}>Contact Me</button>
            </div>

            <div>
                <img src="/profileImage.jpg" style={{ borderRadius: '24px' }} className='heroImage' />
            </div>
        </div>
    )
}
