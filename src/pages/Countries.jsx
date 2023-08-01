import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { BsChevronLeft } from 'react-icons/bs';

const Countries = () => {
  const { countryName } = useParams();
  return (
    <>
      <Header
        navigation={{ name: <BsChevronLeft />, url: '/home', page: 'Country stats' }}
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
