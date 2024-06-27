import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className='homefooter'>
            <div className='sociallinks'>


                <div className='linkedin'>
                    Linkedin
                </div>
                <div className='github'>
                    Github
                </div>
                <div className='instagram'>
                    Instagram
                </div>

            </div>
            <div className='copyright'>
                <p style={{ color: "white" }}>&copy; 2024  Gaurav Shakya. All Rights Reserved.</p>

            </div>

        </div>
    )
}
export default Footer;