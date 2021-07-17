import React,{useRef} from 'react'
import './Experiance.scss'
import WorkExperienceList from '../../components/work-experience/WorkExperience';
import edgehilluniversity from '../../images/company_logos/edgehilluniversity.png'

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
            
            <div className="education" ref={education} >
                <div className="university">
                    <img src={edgehilluniversity} alt="EdgeHillLogo" />
                    <h1 className="university-title"> Edge Hill University </h1>
                </div>
                <div className="award">
                    <h1>BACHELOR OF SCIENCE WITH HONOURS IN COMPUTER SCIENCE</h1>
                    <h2>Second Class Honours (Division One)</h2>
                    <p className="bold">Modules</p>
                    <p>Foundations of Computer Science, Digital World, Programming, Web Design and Development, Databases, Employability, Data Analytics, Statistical Inference, Introduction to Security, Software Engineering, Research and Development Project, Complex System, Research and Development Methods, Mathematical Models, Internet Security.</p>
                    <p className="bold">Research and Development Project</p>
                    <p>I conducted research on product reviews for a set company and set up a program where I will be able to use AI to analyse the review and detect the emotions that It gives off to help support business in improving their product. Features will be added to automatically analyse certain features within the product itself.</p>
                </div>
                <div className="scroll-about-me" onClick={goToEducation}>
                        <p> Go To Licenses And Certifications </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    )
}

export default ExperiancePage
