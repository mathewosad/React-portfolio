import React from 'react';

function Header(props) {


    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Mathew Osad
                </a>
                {props.children}
            </h2>
        </header>
    );
}

export default Header;