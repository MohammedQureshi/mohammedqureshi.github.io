import React from "react";
import './ProgrammingSkills'

const SkillsPanel = (props) => {
    let listSkills = props.passedSkills.map((skill, index) => {
        return(
            <li key={`${skill.text}_${index}`}>
                {skill.icon}
                <h3>{skill.text}</h3>
            </li>
        )
    })
    return <ul>{listSkills}</ul>
}

SkillsPanel.defaultProps = {
    passedSkills:[]
}

export default SkillsPanel;