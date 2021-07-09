import React from 'react'
import ProgrammingSkills from '../../components/skills/ProgrammingSkills';
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
                <div className="AboutMeText">
                    <h1>About Me</h1>
                    <p>Full-Stack Software Engineer with Bachelor's in Computer Science with a passion for technology and exploring current and upcoming technology. Interested in software analysis, development and software engineering. I also have an interest in other IT sectors such as cybersecurity and data development.</p>
                </div>
                <div className="MeOnLaptop" />
                <div className="scroll-about-me" onClick={() => scrollPage(2)}>
                        <p> Check out my skills </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="Skills">
            <div className="MeSitting" />
                <div className="SkillSet" ><ProgrammingSkills/></div>
                <div className="scroll-about-me" onClick={() => scrollPage(0)}>
                        <p> Back to the top </p>
                        <i className="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default HomePage
