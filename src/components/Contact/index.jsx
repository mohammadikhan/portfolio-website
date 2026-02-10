import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile, faPhone } from '@fortawesome/free-solid-svg-icons'
import resume from '../../assets/files/resume.pdf'
import phoneNumber from '../../assets/files/phoneNumber.txt'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
        useEffect(() => {
            const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
            }, 3000)
    
            return () => clearTimeout(timer)
        }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            refForm.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                alert('[SUCCESS]: Message successfully sent! Thank you for reaching out! I will get back to you as soon as possible.')
                // window.location.reload(false)
                refForm.current.reset();
            },
            () => {
                alert('[ERROR]: Failed to send the message, please try again.')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                        />
                    </h1> 
                    <p>
                       I am always open to connecting, collaborating and discussing new oppurtunities. I am currently 
                       seeking New Grad/Entry-Levels roles in Software Development, and would love to connect with teams working on impactful projects. 
                    </p>
                    <p>
                        Please feel free to reach out to me if you know of any such oppurtunities or if you just want to talk! I'll do my best to respond ASAP.
                    </p>

                    <div className='social-icons'>
                        <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/mohammad-khan-888a691b8" className="social-link">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a target="blank" rel="noreferrer" href="https://www.github.com/mohammad-khan-888a691b8" className="social-link">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </a>
                        <a target="blank" rel="noreferrer" href={resume} className="social-link">
                            <FontAwesomeIcon icon={faFile} className="icon" />
                        </a>
                        <a target="blank" rel="noreferrer" href="mailto:mohammadikhan821@gmail.com" className="social-link">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </a>
                        <a target="blank" rel="noreferrer" href={phoneNumber} className="social-link">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                        </a>
                        <a target="blank" rel="noreferrer" href="https://www.instagram.com/mohammad_ikhan/" className="social-link">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                    </div>
                   
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                 <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div> 
                    
                     
                </div>    
            </div> 
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;