import github from './github.svg'
import email from './envelope-solid.svg'
import location from './location-dot-solid.svg'
import phone from './phone-volume-solid.svg'
import share from './share-nodes-solid.svg'
import LinkedIn from './linkedin.svg'
import Google from './google.svg'
import './Contact.css'
import { Link } from 'react-router-dom'
function Contact(){
    return(
        <div>
            <div className="Nav-o">
                <ul className="NavList">
                    <h1 className='h1'>Siddharth Baleja</h1>
                    <li className='tree'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Education">Education</Link>
                    </li>
                    <li>
                        <Link to="/Experience">Experience</Link>
                    </li>
                    {/* <li>
                        <Link to="/Projects">Projects</Link>
                    </li> */}
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <h2 id='h22'> Contact-------</h2>
            <div className="Contacts">
                <ul className="Contact1">
                    <div className='locate'>
                        <img src={location} id='location'/>
                        <h3 id='h3'>My Address</h3>
                    </div>
                    <div className='li'>
                        <li>Electronic City-Phase1</li>
                        <li>Karnataka</li> 
                        <li>India</li>
                    </div>
                </ul>
                <ul className="Contact2">
                    <div className='Social'>
                        <img src={share} id='social' />
                        <h3 id='h4'>Social Profiles</h3>
                    </div>
                    <div className='img'>
                        <a href='https://github.com/siddharthbaleja7'>
                            <img src={github} id='git'/>
                        </a>
                        <a href='https://www.linkedin.com/in/siddharth-baleja-197805294/'>
                            <img src={LinkedIn} id='Linked'/>
                        </a>
                        <a href='https://www.google.com'>
                            <img src={Google} id='Google' />
                        </a>
                    </div>
                </ul>
            </div>
            <div className='Contacts1'>
                <div className='Contact3'>
                    <div className='email'>
                        <img src={email} id='email' />
                        <h3 id='h4'>Email</h3>
                    </div>
                    <div className='lii'>
                        <li id='liii'>siddharthbaleja83@gmail.com</li>
                        <li>siddhu@asu.edu</li>
                    </div>
                </div>
                <div className='Contact4'>
                    <div className='contact'>
                        <img src={phone} id='phone' />
                        <h3 id='h4'>Contact</h3>
                    </div>
                    <li id='contact'>+91 9999XXXXXX</li>
                </div>
            </div>
        </div>
    )
}
export default Contact