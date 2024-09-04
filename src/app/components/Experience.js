import React from 'react'
import Card from './Card'

const Experience = () => {
    return (
        <div
            id='Experience'
            style={{
                background: '#111827',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'left',
                padding: '96px 165px',
                gap: '56px',
            }}>
            <div style={{
                display: 'flex',
                gap: '24px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingLeft: '415px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '42px',
                    fontWeight: 'bold',
                    lineHeight: '64px',
                }}>My <span style={{
                    color: '#EAB308',
                }}>Experience</span></h1>
                <h2 style={{
                    width: '50%',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    lineHeight: '27px',
                    color: '#6B7280',
                }}>Freelanced as a Web Developer on Fiverr (July 2023 - Dec 2023) and Upwork (Jan 2024 - July 2024), delivering custom web solutions and creating impactful applications.</h2>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
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