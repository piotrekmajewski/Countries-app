import { useState } from "react";

import './App.css';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
// import Pagination from './components/Pagination/Pagination';
// import AboutCountry from './components/AboutCountry/AboutCountry';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const switchMode = () => {
        setDarkMode((prevState) => !prevState);
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
                                    <input type="text" placeholder="Szukaj kraju..." />
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
                                    <select className={`select ${darkMode ? 'darkMode' : ''}`}>
                                        <option>A - Z</option>
                                        <option>Z - A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="countries">
                                <Country darkMode={darkMode} />
                            </div>
                        </div>
                    }
                />
                <Route path="country-details" element={<CountryDetails darkMode={darkMode} />} />
            </Routes>
        </div>
    );

}

export default App;
