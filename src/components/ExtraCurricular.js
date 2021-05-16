import React from 'react';
import './ExtraCurricular.css';

function ExtraCurricular({logo, date, certification}){
    return(
        <div className="ExtraCurr">
            <div className="complogo">
                <img class="complogoimg" src={logo} alt="complogo"/>
            </div>
            <div className="CurrInfo">
                <h2 className="jobtitlecss"> {certification} </h2>
                <h2 className="companyinfogrey">{date}</h2>
            </div>
        </div>
    )
}

export default ExtraCurricular;