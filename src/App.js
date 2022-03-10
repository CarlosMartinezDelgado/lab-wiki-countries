import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="countries">
        <div>
          <CountriesList />
        </div>
        <div>
          <div id="countryDetails">
            <Routes>
              <Route
                path="/countries/:alpha3Code"
                element={<CountryDetails />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
