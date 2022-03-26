import React, { useState } from 'react';
import Project from '../Project';

function Work() {

    const [projects] = useState([
        {
            name: 'MarvelousMoviesIndex',
            description: 'HTML, CSS, JavaScript, jQuery, Bootstrap, API, REST',
            link: "https://bdejene19.github.io/MarvelousMoviesIndex/",
            repo: "https://github.com/mathewosad/MarvelousMoviesIndex"
        },
        {
            name: 'Recipe_Blog',
            description: 'HTML, CSS, JavaScript, jQuery, Bootstrap, API, Sequelize, Handlebars',
            link: "https://github.com/mathewosad/UofT-SCS-Coding-Bootcamp-Project-2-Recipe-Blog",
            repo: "https://github.com/sevaggap/UofT-SCS-Coding-Bootcamp-Project-2-Recipe-Blog"
        },
        {
            name: 'Project 3',
            description: 'MERN Stack',
            link: "https://github.com/mathewosad",
            repo: "https://github.com/mathewosad"
        },
    ])

    return (
        <div>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project
                        project={project}
                        i={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default Work;