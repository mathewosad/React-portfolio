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
                    My name is David Belleza and I am a Multidisciplined Engineer. As a Multidisciplined Engineer,
                    many of my projects have focused on electromechanical and robotic systems. My skills and experience
                    range from mechanical and electronic design to software and embedded system development.
                </p>
                <p>
                    Currently, I am studying Full Stack Web Development to challenge myself and expand my professional toolbelt. Web Development allows me to combine my artistic talent and techical abilities.
                    After receiving my certification, I hope to acquire the skills and knowledge to help me become well-rounded in both Engineering and Web Development. 
                </p>
            </div>
        </div>
    );
}

export default About;