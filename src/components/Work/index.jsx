import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import MK from '../../assets/images/Name.png';
import './index.scss';
import JobCard from './JobCard';
import jobData from '../../data/jobData.json'
import Loader from 'react-loaders';

const Work = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <>
            <div className="container work-page">
                <h1 className="page-title">
                    <AnimatedLetters letterClass={letterClass} strArray={"Work Experience".split("")} idx={15}/>
                </h1>
                <p className="work-description">I'm building my career in software development by contributing to real-world,
                    applications and production systems.
                    Below is a snapshot of the roles where I've applied my technical skills in a professional setting.
                </p>
                {jobData.jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
            <Loader type="pacman"/>
        </>
    )
};

export default Work;