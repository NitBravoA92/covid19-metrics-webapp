import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../components/Header';
import Headline from '../components/Headline';
import SectionTitle from '../components/SectionTitle';
import CountryStatItem from '../components/CountryStatItem';
import '../assets/css/countryStats.css';

const CountryStats = () => {
  const { continentName, countryName } = useParams();

  const realCountryName = countryName.replace(/-/g, ' ');

  const { countries } = useSelector((state) => state.countries);

  const selectedCountry = countries.find((country) => country.name === realCountryName);

  const filteredStats = Object.keys(selectedCountry)
    .filter((item) => (
      item !== 'id'
      && item !== 'name'
      && item !== 'continent'
      && item !== 'population'
      && item !== 'flag'));

  return (
    <>
      <Header
        navigation={{ name: <BsChevronLeft />, url: `/${continentName}`, page: 'Country stats' }}
      />
      <main>
        <Headline
          srcImg={selectedCountry?.flag}
          name={realCountryName}
          information={[
            { stats: selectedCountry?.population, text: 'inhabitants' },
          ]}
        />
        <section className="country-stats">
          <SectionTitle title="Country General Stats" />
          <ul className="country-details">
            {
            filteredStats
              .map((title) => (
                <CountryStatItem key={title} title={title} amount={selectedCountry[title]} />
              ))
        }
          </ul>
        </section>
      </main>
    </>
  );
};

export default CountryStats;
