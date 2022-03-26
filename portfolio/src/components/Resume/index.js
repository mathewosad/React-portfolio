import React from 'react';
import pdf from '../../images/D_Belleza_Resume.pdf';

function Resume() {
    return (
        <div className="flex-container">
            <div className="flex-row">
                <a href={pdf} target="blank">Click to view my Resume</a>
            </div>
        </div>
    );
}

export default Resume;