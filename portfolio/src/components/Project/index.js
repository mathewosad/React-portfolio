import React from 'react';


function Project({ project, i }) {
    // this is the project object that is passed in from the parent component


    return (
        <div className="flex-container">
            <div className="flex-row">
                <h3>{project.name}</h3>
            </div>
            <div className="flex-row">
                <p>{project.description}</p>
            </div>
            <div className="flex-row">
                {/* <img src={require(`../../images/p-${i+1}.png`)} alt="Screenshot of application"></img> */}
                
            </div>
            <div className="flex-row">
                <p>Click me:</p>
                <a href={project.link} target="blank">
                    <img src={require(`../../images/${i+1}.png`)} alt="website goto"></img>
                </a>
            </div>
        </div>
    );
}

export default Project;