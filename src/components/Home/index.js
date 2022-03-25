import React, { useState } from 'react';
import Project from "../Project";
// Helper function to capitalize first letter of string
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: "portfolio"
        }
    ]);
    // const [currentPage, setCurrentPage] = useState(pages[0]);
    const [currentPage] = useState(pages[0]);
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
    ]);

    return (
        <section className="p-0">
            <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            // <Project key={idx} project={project} />
                            // pass in project name, description, link, repo
                            <Project
                                project={project}
                                // key={idx}
                                key={"project" + idx}
                                // key={project.name}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    );
};

export default Portfolio;