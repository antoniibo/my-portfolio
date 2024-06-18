import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <footer>
            <div className="flex-row">
                <p className='sign-footer'>Designed and Developed by Antonii Bondar</p>
                <div className='social-footer'>
                    <a href="https://www.instagram.com/antonii.bo.ol?igsh=MXNvNnRkMGJxOHFoYQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/antonii-bondar-183770290/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/antoniibo" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <p className='copyright'>All rights reserved 2024.</p>
            </div>
        </footer>
    )
}
export default Footer