import Scaler from './Scaler-UG_Logo-Color.png'
import Indian from './Indian_Institute_of_Technology_Bombay_Logo.svg.png'
import './Education.css'
import { Link } from 'react-router-dom'
function Education(){
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

    <h2 id='h22'>Education</h2>
    <div class="education-container">
        <div class="Section">
            <div class="image-container">
                <img src={Scaler} ></img>
            </div>
            <div class="details">
                <i>MS in Computer Science</i>
                <h3>January 2021 - Present</h3>
                <p>Relevant Coursework</p>
                <ul>
                    <li>Distributed Database Systems</li>
                    <li>Cloud Computing</li>
                    <li>Foundation Of Algorithms</li>
                </ul>
            </div>
        </div>
        
                <div class="Section">
                    <div class="image-container">
                        <img src={Indian} alt="Ahmedabad University Logo" />
                    </div>
                    <div class="details">
                        <i>B.Tech. in Information and Communication Technology</i>
                        <h3>July 2014 - May 2018</h3>
                        <p>Relevant Coursework</p>
                        <ul>
                            <li>Database Management Systems</li>
                            <li>Algorithms & Optimization for Big Data</li>
                            <li>Machine Learning</li>
                        </ul>
                    </div>
                </div>
         </div>

        {/* <div class="certifications">
            <h2>Online Certification</h2>
            <ul>
                <li>Deep Learning Specialization - Coursera</li>
                <li>Machine Learning - Coursera</li>
                <li>TensorFlow in Practice - Coursera</li>
                <li>Applied Data Science with Python - Coursera</li>
                <li>Data Science Methodology - Coursera</li>
            </ul>
        </div> */}
        </div>
    )
}
export default Education