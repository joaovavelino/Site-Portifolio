import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Photo from '../../assets/images/My-Photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faVcard, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
 <div className='nav-bar'> 
    <Link className='logo' to='/'>
        <img src={Photo} alt='logo' />
        {/* <img className='sub-logo' src={'morte'} alt='joey' /> */}
    </Link>
    <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-avelino-magalh%C3%A3es-514742219/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="$4d4d4e" />
            </a>
        </li>
        <li>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://github.com/joaovavelino?tab=overview&from=2023-08-01&to=2023-08-21"
            >
                <FontAwesomeIcon icon={faGithub} color="$4d4d4e" />
            </a>
        </li>
        <li>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:f5f4efef-838a-41a7-8ebc-3c62f1302692"
            >
                <FontAwesomeIcon icon={faVcard} color="$4d4d4e" />
            </a>
        </li>
    </ul>
 </div>)

export default Sidebar