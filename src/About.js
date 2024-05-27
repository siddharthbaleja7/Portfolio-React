import Image from './image.jpg'
function About(){
    return(
        <div>
            <nav>
                <h1>Siddharth Baleja</h1>
                <a href="home.html">Home  </a>
                <a href="about.html">About </a>
                <a href="Education.html">Education </a>
                <a href="Experience.html">Experience</a>
                <a href="projects.html">Projects </a>
                <a href="skills.html">Skills </a>
                <a href="Resume.html">Resume </a>
                <a href="Contact.html">Contact </a>
            </nav>
            <div>
                <h2>ABOUT ------------</h2>
            </div>
            <img 
                    src={Image} 
                    alt="Image" 
                    style={{ height: '100px', width: '100px' }} 
                />
            <p>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
            <div>
                <h4> {'>'} Birthday: 1 September 2020</h4>
                <h4> {'>'} City: Porbandar, Gujarat</h4>
                <h4> {'>'} Phone: 9090XXXXXX</h4>
                <h4> {'>'} Email: siddharth@gmail.com</h4>
            </div>
            <div>
                <h2>Interests ----------</h2>
            </div>
            <div>
                <p> * Software Development</p>
                <p> * Machine Learning</p>
                <p> * Computer Vision</p>
                <p> * Natural Learning Processing</p>
                <p> * Software Learning</p>
                <p> * Visualisastion</p>
                <p> * Algorithms</p>
                <p> * Image Processing</p>




            </div>
        </div>
    )
}
export default About