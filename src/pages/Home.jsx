import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllContinents } from '../redux/continents/continentsSlice';
import Header from '../components/Header';
import Headline from '../components/Headline';
import ContinentsList from '../components/ContinentsList';
import Continents from '../assets/images/Continents.png';
import '../assets/css/home.css';

const Home = () => {
  const { totalCases } = useSelector((state) => state.continents);

  const dispatchActions = useDispatch();

  useEffect(() => {
    dispatchActions(getAllContinents());
  }, [dispatchActions]);

  return (
    <>
      <Header navigation={{ name: <span>Covid19</span>, url: '/', page: 'Global cases stats' }} />
      <main>
        <Headline
          srcImg={Continents}
          name="World Statistics"
          totalCases={totalCases}
        />
        <ContinentsList />
      </main>
    </>
  );
};

export default Home;
