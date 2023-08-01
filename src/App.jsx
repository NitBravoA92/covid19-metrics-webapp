import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="country/:countryName" element={<Countries />} />
  </Routes>
);

export default App;
