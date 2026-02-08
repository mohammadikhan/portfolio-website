import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
    faAws,
    faCss,
    faDocker,
    faGitAlt,
    faGithub,
    faHtml5,
    faJava,
    faJsSquare,
    faNode,
    faPython,
    faReact,
    faUbuntu
} from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm Mohammad Ibrahim Khan and I am a passionate software engineer with a strong foundation in both backend and frontend development. I graduated from Carleton University with a Bachelors in Computer Science and am driven by builing scalable, user-focused, and impactful software solutions.</p>
                <p>I'm currently looking for New Grad/Entry level roles in Software Development, AI Engineering, DevOps, and Networking. I really enjoy taking ideas and transforming those ideas into reality through projects that blend AI, Full-Stack Engineering and clean architecture to create solutions for existing problems.</p>
                <p>I've worked with Python, Java, C/C++, and JavaScript, building applications using React, Node.js, Express and Spring Boot. I've made use of HTML/CSS and Tailwind for styling, familiar with AWS and Kubernetes and being able to integrate REST APIs with databases like PostgreSQL and MongoDB.</p>
                <p>When I’m not coding, you’ll probably find me playing basketball, biking around the city, or exploring new AI tools and cloud technologies.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faPython} color="#cccf24"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faJava} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faAws} color="#bb7308"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faGitAlt} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faReact} color="#138fe2"/>
                    </div>
                </div>
            </div>
             <div className='stage-cube-cont2'>
               <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faHtml5} color="#cccf24"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faCss} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faGithub} color="#0a0902"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faDocker} color="#188abe"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faUbuntu} color="#EC4D28"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faNode} color="#138fe2"/>
                    </div>
                </div>
            </div>
             <div className='stage-cube-cont3'>
                
            </div>
        </div>
        <Loader type="pacman"/>
        </>
        
    )
}

export default About;