/* eslint-disable @next/next/no-img-element */
"use client";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">


                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <ul className="social-icons">
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-yamaan-arif-03b160321/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/Yamaan7" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Muhammad Yamaan Arif. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
