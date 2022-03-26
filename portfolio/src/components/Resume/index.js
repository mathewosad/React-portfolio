import React from 'react';
import pdf from '../../images/Mathew_Osadolor_Resume.PDF';


function Resume() {
    return (
        <div className="flex-container">
            <div className="flex-row">
                <a href={pdf} target="blank">View my Resume</a>
            </div>
        </div>
    );
}

export default Resume;