import Header from '../components/Header';

const Home = () => (
  <>
    <Header navigation={{ name: <span>Covid19</span>, url: '/', page: 'Global disease stats' }} />
    <main>
      List of countries by continents
    </main>
  </>
);

export default Home;
