import { useState, useEffect, useRef } from "react";

import './App.css';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
// import Pagination from './components/Pagination/Pagination';
// import AboutCountry from './components/AboutCountry/AboutCountry';
import ClearIcon from '@mui/icons-material/Clear';
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);
    const countriesInputRef = useRef();
    const alphabetically = useRef();

    const noCountries = countries.status || countries.message;

    const switchMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://restcountries.com/v2/name/united");
        const data = await response.json();

        setCountries(data);
    };

    const searchCountries = () => {
        const searchValue = countriesInputRef.current.value;
        if (searchValue.trim()) {
            const fetchSearch = async () => {
                const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`);
                const data = await response.json();

                setCountries(data);
            };

            try {
                fetchSearch();
            } catch (error) {
                console.log(error);
            }
        } else {
            fetchData();
        }
    };

    return (
        <div className={`app ${darkMode ? 'darkMode' : ''}`}>
            <Header onClick={switchMode} darkMode={darkMode} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-body">
                            <div className="inputs">
                                <div className={`search_input ${darkMode ? 'darkMode' : ''}`}>
                                    <input type="text" placeholder="Szukaj kraju..." ref={countriesInputRef} onChange={searchCountries} />
                                </div>
                                <div className="useful-buttons">
                                    <div className="search-button">
                                        <button className={`search-btn ${darkMode ? 'darkMode' : ''}`}>
                                            Szukaj
                                        </button>
                                    </div>
                                    <div className="reset-button">
                                        <button className={`reset-btn ${darkMode ? 'darkMode' : ''}`}>
                                            <ClearIcon />
                                        </button>
                                    </div >
                                </div>
                                <div className={`filter-alphabetically ${darkMode ? 'darkMode' : ''}`}>
                                    <select ref={alphabetically}>
                                        <option>A - Z</option>
                                        <option>Z - A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="countries">
                                {
                                    !noCountries ? (countries.map((country) => (
                                        <Country
                                            darkMode={darkMode}
                                            name={country.name}
                                            flag={country.flag}
                                        />
                                    ))
                                    ) : (
                                        <p className="monit">Nie znaleziono takiego państwa!</p>
                                    )}
                            </div>
                        </div>
                    }
                />
                <Route path="country-details" element={<CountryDetails darkMode={darkMode} />} />
            </Routes>
        </div>
    );
}

// key={country.alpha3Code}
// currencyCode={country.currencies}
// currencyName={country.currencies}
// capital={country.capital}
// currencySymbol={country.currencies}

export default App;
