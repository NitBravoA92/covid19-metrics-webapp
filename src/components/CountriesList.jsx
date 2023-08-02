import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import CountryItem from './CountryItem';

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);

  return (
    <section className="countries">
      <SectionTitle title="Stats by countries" />
      <div className="countries-list">
        { countries.map(({
          id, flag, name, cases,
        }) => (
          <CountryItem
            key={id}
            image={flag}
            name={name}
            cases={cases}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesList;
