import { useParams } from 'react-router-dom';

const CountryStats = () => {
  const { continentName, countryName } = useParams();
  return (
    <main>
      { continentName }
      {' '}
      { countryName }
    </main>
  );
};

export default CountryStats;
