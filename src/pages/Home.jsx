import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Headline from '../components/Headline';
import SectionTitle from '../components/SectionTitle';
import ContinentItem from '../components/ContinentItem';
import continentImages from '../data/continentImages';
import Continents from '../assets/images/Continents.png';
import '../assets/css/home.css';

const Home = () => {
  const { continents, totalCases } = useSelector((state) => state.continents);

  return (
    <>
      <Header navigation={{ name: <span>Covid19</span>, url: '/', page: 'Global cases stats' }} />
      <main>
        <Headline
          srcImg={Continents}
          name="World Statistics"
          information={[{ stats: totalCases, text: 'cases' }]}
        />
        <section className="continents">
          <SectionTitle title="Stats by continents" />
          <div className="continents-list">
            { continents.map((continent) => (
              <ContinentItem
                key={continent.id}
                image={continentImages[continent.name]}
                name={continent.name}
                cases={continent.cases}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
