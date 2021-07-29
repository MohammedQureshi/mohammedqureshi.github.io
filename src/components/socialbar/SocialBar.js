import React from 'react'
import './SocialBar.scss'


function navigatePage(website){
    window.open(website);
}
function SocialBar(){
    return(
        <div className="sidebar">
            <div className="icons">
                <div className='inline-icon' onClick={() => navigatePage("https://www.linkedin.com/in/mohammed-faisal-qureshi/")}><i className="fab fa-linkedin-in"/></div>
                <div className='inline-icon' onClick={() => navigatePage("https://github.com/MohammedQureshi")}><i className="fab fa-github"/></div>
                <div className='inline-icon' onClick={() => navigatePage("https://www.instagram.com/mohammedfqureshi/")}><i className="fab fa-instagram"/></div>
            </div>
        </div>
    )
}

export default SocialBar