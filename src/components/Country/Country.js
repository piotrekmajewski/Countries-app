import React from "react";

function Country({ darkMode, flag, name }) {
    return (
        <div className={`country ${darkMode ? 'darkMode' : ''}`}>
            <div className="flag_container">
                <img src={flag} alt="" />
            </div>
            <div className="details">
                <h3 className="name">{name}</h3>
                <div className="button-more">
                    <button className={`read-more ${darkMode ? 'darkMode' : ''}`}>Więcej...</button>
                </div>
            </div>
        </div>
    );
}

export default Country;