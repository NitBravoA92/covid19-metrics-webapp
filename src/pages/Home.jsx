import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllContinents, updateSelectedContinent } from '../redux/continents/continentsSlice';
import { getAllCountries } from '../redux/countries/countriesSlice';
import Header from '../components/Header';
import Headline from '../components/Headline';
import CountriesList from '../components/CountriesList';
import continentImages from '../data/continentImages';
import '../assets/css/home.css';

const Home = () => {
  const dispatchActions = useDispatch();
  const { continents, selectedContinent } = useSelector((state) => state.continents);

  useEffect(() => {
    dispatchActions(getAllContinents());
    dispatchActions(getAllCountries());
  }, []);

  const handleContinentsSelection = (e) => {
    const continent = e.target.value;
    dispatchActions(updateSelectedContinent(continent));
  };

  return (
    <>
      <Header navigation={{ name: <span>Covid19</span>, url: '/', page: 'Global disease stats' }} />
      <main>
        <div className="continents-dropdown">
          <select className="continents-options" defaultValue={selectedContinent.name} onChange={handleContinentsSelection}>
            {
              continents.map((continent) => (
                <option key={continent.id} value={continent.name}>{continent.name}</option>
              ))
            }
          </select>
        </div>
        <Headline
          srcImg={continentImages[selectedContinent.name]}
          name={selectedContinent.name}
          totalCases={selectedContinent.cases}
        />
        <CountriesList />
      </main>
    </>
  );
};

export default Home;
