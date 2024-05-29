import instagram from './instagram.svg'
import google from './google.svg'
import github from './github.svg'
function Contact(){
    return(
        <div>
            <nav>
                <h1>Siddharth Baleja</h1>
                <span>
                    <a href="home.html">Home  </a>
                    <a href="about.html">About </a>
                    <a href="Education.html">Education </a>
                    <a href="Experience.html">Experience</a>
                    <a href="projects.html">Projects </a>
                    <a href="skills.html">Skills </a>
                    <a href="Resume.html">Resume </a>
                    <a href="Contact.html">Contact </a>
                </span>
            </nav>
            <h2> Contact</h2>
            <div className="COntacts">
                <ul className="Contact1">
                    <h3>My Address</h3>
                    <li>1275 E University Dr</li>
                    <li>Unit 212</li>
                    <li>Tempe, AZ 85281</li>
                </ul>
                <ul className="Contact2">
                    <h3>Social Profiles</h3>
                    <img src={instagram} />
                    <img src ={google} />
                    <img src={github} />
                </ul>
            </div>
            <div className='Contact3'>
                <h3>Email</h3>
                <li>siddharthbaleja83@gmail.com</li>
                <li>pkraja@asu.edu</li>
            </div>
            <div className='Contact4'>
                <h3>Contact</h3>
                <li>+91 9999XXXXXX</li>
            </div>
        </div>
    )
}
export default Contact