import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Countries = () => {
  const { countryName } = useParams();
  return (
    <>
      <Header
        navigation={{ name: '<', url: '/home', page: 'Country stats' }}
      />
      <main>
        Details about the country:
        {' '}
        {countryName}
      </main>
    </>
  );
};

export default Countries;
