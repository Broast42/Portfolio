import React from 'react';

const ProjectCard = (props) => {

    

    return (
        <div className="project-card project-card-themed">
            <div className="project-card-title">
                {props.logo === null ?
                    null
                :
                    <img src={props.logo} alt={props.logo_alt} />
                }

                <a className={`logo-link ${props.title_style}`} href={props.page_link}>{props.title}</a>
            </div>
            <div className="project-descript-full">
                <p>{props.full_descript}</p>
            </div>
            <div className="project-descript">
                {props.descript.map((x,index) => (
                    <p key={index}>{x}</p>
                ))}
            </div>
            <div className={`project-link ${props.links_style}`}>
                <a href={props.page_link}>{props.link_title}</a>
            </div>
            <div className={`project-link ${props.links_style}`}>
                <a href={props.gitHub_repo}>GitHub Repo </a>
            </div>
        </div>

    )
}

export default ProjectCard;