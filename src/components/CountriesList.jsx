import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';

const CountriesList = ({ countriesByContinent }) => (
  <section className="countries">
    <SectionTitle title="Stats by countries" />
    <div className="countries-list">
      { countriesByContinent }
    </div>
  </section>
);

CountriesList.defaultProps = {
  countriesByContinent: '',
};

CountriesList.propTypes = {
  countriesByContinent: PropTypes.string,
};

export default CountriesList;
