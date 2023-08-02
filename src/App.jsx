import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountriesDetails from './pages/CountriesDetails';
import CountryStats from './pages/CountryStats';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":continentName/countries" element={<CountriesDetails />} />
    <Route path=":continentName/:countryName" element={<CountryStats />} />
  </Routes>
);

export default App;
