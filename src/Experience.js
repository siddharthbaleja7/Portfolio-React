function Experience(){
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
            <h2>EXPERIENCE ------------ </h2>
            <div className="sec1">
                <h2>Arizona State University</h2>
                <h3>January 2021 - Present</h3>
                <i>Software Engineer</i>
                <ul>
                    <li>Managed large‑scale deployment of JupyterHub with Nbgrader and webwork software, facilitating approx 5500 students.</li>
                    <li>Configured, troubleshot, and administered server‑side web applications for the statistics department.</li>
                    <li>Handled Linux server administration and Apache configuration; automated tasks like user account creation, managing student database, and system maintenance using Shell and automation scripts, reducing manual work by 200%.</li>
                </ul>
            </div>
            <div className="sec2">
                <h2>Augmenify Infotech Pvt. Ltd.</h2>
                <h3>August 2020 - November 2020</h3>
                <i>Backend Developer</i>
                <ul>
                    <li>Documented and coded server‑less web application for the hotel industry and designed REST API using Flask‑based JWT authentication.</li>
                    <li>Redeveloped an existing system to support customer account management, scheduling, and time tracking; enabled dynamic API calls with the help of Amazon API Gateway, AWS Lambda, and DynamoDB.</li>
                </ul>
            </div>
            <div className="sec3">
                <h2>Epitome Corporation Pvt. Ltd.</h2>
                <h3>July 2019 - Dec 2019</h3>
                <i>Software Developer</i>
                <ul>
                    <li>Tested, designed, and developed backend APIs of WebRTC enabled multi‑party video conferencing web application and delivered the project 15 days ahead of schedule by efficiently designing the flow of the project.</li>
                </ul>
            </div>
            <div className="sec4">
                <h2>Meditab Software Pvt. Ltd.</h2>
                <h3>May 2018 - June 2018</h3>
                <i>Programmer Analyst</i>
                <ul>
                    <li>Optimized image processing algorithm of pill detection by creating customized MASKRCNN algorithm, increasing accuracy by 15%; trained classification algorithm with the help of triplet loss to learn the image embedding of pill, reducing the hassle of collecting data of new pills.</li>
                    <li>Devised a pipeline of the project to incorporate it into the product of the company. Implemented Restful APIs in Django that enabled our quality Analyst team to increase reporting speed by 46%.</li>
                    <li>Built a web app to onboard data from the company’s product using Flask, Postgres, and AWS S3, enabling interactive charts in real-time.</li>
                    <li>Mentored 2 interns to optimize the pill detection algorithm and to include the multiprocessing pipeline, increasing overall speed by 75%.</li>
                </ul>
            </div>
            <div className="sec5">
                <h2>Space Application Centre, ISRO</h2>
                <h3>Jan 2018 - May 2018</h3>
                <i>Research Intern</i>
                <ul>
                    <li>Implemented noise reduction algorithm on the satellite image and prepared architecture for detecting objects in high‑resolution satellite images, achieving 80% accuracy.</li>
                    <li>Increased accessibility of satellite image data by redesigning database and application for showcasing graphical data.</li>
                </ul>
            </div>
        </div>
    )
}
export default Experience