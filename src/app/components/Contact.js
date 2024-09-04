import React from 'react'

const Contact = () => {
    return (
        <div
            id='Contact'
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '75px',
            }}>
            <div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                    paddingTop: '96px',
                    paddingBottom: '56px',
                }}>
                    <h1 style={{
                        fontSize: '42px',
                        fontWeight: 'bold',
                    }} className='contactInfo'>Contact <span style={{
                        color: '#EAB308',
                    }}>Me</span></h1>
                    <h3 style={{
                        fontSize: '20px',
                        color: '#9CA3AF',
                    }}>Feel free to reach out to me for any web development inquiries or opportunities—I'd love to connect and collaborate!</h3>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'stretch',
                    marginTop: '56px',
                }}>
                    <div className='contactInfo' style={{
                        width: '347px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    }}>
                        <h2><span>Address:</span> Maira Banda, Gaddar, Mardan, Khyber Pakhtunkhwa, Pakistan</h2>
                        <h2><span>Phone:</span> 03332248323</h2>
                        <h2><span>Email:</span> yamaanmuhammad@gmail.com</h2>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        gap: '25px',
                    }}>
                        <input type="text" placeholder='Name' />
                        <textarea name="message" id="message" placeholder='Message' ></textarea>
                        <button style={{
                            width: '145px',
                            color: 'black',
                            background: '#FACC15',
                            borderRadius: '4px',
                            padding: '8px 20px',
                        }}>Contact Me</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Contact