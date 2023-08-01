import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountriesByContinent } from '../redux/countries/countriesSlice';
import SectionTitle from './SectionTitle';

const CountriesList = () => {
  const dispatch = useDispatch();
  const { selectedContinent } = useSelector((state) => state.continents);
  const { countriesByContinent } = useSelector((state) => state.countries);

  useEffect(() => {
    if(selectedContinent.name) {
      console.log(selectedContinent.name);
      dispatch(getCountriesByContinent(selectedContinent.name));
    }
  }, [selectedContinent]);

  return (
    <section className="countries">
      <SectionTitle title="Stats by countries" />
      <div className="countries-list">
        { JSON.stringify(countriesByContinent) }
      </div>
    </section>
  );
};

export default CountriesList;
