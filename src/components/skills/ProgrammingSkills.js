import React from 'react'
import './ProgrammingSkills.scss'
import SkillList from './SkillList'

function ProgrammingSkills(){
    return(
        <div className="programmingskills">
            <div className="programmingskills-header">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
            <div className="programmingskills-container">
                <h1>Skills</h1>
                <div className="programmingskills-skils">
                    <SkillList  />
                </div>
            </div>
        </div>
    )
}

export default ProgrammingSkills