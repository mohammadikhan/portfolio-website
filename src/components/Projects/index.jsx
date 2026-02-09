import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import projectData from '../../data/projectData.json';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, [])
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer);
    
    }, [])

    const renderProjects = (projects) => {

        return (
            <div className="images-container">
                {
                    projects.map((project, idx) => {
                        return (
                            <div className={`image-box ${animate ? 'animate': ''}`} key={idx} style={{animationDelay: `${idx * 1.1}s`}}>
                                <img src={project.cover} className="project-image" alt="project"/>
                                <div className="content">
                                    <p className='title'>{project.title}</p>
                                    <h4 className='stack'>Tech Stack: {project.stack}</h4>
                                    <button className="btn" onClick={() => window.open(project.url)}>View Project</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }

    return (
        <>
         <div className="container projects-page">
            <h1 className='page-title'>
                <AnimatedLetters letterClass={letterClass} strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']} idx={15}/>
            </h1>
            <p className="project-description">I'm always eager to develop new and meaningful applications so that I can expand my skills 
                and contribute to impactful projects. 
            </p>
            <p className="project-description">
                While learning new technologies, I like to apply what I've learned by building projects.
                Check out some of the projects I've worked on!
            </p>
            <div>{renderProjects(projectData.projects)}</div>
        </div>
        <Loader type="pacman"/>
        </>
       
    )
};

export default Projects;