import Scaler from './Scaler-UG_Logo-Color.png'
import Indian from './Indian_Institute_of_Technology_Bombay_Logo.svg.png'
function Education(){
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
            <h2>Education</h2>
            <div>
                <div className="image1">
                    <img 
                            src={Scaler} 
                            alt="Scaler" 
                            style={{ height: '150px', width: '10rem' }} 
                        />
                </div>
                <i>MS in computer science</i>
                <h3>Januaary 2021 - Present</h3>
                <p>Relevant Coursework</p>
                <ul>
                    <li>Distributed Database Systems</li>
                    <li>Cloud Computing</li>
                    <li>Foundation Of Algorithms</li>
                </ul>
                
            </div>
            <div>
                <div className="image2">
                    <img 
                            src={Indian} 
                            alt="Scaler" 
                            style={{ height: '150px', width: '10rem' }} 
                        />
                </div>
                <i>B.Tech. in Information and Communication Technology</i>
                <h3>July 2014 - May 2018</h3>
                <p>Relevant Coursework</p>
                <ul>
                    <li>Database Management Systems</li>
                    <li>Algorithms & Optimization for Big Data</li>
                    <li>Machine Learning</li>
                </ul>
            </div>
            <div>
                    <h2>Online Certification</h2>
                    <ul>
                        <li>Deep Learning Specialization - Coursera</li>
                        <li>Machine Learning - Coursera</li>
                        <li>TensorFlow in Practice - Coursera</li>
                        <li>Applied Data Science with Python - Coursera</li>
                        <li>Data Science Methodology - Coursera</li>
                    </ul>
                </div>
        </div>
    )
}
export default Education