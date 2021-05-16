import React from 'react'
import './SideBar.css'


function navigatePage(website){
    window.open(website);
}
function SideBar(){
    return(
        <div className="sidebar">
            <div className="icons">
                <div className='inline-icon' onClick={() => navigatePage("https://www.linkedin.com/in/mohammed-faisal-qureshi/")}><i class="fab fa-linkedin-in"/></div>
                <div className='inline-icon' onClick={() => navigatePage("https://github.com/MohammedQureshi")}><i class="fab fa-github"/></div>
                <div className='inline-icon' onClick={() => navigatePage("https://www.instagram.com/mohammedfqureshi/")}><i class="fab fa-instagram"/></div>
            </div>
        </div>
    )
}

export default SideBar