import React from 'react'
import Card2 from './Card2'

const Skills = () => {
    return (
        <div id='Skills'
            style={{
                background: '#020617',
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
                paddingLeft: '215px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '42px',
                    fontWeight: 'bold',
                    lineHeight: '64px',
                }}>My <span style={{
                    color: '#EAB308',
                }}>Skills</span></h1>
                <h2 style={{
                    width: '50%',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    lineHeight: '27px',
                    color: '#6B7280',
                }}>Skilled in front-end development with expertise in HTML, CSS, JavaScript, TypeScript, React, and Next.js; experienced in state management with Redux and Zustand, API integration, and design with Figma.</h2>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '50px',
            }}>
                <Card2
                    logoSrc="/Frame1.png"
                    headerText="Front-End Development"
                    descriptionText="Expert in front-end development using HTML, CSS, JavaScript, TypeScript, React, and Next.js to build responsive web apps with Ant Design."
                />
                <Card2
                    logoSrc="/Frame2.png"
                    headerText="State Management and API Integration"
                    descriptionText="Experienced in managing state effectively using Redux and Zustand, and skilled in integrating and consuming REST APIs to build dynamic, data-driven applications."
                />
                <Card2
                    logoSrc="/Frame3.png"
                    headerText="Design and Prototyping"
                    descriptionText="Skilled in using Figma for design and prototyping, ensuring a seamless transition from design to development with a focus on user-centric interfaces."
                />
            </div>
        </div>
    )
}

export default Skills