/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */



import React from 'react'
import Card from './Card'

const Experience = () => {
    return (
        <div
            className='EducationDiv'
            id='Experience'
            style={{
                background: '#111827',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'left',
                // padding: '96px 165px',
                gap: '56px',
            }}>
            <div style={{
                display: 'flex',
                gap: '24px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                // paddingLeft: '415px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '42px',
                    fontWeight: 'bold',
                    lineHeight: '64px',
                    textAlign: 'center',
                }}>My <span style={{
                    color: '#EAB308',
                }}>Experience</span></h1>
                <h2 style={{
                    width: '100%',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    lineHeight: '27px',
                    color: '#6B7280',
                    textAlign: 'center',
                }}>Freelanced as a Web Developer on Fiverr (July 2023 - Dec 2023) and Upwork (Jan 2024 - July 2024), delivering custom web solutions and creating impactful applications.</h2>
            </div>


            <div
                className='CardsContainer'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    // flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '25px',
                    width: '100%',
                }}>
                <Card
                    logoSrc="/fiverr2.png"
                    headerText="Freelance Web Developer"
                    descriptionText="Worked as a Freelance Web Developer from July 2023 to December 2023, delivering customized web solutions and exceeding client expectations."
                />
                <Card
                    logoSrc="/upwork2.png"
                    headerText="Freelance Web Designer"
                    descriptionText="Provided web development services on Upwork from January 2024 to July 2024, collaborating with clients to create impactful and user-friendly web applications."
                />
            </div>
        </div>
    )
}

export default Experience