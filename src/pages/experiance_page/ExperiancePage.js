import React,{useRef} from 'react'
import './Experiance.scss'
import WorkExperienceList from '../../components/work-experience/WorkExperience';

function ExperiancePage() {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    const education = useRef(null);
    const goToEducation = () => education.current.scrollIntoView({behavior: 'smooth'})    
    return (
        <div className="experience">            
            <div className="top-panel">
                <h1 className="experience-title"> Work Experience </h1>
                <div className="work-experience">
                    <button onClick={() => scroll(-420)} className="left-slider"><i className="fas fa-chevron-left" /></button>
                    <div className="experience-cards">
                        <div className="MeLeaning" />
                        <div className="experience-container" ref={ref} >
                            <div className="work"><WorkExperienceList /></div>
                        </div>
                    </div>
                    <button onClick={() => scroll(420)} className="right-slider"><i className="fas fa-chevron-right" /></button>
                </div>
                <div className="scroll-about-me" onClick={goToEducation}>
                        <p> Go to Education </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            
            <div className="education" ref={education} ></div>
        </div>
    )
}

export default ExperiancePage
