import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllContinents } from './redux/continents/continentsSlice';
import { getAllCountries } from './redux/countries/countriesSlice';
import Home from './pages/Home';
import CountriesDetails from './pages/CountriesDetails';
import CountryStats from './pages/CountryStats';

const App = () => {
  const dispatchActions = useDispatch();

  useEffect(() => {
    dispatchActions(getAllContinents());
    dispatchActions(getAllCountries());
  }, [dispatchActions]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":continentName" element={<CountriesDetails />} />
      <Route path=":continentName/:countryName" element={<CountryStats />} />
    </Routes>
  );
}

export default App;
