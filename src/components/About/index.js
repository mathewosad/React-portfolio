import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function About() {
    const [pages] = useState([
        {
            name: "about me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center text-white d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <p className="text-faded mb-5">I'm a new graduating full stack developer who knows all there is to know about the stack. I recently finished a Full Stack Web Development Certificate at the University of Toronto in Canada, where I learned HTML, CSS, JAVASCRIPT, SQL Server, NodeJS, and MERN Stack.</p>
                       
                        <p className="text-faded mb-5">My strong organisational skills and problem-solving abilities enable me to work well with designers, software engineers, scrum masters, and project managers on cross-functional teams. My excellent education, professional background in technology, ambition for success, and keen attention to detail are all valuable characteristics I possess.</p>
                        {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Check Out My Work</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About