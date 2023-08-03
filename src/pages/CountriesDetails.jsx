import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import continentImages from '../data/continentImages';
import Header from '../components/Header';
import Headline from '../components/Headline';
import SectionTitle from '../components/SectionTitle';
import CountryItem from '../components/CountryItem';
import '../assets/css/countries.css';

const CountriesDetails = () => {
  const { continentName } = useParams();

  const realContinentName = continentName === 'Australia-Oceania'
    ? continentName
    : continentName.replace(/-/g, ' ');

  const { continents } = useSelector((state) => state.continents);
  const { countries } = useSelector((state) => state.countries);

  const selectedContinent = continents.find((continent) => continent.name === realContinentName);

  const filteredCountries = countries.filter((country) => country.continent === realContinentName);

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

        <section className="countries">
          <SectionTitle title="Stats by countries" />
          <div className="countries-list">
            {filteredCountries.map(({
              id, flag, name, cases,
            }) => (
              <CountryItem key={id} image={flag} name={name} cases={cases} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default CountriesDetails;
