import React from "react";

function Country({ darkMode, flag, name, showDetails, code }) {
    const showDetailsHandler = () => {
        showDetails(code);
    };

    return (
        <div className={`country ${darkMode ? "darkMode" : ""}`} onClick={showDetailsHandler}>
            <div className='flag_container'>
                <img src={flag} alt='' />
            </div>
            <div className='details'>
                <h3 className='name'>{name}</h3>
            </div>
        </div>
    );
}

export default Country;
