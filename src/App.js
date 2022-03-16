import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import CountriesList from './components/CountriesList/CountriesList';
import Pagination from './components/Pagination/Pagination';
import AboutCountry from './components/AboutCountry/AboutCountry';

function App() {
    return (
        <div className="App">
            <Header />
            <Filter />
            <CountriesList />
            <Pagination />
            <AboutCountry />
        </div>
    );

}

export default App;
