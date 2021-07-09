import React from 'react'
import './HomePage.scss'

function HomePage() {
    function scrollPage(pageNumber){
        let height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) *pageNumber;
        window.scrollTo({
            top: height,
            behavior: 'smooth'     
        })
    }
    return (
        <div className="HomePage">
            <div className="WelcomeSection">
                <div className="Laptop" />
                <div className="MeStanding" />
                <h1>Hello, I'm Mohammed</h1>
                <h2>A Full Stack Software Engineer</h2>
                <div className="scroll-about-me" onClick={() => scrollPage(1)}>
                        <p> Get to know me </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="AboutMeSection">
                <div className="MeStandingTwo" />
                <div className="scroll-about-me" onClick={() => scrollPage(2)}>
                        <p> Check out my skills </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="Skills">
                
                <div className="scroll-about-me" onClick={() => scrollPage(0)}>
                        <p> Back to the top </p>
                        <i className="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default HomePage
