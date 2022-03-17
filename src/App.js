import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import CountriesList from './components/CountriesList/CountriesList';
import Pagination from './components/Pagination/Pagination';
import AboutCountry from './components/AboutCountry/AboutCountry';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
    return (
        <div className="app">
            <Header />
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
            </div>
            <Filter />
            <CountriesList />
            <Pagination />
            <AboutCountry />
        </div>
    );

}

export default App;
