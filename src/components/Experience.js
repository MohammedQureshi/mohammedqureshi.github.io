import React from 'react';
import './Experience.css'

function Experience({logo, jobtitle, company, dateworked, location, description}){
    return(
        <div className="Experience">
            <div className="CompanyLogo">
                <img class="companylogoimg" src={logo} alt="complogo"/>
            </div>
            <div className="CompanyInfo">
                <h2 className="jobtitlecss"> {jobtitle} </h2>
                <h2 className="companyname">{company}</h2>
                <h2 className="companyinfogrey">{dateworked}</h2>
                <h2 className="companyinfogrey">{location}</h2>
                <h2 className="companyname">{description}</h2>
            </div>
        </div>
    )
}

export default Experience;