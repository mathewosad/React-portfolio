import React from 'react';
import Headshot from '../../images/headshot.JPG';

function About() {
    return (
        <div>
            <div>
                <img className="headshot space-between" src={Headshot} alt="This is me"></img>
            </div>
            <div>
                <h2>
                    About Me
                </h2>
                <p>
                I'm a new graduating full stack developer who knows all there is to know about the stack. I recently finished a Full Stack Web Development Certificate at the University of Toronto in Canada, where I learned HTML, CSS, JAVASCRIPT, SQL Server, NodeJS, and MERN Stack.
                </p>
                <p>
                My strong organisational skills and problem-solving abilities enable me to work well with designers, software engineers, scrum masters, and project managers on cross-functional teams. My excellent education, professional background in technology, ambition for success, and keen attention to detail are all valuable characteristics I possess. 
                </p>
            </div>
        </div>
    );
}

export default About;