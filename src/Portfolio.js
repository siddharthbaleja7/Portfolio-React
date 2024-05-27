import Instagram from './instagram.svg';
import Google from './google.svg'
import GitHub from './github.svg'

function Portfolio(){
    return(
        <div>
            <h1>Siddharth Baleja</h1>
            <h2>I'm a Developer</h2>
            <nav>
                <a href="home.html">Home  </a>
                <a href="about.html">About </a>
                <a href="Education.html">Education </a>
                <a href="Experience.html">Experience</a>
                <a href="projects.html">Projects </a>
                <a href="skills.html">Skills </a>
                <a href="Resume.html">Resume </a>
                <a href="Contact.html">Contact </a>
            </nav>
                <a href="https://www.instagram.com">
                    <img 
                        src={Instagram} 
                        alt="Instagram" 
                        style={{ height: '100px', width: '100px' }} 
                    />
                </a>
                <a href="https://www.google.com">
                    <img
                    src={Google}
                    alt="Google"
                    style={{ height: '100px', width: '100px' }}
                    />
                </a>
                < a href="https://github.com">
                    <img 
                        src={GitHub} 
                        alt="GitHub" 
                        style={{ height: '100px', width: '100px' }} 
                    />
                </a>
                
        </div>
    );
}

export default Portfolio;