import { useSelector } from 'react-redux';
import SectionTitle from './SectionTitle';
import ContinentItem from './ContinentItem';
import continentImages from '../data/continentImages';

const ContinentsList = () => {
  const { continents } = useSelector((state) => state.continents);

  return (
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
  );
};

export default ContinentsList;
