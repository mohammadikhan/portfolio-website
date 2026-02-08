import M from "../../assets/images/Name.png"
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Loader from "react-loaders";


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'h', 'a', 'm', 'm', 'a', 'd']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ' ']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={`${letterClass} _8`}>H</span>
                    <span className={`${letterClass} _9`}>i,</span>    
                    <br/>
                    <span className={`${letterClass} _10`}>I</span>    
                    <span className={`${letterClass} _11`}>'m,</span>    
                    <img src={M} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={12}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={15}
                    />
                    </h1>
                    <h2>Full-Stack Developer / AI Developer / Dev-Ops</h2>
                    <h2>Carleton University Honours Bachelor of Computer Science (2019-2024)</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type="pacman"/>
        </>
        
    )
}
export default Home;
