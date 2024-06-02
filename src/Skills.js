import { Link } from 'react-router-dom';
import Python from './python.svg';
import Java from './java.svg';
import Html from './html.svg';
import Css from './css.svg';
import MySql from './mysql.svg';
import PostgreSql from './postgresql.svg';
import django from './django.svg';
import nodejs from './nodejs.svg';
import Flask from './flask.svg';
import git from './git.svg';
import heroku from './heroku.svg';
import AmazonGitServices from './amazon-web-services.svg';
import Jupyter from './jupyter.svg';
import './Skills.css';

function Skills() {
    return (
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
            <h4 id="h22">SKILLS ----------</h4>
            <div className="skills-section1">
                <h2 className="skills-title">Languages and Databases</h2>
                <div className="skills-row1">
                    <img src={Python} alt="Python" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={Java} alt="Java" className="skill-iconj"style={{ height: '100px', width: '120px' }}  />
                    <img src={Html} alt="Html" className="skill-iconh" style={{ height: '100px', width: '110px' }} />
                    <img src={Css} alt="Css" className="skill-iconC" style={{ height: '100px', width: '120px' }} />
                    <img src={MySql} alt="MySql" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={PostgreSql} alt="PostgreSql" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                </div>
            </div>
            <div className='skills-section2'>
                <h2 className="skills-title">Frameworks</h2>
                <div className="skills-row2">
                    <img src={Flask} alt="Flask" className="skill-iconf" style={{ height: '90px', width: '120px' }} />
                    <img src={django} alt="django" className="skill-icond" style={{ height: '100px', width: '140px' }} />
                    <img src={nodejs} alt="nodejs" className="skill-iconn" style={{ height: '90px', width: '140px' }} />
                </div>
            </div>
            <div className='skills-section3'>
                <h2 className="skills-title">Tools</h2>
                <div className="skills-row3">
                    <img src={git} alt="git" className="skill-icon"style={{ height: '100px', width: '140px' }}  />
                    <img src={AmazonGitServices} alt="AmazonGitServices" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={heroku} alt="heroku" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                    <img src={Jupyter} alt="Jupyter" className="skill-icon" style={{ height: '100px', width: '140px' }} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
