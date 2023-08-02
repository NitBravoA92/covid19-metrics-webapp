import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountriesDetails from './pages/CountriesDetails';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":continentName/countries" element={<CountriesDetails />} />
  </Routes>
);

export default App;
