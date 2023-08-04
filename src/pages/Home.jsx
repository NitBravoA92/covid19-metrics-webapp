import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Headline from '../components/Headline';
import SectionTitle from '../components/SectionTitle';
import ContinentItem from '../components/ContinentItem';
import continentImages from '../data/continentImages';
import Continents from '../assets/images/Continents.png';
import '../assets/css/home.css';

const Home = () => {
  const {
    continents, totalCases, isLoading, error,
  } = useSelector((state) => state.continents);

  let loadMessage = null;

  if (isLoading) {
    loadMessage = 'Loading data...';
  }

  if (error) {
    loadMessage = 'Error loading data';
  }

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
          {
            (isLoading || error)
              ? (<p className="result-message">{loadMessage}</p>)
              : (
                <>
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
                </>
              )
          }
        </section>
      </main>
    </>
  );
};

export default Home;
