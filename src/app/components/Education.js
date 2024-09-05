/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */



import React from 'react'
import Card from './Card'

const Education = () => {
    return (
        <div
            className='EducationDiv'
            id='Education'
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
                // paddingLeft: '215px',
            }}>
                <h1 style={{
                    color: 'white',
                    fontSize: '42px',
                    fontWeight: 'bold',
                    lineHeight: '64px',
                    textAlign: 'center',
                }}>My <span style={{
                    color: '#EAB308',
                }}>Education</span></h1>
                <h2 style={{
                    width: '100%',
                    fontSize: '20px',
                    fontWeight: 'normal',
                    lineHeight: '27px',
                    color: '#6B7280',
                    textAlign: 'center',
                }}>Completed foundational education at Iqra School (2013-2017), advanced studies in Computer Science at Islamia College (2017-2019), and earned a BS in Software Engineering from Islamia University (2019-2023).</h2>
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
                    logoSrc="/iqraMardan.jpg"
                    headerText="Iqra School Katlang Road Mardan"
                    descriptionText="I studied at Iqra School Katlang Road Mardan from 2013 to 2017, where I laid the foundation for my academic journey."
                />
                <Card
                    logoSrc="/islamiacollege.png"
                    headerText="Islamia College Peshawar"
                    descriptionText="I studied Computer Science as part of my Intermediate (FSc) at Islamia College Peshawar from 2017 to 2019, building a solid base in the field of technology."
                />
                <Card
                    logoSrc="/islamiacollege.png"
                    headerText="Islamia University Peshawar"
                    descriptionText="I studied BS Software Engineering at Islamia University Peshawar from 2019 to 2023, where I developed a strong foundation in software development and technology."
                />
            </div>
        </div>
    )
}

export default Education