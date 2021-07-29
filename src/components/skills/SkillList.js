import React from 'react'
import Skill from './Skill'
import SkillsPanel from './SkillsPanel'
import { ReactComponent as Angular } from '../../icons/Angular.svg';
import { ReactComponent as AWS } from '../../icons/AWS.svg';
import { ReactComponent as Azure } from '../../icons/Azure.svg';
import { ReactComponent as Bootstrap } from '../../icons/Bootstrap.svg';
import { ReactComponent as CSS } from '../../icons/CSS.svg';
import { ReactComponent as Firebase } from '../../icons/Firebase.svg';
import { ReactComponent as Git } from '../../icons/Git.svg';
import { ReactComponent as Heroku } from '../../icons/Heroku.svg';
import { ReactComponent as HTML } from '../../icons/HTML.svg';
import { ReactComponent as Java } from '../../icons/Java.svg';
import { ReactComponent as Javascript } from '../../icons/Javascript.svg';
import { ReactComponent as MySQL } from '../../icons/MySQL.svg';
import { ReactComponent as Node } from '../../icons/Node.svg';
import { ReactComponent as Python } from '../../icons/Python.svg';
import { ReactComponent as ReactIcon } from '../../icons/React.svg';
import { ReactComponent as RubyOnRails } from '../../icons/RubyOnRails.svg';
import { ReactComponent as Sass } from '../../icons/Sass.svg';
import { ReactComponent as SpringBoot } from '../../icons/SpringBoot.svg';
import { ReactComponent as TypeScript } from '../../icons/TypeScript.svg';

function SkillList(){
    let color = "var(--color)"
    const skills = [
        new Skill(
            <Angular stroke={color} />, 
            'Angular'
        ),
        new Skill(
            <AWS fill={color} />, 
            'AWS'
        ),
        new Skill(
            <Azure fill={color} />, 
            'Azure'
        ),
        new Skill(
            <Bootstrap fill={color} />, 
            'Bootstrap'
        ),
        new Skill(
            <CSS fill={color} />, 
            'CSS'
        ),
        new Skill(
            <Firebase fill={color} />, 
            'Firebase'
        ),
        new Skill(
            <Git fill={color} />, 
            'Git'
        ),
        new Skill(
            <Heroku fill={color} />, 
            'Heroku'
        ),
        new Skill(
            <HTML fill={color} />, 
            'HTML'
        ),
        new Skill(
            <Java fill={color} />, 
            'Java'
        ),
        new Skill(
            <Javascript fill={color} />, 
            'Javascript'
        ),
        new Skill(
            <MySQL fill={color} />, 
            'MySQL'
        ),
        new Skill(
            <Node fill={color} />, 
            'Node'
        ),
        new Skill(
            <TypeScript fill={color} />, 
            'TypeScript'
        ),
        new Skill(
            <Python fill={color} />, 
            'Python'
        ),
        new Skill(
            <ReactIcon fill={color} />, 
            'React'
        ),
        new Skill(
            <RubyOnRails fill={color} />, 
            'RubyOnRails'
        ),
        new Skill(
            <Sass fill={color} />, 
            'Sass'
        ),
        new Skill(
            <SpringBoot fill={color} />, 
            'SpringBoot'
        )
    ]
    return  <SkillsPanel passedSkills={skills} />
    
}

export default SkillList