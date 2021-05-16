import React from 'react'
import './Education.css'
import './Global.css'

function Education({logo, universityname, degree, dateattendeed, location, modules, researchproject}){
    return(
        <div className="Education">
            <div className="CompanyLogo">
                <img class="companylogoimg" src={logo} alt="complogo"/>
            </div>
            <div className="EducationInfo">
                <h2 className="jobtitlecss"> {universityname} </h2>
                <h2 className="companyname">{degree}</h2>
                <h2 className="companyinfogrey">{dateattendeed}</h2>
                <h2 className="companyinfogrey">{location}</h2>
                <h2 className="companyname">Modules</h2>
                <h2 className="companyinfogrey">{modules}</h2>
                <h2 className="companyname">Research and Development Project</h2>
                <h2 className = "companyinfogrey">{researchproject}</h2>
            </div>
        </div>
    )
}

export default Education;