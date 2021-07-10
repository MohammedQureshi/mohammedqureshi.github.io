import React from 'react'
import Skill from './Skill'
import SkillsPanel from './SkillsPanel'
import { ReactComponent as Azure } from '../../icons/Azure.svg';

function SkillList(){
    let color = "var(--color)"
    const skills = [
        new Skill(
            <Azure fill={color} />, 
            'Angular'
        ),
        new Skill(
            <Azure fill={color} />, 
            'Angular'
        ),
        new Skill(
            <Azure fill={color} />, 
            'Angular'
        ),
        new Skill(
            <Azure fill={color} />, 
            'Angular'
        ),
        new Skill(
            <Azure fill={color} />, 
            'Angular'
        )
    ]
    return  <SkillsPanel passedSkills={skills} />
    
}

export default SkillList