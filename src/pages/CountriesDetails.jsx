import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { getAllCountries } from '../redux/countries/countriesSlice';
import Header from '../components/Header';

const CountriesDetails = () => {
  const { continentName } = useParams();
  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllCountries(continentName));
  }, [dispatch]);

  return (
    <>
      <Header
        navigation={{ name: <BsChevronLeft />, url: '/', page: 'Countries stats' }}
      />
      <main>
        { JSON.stringify(countries) }
      </main>
    </>
  );
};

export default CountriesDetails;
