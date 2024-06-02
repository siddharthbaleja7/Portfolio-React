import Google from './google copy.svg';
import GitHub from './github.svg';
import Linked from './linkedin-icon.png'
import Typing from './Typing';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className='div'>
            
            <h1 className='h1' id='h1'>Siddharth Baleja</h1>
            <div className='header'>
                <Typing 
                    text={[
                        
                        "I'm a Developer",
                        "Software Developer",
                    ]}
                    typingspeed={100}
                    deletingspeed={50}
                    duration={1000}
                />
            </div>
            <div className="Nav">
                <ul className="NavList">
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
            <div className='Image'>
                <a href="https://www.linkedin.com/in/siddharth-baleja-197805294/" id='insta'>
                    <img src={Linked} alt="Instagram" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://www.google.com" id='google'>
                    <img src={Google} alt="Google" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://github.com/siddharthbaleja7" id='Github'>
                    <img src={GitHub} alt="GitHub" style={{ height: '50px', width: '50px' }} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
