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
        descript: 'Skilled with SQL and Relational Databases including PostgreSQL using Knex.js',
    },
    {
        icon: faNpm,
        name: "NPM",
        color: 'npm',
        descript: 'Regularly make use of node pagage manager and CLI',
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

export {
    skills,
    longBio,
}