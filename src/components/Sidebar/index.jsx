import { Link, NavLink } from "react-router-dom"
import LogoM from '../../assets/images/MK.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLightbulb, faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./index.scss";

const Sidebar = () => {

    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoM} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                 <NavLink exact="true" activeclassname="active" className="about" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work" to="/work">
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects" to="/projects">
                    <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                </NavLink>
                 <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/mohammad-khan-888a691b8">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="blank" rel="noreferrer" href="https://github.com/mohammadikhan">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="blank" rel="noreferrer" href="https://www.youtube.com/@MohammadKhan-hn7fy">
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="blank" rel="noreferrer" href="https://www.instagram.com/mohammad_ikhan/">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar
