import React from "react";

function Country({ darkMode }) {
    return (
        <div className={`country ${darkMode ? 'darkMode' : ''}`}>
            <div className="flag_container">
                <img src="" alt="" />
            </div>
            <div className="details">
                <h3 className="name">Name</h3>
                <div className="button-more">
                    <button className={`read-more ${darkMode ? 'darkMode' : ''}`}>Więcej...</button>
                </div>
            </div>
        </div>
    );
}

export default Country;