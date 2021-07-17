import React,{useRef} from 'react'
import './Experiance.scss'
import WorkExperienceList from '../../components/work-experience/WorkExperience';
import edgehilluniversity from '../../images/company_logos/edgehilluniversity.png'
import sas from '../../images/company_logos/sas.png'
import microsoft from '../../images/company_logos/microsoft.png'
import roq from '../../images/company_logos/roq.png'
import barclays from '../../images/company_logos/barclays.png'
import ukfast from '../../images/company_logos/ukfast.png'
import milexa from '../../images/company_logos/milexa.png'
import linkedin from '../../images/company_logos/linkedin.png'
import '../../components/card/Card.scss'
import SlimCard from '../../components/SlimCard/SlimCard';

function ExperiancePage() {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    const workExperience = useRef(null);
    const goToWorkExperience = () => workExperience.current.scrollIntoView({behavior: 'smooth'})    
    const education = useRef(null);
    const goToEducation = () => education.current.scrollIntoView({behavior: 'smooth'})    
    const certification = useRef(null);
    const goToCertification = () => certification.current.scrollIntoView({behavior: 'smooth'})    
    return (
        <div className="experience">            
            <div className="top-panel" ref={workExperience}>
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
                <div className="scroll-about-me" onClick={goToCertification}>
                        <p> Go To Accomplishments </p>
                        <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className="certification" ref={certification} >
                <div className="spacer"></div>
                <div className="standingman"></div>
                <div className="awards">
                    <h1>Licenses & Certifications</h1>
                    <div className="card">
                        <div className="card-header">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                        <div className="card-container">
                            <SlimCard companylogo={linkedin} cert="Learning Java" company="LinkedIn" issued date="April 2021" />
                            <SlimCard companylogo={sas} cert="SAS Programming 1: Essentials" company="SAS" issued date="January 2020" />
                            <SlimCard companylogo={microsoft} cert="MTA - HTML5 Application Development Fundamentals" company="Microsoft" issued date="April 2018" />
                        </div>
                    </div>
                </div>
                <div className="extracurricular">
                    <h1>Extra-Curricular Technical Learning</h1>
                    <div className="card">
                        <div className="card-header">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                        <div className="card-container">
                            <SlimCard companylogo={roq} cert="Test Lab Visits" company="ROQ" date="January 2020" />
                            <SlimCard companylogo={roq} cert="Defectives Challenge" company="ROQ" date="November 2019" />
                            <SlimCard companylogo={barclays} cert="Technology Challenge" company="Barclays" date="November 2018" />
                            <SlimCard companylogo={ukfast} cert="Cyber Challenge" company="UK FAST" date="October 2018" />
                            <SlimCard companylogo={milexa} cert="Web Challenge" company="Milexa" date="October 2018" />
                        </div>
                    </div>
                </div>
                <div className="scroll-about-me" onClick={goToWorkExperience}>
                    <p> Back To The Top </p>
                    <i className="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    )
}

export default ExperiancePage
