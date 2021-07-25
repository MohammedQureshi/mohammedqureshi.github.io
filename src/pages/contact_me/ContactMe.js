import React from 'react'
import './ContactMe.scss'

function ContactMe(){
    return(
        <div className="ContactMe">
            <h1> Contact Me </h1>
            <div className="standinghandpocket" />
            <div className="MainBody">
                <p>I currently work as a Junior Full Stack Software Engineer but if you are interested in getting in touch with me look at the links below! I am always looking to build up my skills in all areas of the tech world. Get in contact as well if you would like to see more projects I have worked on and other skills I have! </p>
            </div>
            <div className="ContactDetails">
                <h1>Get In Touch</h1>
                    <p><a href="https://www.linkedin.com/in/mohammed-faisal-qureshi/">https://www.linkedin.com/in/mohammed-faisal-qureshi</a></p>
                    <p><a href="mailto:mohammedqureshi2998@gmail.com">mohammedqureshi2998@gmail.com</a></p>
                    <p><a href="https://github.com/MohammedQureshi">https://github.com/MohammedQureshi</a></p>
                    <p><a href="https://www.instagram.com/mohammedfqureshi/">https://www.instagram.com/mohammedfqureshi</a></p>
            </div>
        </div>
    )
}

export default ContactMe