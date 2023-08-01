import PropTypes from 'prop-types';
import continentImages from '../data/continentImages';
import '../assets/css/headline.css';

const Headline = ({ name, totalCases }) => (
  <section className="headline">
    <div className="region image">
      <img src={continentImages[name]} alt={name} />
    </div>
    <div className="region info">
      <h1 className="name">{ name }</h1>
      <p className="stats-counter">
        { totalCases }
        {' '}
        cases
      </p>
    </div>
  </section>
);

Headline.propTypes = {
  name: PropTypes.string.isRequired,
  totalCases: PropTypes.string.isRequired,
};

export default Headline;
