import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import Header from "./Header";
import Country from "./Country";
import CountryDetails from "./CountryDetails";

const sortStates = {
    ascending: "ascending",
    descending: "descending"
};

function HomePage() {
    const [darkMode, setDarkMode] = useState(false);
    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortState, setSortState] = useState(sortStates.ascending);
    const navigate = useNavigate();

    const noCountries = countries.status || countries.message;

    const switchMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    const fetchUnitedCountriesData = async () => {
        const response = await fetch("https://restcountries.com/v2/name/united");
        const data = await response.json();

        setCountries(data);
    };

    const handleOnChange = (e) => {
        setSearchValue(e.target.value.toUpperCase());
    };

    const shouldFetchCountries = searchValue.trim().length > 2;

    const searchCountries = () => {
        if (shouldFetchCountries) {
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
            fetchUnitedCountriesData();
        }
    };

    const showDetails = (code) => {
        navigate(`/${code}`);
    };

    useEffect(() => {
        try {
            fetchUnitedCountriesData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={`app ${darkMode ? "darkMode" : ""}`}>
            <Header onClick={switchMode} darkMode={darkMode} />
            <Routes>
                <Route
                    path='/'
                    element={
                        <div className='app-body'>
                            <div className='inputs'>
                                <div className={`search_input ${darkMode ? "darkMode" : ""}`}>
                                    <input type='text' placeholder='Szukaj kraju...' onChange={handleOnChange} value={searchValue} />
                                    <div className='reset-button'>
                                        <button className={`reset-btn ${darkMode ? "darkMode" : ""}`} onClick={() => setSearchValue("")}>
                                            <ClearIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className='useful-buttons'>
                                        <button 
                                            className={`search-btn ${darkMode ? "darkMode" : ""}`}
                                            onClick={searchCountries}
                                            disabled={!shouldFetchCountries}
                                        >
                                            Szukaj
                                        </button>
                                        <button
                                    className={`alphabetically-button ${darkMode ? "darkMode" : ""}`}
                                    onClick={() =>
                                        setSortState(sortState === sortStates.ascending ? sortStates.descending : sortStates.ascending)}
                                >
                                    {sortState === sortStates.ascending ? "A - Z" : "Z - A"}
                                </button>
                                </div>         
                            </div>
                            <div className='countries'>
                                {!noCountries ? (
                                    countries.map((country) => (
                                        <Country
                                            darkMode={darkMode}
                                            key={country.alpha3Code}
                                            code={country.alpha3Code}
                                            capital={country.capital}
                                            name={country.name}
                                            flag={country.flag}
                                            showDetails={showDetails}
                                        />
                                    ))
                                ) : (
                                    <p className='monit'>Nie znaleziono takiego państwa!</p>
                                )}
                            </div>
                            {/* <Pagination /> */}
                        </div>
                    }
                />
                <Route path='/:countryCode' element={<CountryDetails darkMode={darkMode} countries={countries} />} />
            </Routes>
        </div>
    );
}

export default HomePage;
