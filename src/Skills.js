import Python from './python.svg'
import Java from './java.svg'
import Html from './html.svg'
import Css from './css.svg'
import MySql from './mysql.svg'
import PostgreSql from './postgresql.svg'
import django from './django.svg'
import nodejs from './nodejs.svg'
import Flask from './flask.svg'
import git from './git.svg'
import heroku from './heroku.svg'
import AmazonGitServices from './amazon-web-services.svg'
import Jupyter from './jupyter.svg'
function Skills(){
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
            <h4>SKILLS ----------</h4>
            <h2>Languages and Databases</h2>
            <span>
                <img 
                    src={Python} 
                    alt="Python" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={Java} 
                    alt="Java" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={Html} 
                    alt="Html" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={Css} 
                    alt="Css" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={MySql} 
                    alt="MySql" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={PostgreSql} 
                    alt="PostgreSql" 
                    style={{ height: '100px', width: '100px' }} 
                />
            </span>
            <h2>FrameWorks</h2>
            <span>
                <img 
                    src={Flask} 
                    alt="Flask" 
                    style={{ height: '100px', width: '100px' }} 
                />
                <img 
                    src={django} 
                    alt="django" 
                    style={{ height: '140px', width: '120px' }} 
                />
                <img 
                    src={nodejs} 
                    alt="nodejs" 
                    style={{ height: '100px', width: '140px' }} 
                />
            </span>
            <h2>Tools</h2>
            <span>
                <img 
                    src={git} 
                    alt="git" 
                    style={{ height: '100px', width: '140px' }} 
                />
                <img 
                    src={AmazonGitServices} 
                    alt="AmazonGitServices" 
                    style={{ height: '100px', width: '140px' }} 
                />
                <img 
                    src={heroku} 
                    alt="heroku" 
                    style={{ height: '100px', width: '140px' }} 
                />
                <img 
                    src={Jupyter} 
                    alt="Jupyter" 
                    style={{ height: '100px', width: '140px' }} 
                />
            </span>
        </div>
    )
}

export default Skills