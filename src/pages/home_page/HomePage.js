import React,{useRef} from 'react'
import ProgrammingSkills from '../../components/skills/ProgrammingSkills';
import './HomePage.scss'

function HomePage() {

    const welcome = useRef(null);
    const aboutme = useRef(null);
    const skills = useRef(null);
    const goToWelcome = () => welcome.current.scrollIntoView({behavior: 'smooth'})    
    const goToAbout = () => aboutme.current.scrollIntoView({behavior: 'smooth'})    
    const goToSkills = () => skills.current.scrollIntoView({behavior: 'smooth'})    

    return (
        <div className="HomePage">
            <div className="WelcomeSection" ref={welcome}>
                <div className="Laptop" />
                <div className="MeStanding" />
                <h1>Hello, I'm Mohammed</h1>
                <h2>A Full Stack Software Engineer</h2>
                <div className="scroll-about-me" onClick={goToAbout}>
                        <p> Get to know me </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="AboutMeSection" ref={aboutme}>
                <div className="AboutMeText">
                    <h1>About Me</h1>
                    <p>Full-Stack Software Engineer with Bachelor's in Computer Science with a passion for technology and exploring current and upcoming technology. Interested in software analysis, development and software engineering. I also have an interest in other IT sectors such as cybersecurity and data development.</p>
                </div>
                <div className="MeOnLaptop" />
                <div className="scroll-about-me" onClick={goToSkills}>
                        <p> Check out my skills </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="Skills" ref={skills}>
            <div className="MeSitting" />
                <div className="SkillSet" ><ProgrammingSkills/></div>
                <div className="scroll-about-me" onClick={goToWelcome}>
                        <p> Back to the top </p>
                        <i className="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default HomePage
