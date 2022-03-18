import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CountryDetails({ darkMode, currencyCode, name, capital, currencyName, currencySymbol, flag }) {
    return (
        <div className="country_details">
            <button className={`back ${darkMode ? 'darkMode' : ''}`}>
                <ArrowBackIosIcon />
                Powrót
            </button>
            <div className="country_details_body">
                <div className="img_container">
                    <img src={flag} alt="" />
                </div>
                <div className="info">
                    <h2 className="details_name">{name}</h2>
                    <div className="info_container">
                        <div className="left_info">
                            {/* <p>
                                Name:{name}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    Test
                                </span>
                            </p> */}
                            <p>
                                Currency Name:{''}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {currencyName}
                                </span>
                            </p>
                        </div>
                        <div className="right_info">
                            <p>
                                Capital:{''}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {capital}
                                </span>
                            </p>
                            <p>
                                Currency Symbol:{''}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {currencySymbol}
                                </span>
                            </p>
                            <p>
                                Currency Code:{''}
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {currencyCode}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CountryDetails;