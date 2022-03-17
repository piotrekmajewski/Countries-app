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
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-body">
                            <div className="inputs">
                                <div className="search_input">
                                    <input type="text" placeholder="Search..." />
                                </div>
                                <div className="useful-buttons">
                                    <div className="search-button">
                                        <button className="search-btn"><SearchIcon /></button>
                                    </div>
                                    <div className="reset-button">
                                        <button className="reset-btn"><ClearIcon /></button>
                                    </div >
                                </div>
                                <div className="filter-alphabetically">
                                    <select>
                                        <option>A - Z</option>
                                        <option>Z - A</option>
                                    </select>
                                </div>
                            </div>
                            <div className="countries">
                                <Country />
                            </div>
                        </div>
                    }
                />
                <Route path="country-details" element={<CountryDetails />} />
            </Routes>
        </div>
    );

}

export default App;
