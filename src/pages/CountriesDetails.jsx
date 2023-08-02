import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { getAllCountries } from '../redux/countries/countriesSlice';
import { getContinent } from '../redux/continents/continentsSlice';
import continentImages from '../data/continentImages';
import Header from '../components/Header';
import Headline from '../components/Headline';
import CountriesList from '../components/CountriesList';
import '../assets/css/countries.css';

const CountriesDetails = () => {
  const { continentName } = useParams();
  const realContinentName = continentName === 'Australia-Oceania'
    ? continentName
    : continentName.replace(/-/g, ' ');

  const { selectedContinent } = useSelector((state) => state.continents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries(realContinentName));
    dispatch(getContinent(realContinentName));
  }, [dispatch, realContinentName]);

  return (
    <>
      <Header
        navigation={{ name: <BsChevronLeft />, url: '/', page: 'Continent stats' }}
      />
      <main>
        <Headline
          srcImg={continentImages[realContinentName]}
          name={realContinentName}
          information={[
            { stats: selectedContinent?.population, text: 'inhabitants' },
            { stats: selectedContinent?.cases, text: 'total cases' },
            { stats: selectedContinent?.deaths, text: 'deaths' },
            { stats: selectedContinent?.recovered, text: 'recovered' },
            { stats: selectedContinent?.active, text: 'active cases' },
          ]}
        />
        <CountriesList />
      </main>
    </>
  );
};

export default CountriesDetails;
