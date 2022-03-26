import React from 'react';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';

function Footer() {


    return (
        <footer className="container">
            <div>
                <h3>Let's Link</h3>
                <a href="https://github.com/mathewosad" target="blank"><img alt="github icon" src={Github}></img></a>
                <a href="https://www.linkedin.com/in/mathew-osadolor-848b33177/" target="blank"><img alt="linkedin icon" src={LinkedIn}></img></a>
            </div>
        </footer>
    );
}

export default Footer;