import React from 'react'
import './Card.scss'

function Card(props){
    return(
        <div className="card">
            <div className="card-header">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
            <div className="card-container">
                <div className="header">
                    <img src={props.workExperiences.companyLogo} alt={props.workExperiences.comapnyName} />
                    <div className="content">
                        <h1>{props.workExperiences.jobTitle}</h1>
                        <p>{props.workExperiences.companyName} - {props.workExperiences.position}</p>
                        <p>{props.workExperiences.startDate} - {props.workExperiences.endDate} • {props.workExperiences.timeOverall}</p>
                        <p>{props.workExperiences.location}</p>
                    </div>
                </div>
                <p className="description">{props.workExperiences.description}</p>
            </div>
        </div>
    )
}

export default Card