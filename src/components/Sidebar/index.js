import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
 <div className='nav-bar'> 
    <Link className='logo' to='/'>
        <img src={'nada'} alt='logo' />
        <img clasname='sub-logo' src={'morte'} alt='joey' />
    </Link>
    <nav>
        <NavLink exact='true' activeClassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeClassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeClassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
 </div>)

export default Sidebar