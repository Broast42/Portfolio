import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faPython, faReact, faNpm, faLess, faSass, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
const skills = [
    {
        icon: faHtml5,
        name: 'HTML',
        color: 'html',
        descript: 'HTML, XML, and Semantic markup',
    },
    {
        icon: faCss3Alt,
        name: "CSS",
        color: 'css',
        descript: 'Proficent with modern CSS concepts',
    },
    {
        icon: faJsSquare,
        name: "JavaScript",
        color: 'javascript',
        descript: 'Well versed in JavasScript and DOM manipulation',
    },
    {
        icon: faReact,
        name: "React",
        color: 'react',
        descript: 'Experienced with React and Redux',
    },
    {
        icon: faNodeJs,
        name: "Node",
        color: 'node',
        descript: 'Efficent APIs built with Node and Express using RESTful methodologies',
    },
    {
        icon: faPython,
        name: "Python",
        color: 'python',
        descript: 'Trained in the core principles of Python, OOP, and Data Structures',
    },
    {
        icon: faDatabase,
        name: "SQL",
        color: 'sql',
        descript: 'Skilled with Relational Databases including PostgreSQL',
    },
    {
        icon: faNpm,
        name: "NPM",
        color: 'npm',
        descript: 'Regularly make use of npm and CLI',
    },
    {
        icon: faGithub,
        name: "GitHub",
        color: 'github',
        descript:'Knowledge of version controll via git and GitHub',
    },
    {
        icon: faLess,
        name: "Less",
        color: 'less',
        descript: 'Css preprocessing using Less',
    },
    {
        icon: faSass,
        name: "Sass",
        color: 'sass',
        descript: 'Css preprocessing using Sass',
    },
]

const longBio = "I’ve been a Full-Stack Web Developer for over a year building React apps and Node APIs. I started out teaching myself HTML and CSS and then attended Lambda School where I quickly picked up JavaScript, React, Node and Python. Since graduation I’ve been working on expanding my skill set to include Typescript and Java.  I am a self-published author and have passion for creative writing. I enjoy reading everything fiction and non-fiction from comic books to technical documentation. I’m a casual gamer and I love building, modding, and upgrading custom pcs."

const projects = [
    {
        title: "Carpet Advantage",
        logo: "/img/calogo.png",
        logo_alt: "Carpet Advantage Logo",
        page_link: "http://www.carpet-advantage.com",
        title_style: "carpet-advantage",
        full_descript: "Commercial web site for Carpet Advantage Carpet Cleaners",
        descript: [
            "• Completely re-designed from the ground up using React",
            "• Node API for admin panel allowing for editing of data",
            "• Responsive design for adequate viewing on screens of all sizes",
            "• Future versions to include appointment scheduling and automatic billing",
        ],
        link_title: "carpet-advantage.com",
        gitHub_repo: "https://github.com/Broast42/carpet-advantage/",
        links_style: "ca-link" 

    },
    {
        title: "Conway's Game of Life",
        logo: null,
        logo_alt: null,
        page_link: "https://conways-game-o-life.netlify.app/",
        title_style: "conway",
        full_descript: "Simulation based on John Conway’s rules of cellular automaton",
        descript: [
            "• Built using React and CSS Grid",
            "• Pre-set grids to show how formations adapt over time",
            "• UI options to slow down, speed up, pause, and re-set simulation",
            "• Designed to adhere to Conways strict rules of cellular regeneration and degradation ",
        ],
        link_title: "Conways Game O Life",
        gitHub_repo: "https://github.com/Broast42/conways-game-of-life",
        links_style: "conway-link" 

    },
    {
        title: "Celebrity Dead or Alive",
        logo: null,
        logo_alt: null,
        page_link: "https://celeb-dead-or-alive.netlify.app/",
        title_style: "celeb",
        full_descript: "Landing page that links to a React app quiz",
        descript: [
            "• Simple landing page using only HTML, CSS, and JavaScript",
            "• Used JavaScript to create a mini quiz to entice users to continue on to the app.",
            "• Completed in one week remotely within a cross-functional team of six",
        ],
        link_title: "Celeb Dead or Alive",
        gitHub_repo: "https://github.com/Build-Week-PT-Celebrity-Dead-Or-Alive/Marketing-Page",
        links_style: "celeb-link" 

    },
]

export {
    skills,
    longBio,
    projects,
}