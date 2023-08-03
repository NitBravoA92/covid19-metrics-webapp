import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import Header from '../components/Header';
import Headline from '../components/Headline';

const CountryStats = () => {
  const { continentName, countryName } = useParams();

  return (
    <>
      <Header
        navigation={{ name: <BsChevronLeft />, url: `/${continentName}`, page: 'Country stats' }}
      />
      <main>
        <Headline
          srcImg=""
          name={countryName}
          information={[
            { stats: '0', text: 'inhabitants' },
          ]}
        />
      </main>
    </>
  );
};

export default CountryStats;
