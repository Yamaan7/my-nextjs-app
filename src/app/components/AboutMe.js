/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */



import React from 'react'

const AboutMe = () => {
    return (
        <div id='About' style={{
            padding: '96px 165px',
            alignItems: 'center',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
            <div>
                <img src="/Rectangle.png" style={{
                    position: 'absolute',
                    width: '415px',
                    height: '510px',
                    top: '150px',
                    left: '360px',
                    zIndex: 1,
                }} />
                <img src="/profileImage2.jpg" style={{
                    position: 'relative',
                    borderRadius: '24px',
                    zIndex: 2,
                }} />
            </div>


            <div style={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '466px',
                gap: '24px',
            }}>
                <h1 style={{
                    color: '#F3F4F6',
                    fontSize: '42px',
                    fontWeight: 'bold',
                    lineHeight: '64px',
                }}>About <span style={{
                    color: '#EAB308',
                }}>Me</span> </h1>
                <p style={{
                    color: '#6B7280',
                    fontSize: '20px',
                    fontWeight: 'regular',
                    lineHeight: '27px',
                }}>I am a web developer with a diverse skill set in HTML, CSS, JavaScript, TypeScript, React, and Next.js, complemented by experience in state management and API integration. My educational journey began at Iqra School Katlang Road Mardan, followed by a focus on Computer Science at Islamia College Peshawar, and culminated in a BS in Software Engineering from Islamia University Peshawar. I have freelanced on platforms like Fiverr and Upwork, where I have developed custom web solutions and collaborated with clients to deliver impactful, user-friendly applications. I am passionate about combining technology with creativity to solve problems and create meaningful digital experiences.</p>
                <button style={{
                    width: '145px',
                    color: 'black',
                    background: '#FACC15',
                    borderRadius: '4px',
                    padding: '8px 20px',
                }}>Contact Me</button>
            </div>
        </div>
    )
}

export default AboutMe