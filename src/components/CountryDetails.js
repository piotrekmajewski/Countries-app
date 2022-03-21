import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useParams, useNavigate } from "react-router";

function CountryDetails({ darkMode, countries }) {
    const params = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    };

    let name;
    let symbol;
    let code;
    let flagImg;
    let capital;
    const currenciesName = [name];
    const currenciesCode = [code];
    const currenciesSymbol = [symbol];

    countries.forEach((country) => {
        if (country.alpha3Code === params.countryCode) {
            name = country.name;
            flagImg = country.flag;
            capital = country.capital;

            country.currencies.forEach((currency) => {
                currenciesName.push(currency.name);
            });

            country.currencies.forEach((currency) => {
                currenciesCode.push(currency.code);
            });

            country.currencies.forEach((currency) => {
                currenciesSymbol.push(currency.symbol);
            });
        }
    });

    return (
        <div className="country_details">
            <button className={`back ${darkMode ? 'darkMode' : ''}`} onClick={goBack}>
                <ArrowBackIosIcon />
                Powrót
            </button>
            <div className="country_details_body">
                <div className="img_container">
                    <img src={flagImg} alt="" />
                </div>
                <div className="info">
                    <h2 className="details_name">{name}</h2>
                    <div className="info_container">
                        <div className="left_info">
                            <p>
                                Name:
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {name}
                                </span>
                            </p>
                            <p>
                                Capital:
                                <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                    {capital}
                                </span>
                            </p>
                        </div>
                        <div className="right_info">
                            <p>
                                Currency name:
                                {currenciesName.map((currency) => {
                                    if (
                                        currenciesName.indexOf(currency) !==
                                        currenciesName.length - 1
                                    ) {
                                        return (
                                            <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                                {currency}
                                            </span>
                                        );
                                    }
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                            {currency}
                                        </span>
                                    );
                                })}
                            </p>
                            <p>
                                Currency Symbol:
                                {currenciesSymbol.map((currency) => {
                                    if (
                                        currenciesSymbol.indexOf(currency) !==
                                        currenciesSymbol.length - 1
                                    ) {
                                        return (
                                            <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                                {currency}
                                            </span>
                                        );
                                    }
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                            {currency}
                                        </span>
                                    );
                                })}
                            </p>
                            <p>
                                Currency Code:
                                {currenciesCode.map((currency) => {
                                    if (
                                        currenciesSymbol.indexOf(currency) !==
                                        currenciesCode.length - 1
                                    ) {
                                        return (
                                            <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                                {currency}
                                            </span>
                                        );
                                    }
                                    return (
                                        <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                                            {currency},
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
