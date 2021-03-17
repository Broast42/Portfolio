import React from 'react';
import ProjectCard from './ProjectCard';
import {projects} from '../../DyData';

const Projects = () => {

    const data = projects;
    // const data = [
    //     {
    //         title: "Carpet Advantage",
    //         logo: "/img/calogo.png",
    //         logo_alt: "Carpet Advantage Logo",
    //         page_link: "http://www.carpet-advantage.com",
    //         title_style: "carpet-advantage",
    //         full_descript: "Commercial web site for Carpet Advantage Carpet Cleaners",
    //         descript: [
    //             "• Completely re-designed from the ground up using React",
    //             "• Node API for admin panel allowing for editing of data",
    //             "• Responsive design for adequate viewing on screens of all sizes",
    //             "• Future versions to include appointment scheduling and automatic billing",
    //         ],
    //         link_title: "carpet-advantage.com",
    //         gitHub_repo: "https://github.com/Broast42/carpet-advantage/",
    //         links_style: "ca-link" 

    //     },
    //     {
    //         title: "Conway's Game of Life",
    //         logo: null,
    //         logo_alt: null,
    //         page_link: "https://conways-game-o-life.netlify.app/",
    //         title_style: "conway",
    //         full_descript: "Simulation based on John Conway’s rules of cellular automaton",
    //         descript: [
    //             "• Built using React and CSS Grid",
    //             "• Pre-set grids to show how formations adapt over time",
    //             "• UI options to slow down, speed up, pause, and re-set simulation",
    //             "• Designed to adhere to Conways strict rules of cellular regeneration and degradation ",
    //         ],
    //         link_title: "Conways Game O Life",
    //         gitHub_repo: "https://github.com/Broast42/conways-game-of-life",
    //         links_style: "conway-link" 

    //     },
    //     {
    //         title: "Celebrity Dead or Alive",
    //         logo: null,
    //         logo_alt: null,
    //         page_link: "https://celeb-dead-or-alive.netlify.app/",
    //         title_style: "celeb",
    //         full_descript: "Landing page that links to a React app quiz",
    //         descript: [
    //             "• Simple landing page using only HTML, CSS, and JavaScript",
    //             "• Used JavaScript to create a mini quiz to entice users to continue on to the app.",
    //             "• Completed in one week remotely within a cross-functional team of six",
    //         ],
    //         link_title: "Celeb Dead or Alive",
    //         gitHub_repo: "https://github.com/Build-Week-PT-Celebrity-Dead-Or-Alive/Marketing-Page",
    //         links_style: "celeb-link" 

    //     },
    // ]

    return (
        <div>
            <div className="projects projects-themed">
                <h3>View My Work</h3>
            </div>
            {/* <ProjectCard /> */}
            {data.map((x, index) => (
                <ProjectCard 
                    key={index}
                    title={x.title}
                    logo={x.logo}
                    logo_alt={x.logo_alt}
                    page_link={x.page_link}
                    title_style={x.title_style}
                    full_descript={x.full_descript}
                    descript={x.descript}
                    link_title={x.link_title}
                    gitHub_repo={x.gitHub_repo}
                    links_style={x.links_style}
                />
            ))}
        </div>
        
    )
}

export default Projects;