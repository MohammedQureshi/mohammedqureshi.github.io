import React from 'react'
import './ContactMeSection.css'
import profile from '../images/profile.png'

export const ContactMeSection = () => {
    return (
        <div className="contactbody">
            <div className="leftcontact">
                <img className="imgProps" src={profile} alt="contactme"/>
            </div>
            <div className="rightcontact">
                <h1 className="contactHeader">Contact Me <i class="fas fa-id-card"/></h1>
                <a href="https://www.linkedin.com/in/mohammed-faisal-qureshi"><p className="contactText"><i class="fab fa-linkedin"/> https://www.linkedin.com/in/mohammed-faisal-qureshi</p></a>
                <p className="contactText"><i class="fas fa-envelope-open-text"/> mohammedqureshi2998@gmail.com</p>
                <a href="https://github.com/MohammedQureshi"><p className="contactText"><i class="fab fa-github"/> https://github.com/MohammedQureshi</p></a>
                <a href="https://www.instagram.com/mohammedfqureshi"><p className="contactText"><i class="fab fa-instagram"/> https://www.instagram.com/mohammedfqureshi</p></a>
            </div>
        </div>
    )
}


export default ContactMeSection;