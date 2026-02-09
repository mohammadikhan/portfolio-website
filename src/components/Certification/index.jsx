import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import certificationData from '../../data/certData.json'
import Loader from 'react-loaders';

const Certification = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, [])
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const renderCertifications = (certification) => {
        console.log(certification[0].cover);

        return (
            <div className="images-container">
                {
                    certification.map((cert, idx) => {
                        return (
                            <div className={`image-box ${animate ? 'animate' : '' }`} key={idx} style={{animationDelay: `${idx * 1.1}s`}}>
                                <img src={cert.cover} className="certification-image" alt="certification"/>
                                <div className="content">
                                    <p className='title'>{cert.title}</p>
                                    <h4 className='date'>Obtained: {cert.date}</h4>
                                    <p className='issuer'>Issuer: {cert.issuer}</p>
                                    <button className="btn" onClick={() => window.open(cert.credentialUrl)}>View Certification</button>
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
           <div className='container certification-page'>
                <h1 className='page-title'>
                    <AnimatedLetters letterClass={letterClass} strArray={"Certifications".split("")} idx={15}/>
                </h1>
                <p className='cert-description'>I'm always looking to expand my skillset and learn about new technologies. Obtaining certifications has helped me learn more about the tools and technologies that I use.</p>
                <p className='cert-description'>Check out what I'm certified in!</p>
                <div>{renderCertifications(certificationData.certifications)}</div>
            </div>
        <Loader type="pacman"/>
        </>
    )
};

export default Certification;