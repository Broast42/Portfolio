import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {skills} from '../../DyData';

const Skills = () => {

    const [skillDescript, setSkillDescript] = useState('');

    return(
        <div>
            <div className="skill-descript skill-descript-themed">
                <p>My Skills</p>
                <p className="skill-descript-container">{skillDescript}</p>
            </div>
            
            <div className="skills">
            
                {skills.map((x, index) => (
                    
                    <div key={index} className={`${x.color} skill-item`} onMouseEnter={() => setSkillDescript(x.descript)} onMouseLeave={() => setSkillDescript(" ")}>
                        <div className="icon-hover">
                            <FontAwesomeIcon   icon={x.icon} />
                            <p className="skill-name-themed hover-show">{x.name} </p>
                        </div>
                    </div>
                ))}   
            </div>
            
            
        </div>
    )
}

export default Skills;