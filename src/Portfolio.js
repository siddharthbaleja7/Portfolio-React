import Instagram from './instagram.svg';
import Google from './google.svg';
import GitHub from './github.svg';
import Typing from './Typing'; // Import the Typing component
import './Portfolio.css';

function Portfolio() {
    return (
        <div>
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
                        <a href="home.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="Contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="Resume.html">Resume</a>
                    </li>
                </ul>
            </div>
            <div className='Image'>
                <a href="https://www.instagram.com" id='insta'>
                    <img src={Instagram} alt="Instagram" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://www.google.com" id='google'>
                    <img src={Google} alt="Google" style={{ height: '50px', width: '50px' }} />
                </a>
                <a href="https://github.com" id='Github'>
                    <img src={GitHub} alt="GitHub" style={{ height: '50px', width: '50px' }} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
