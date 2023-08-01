import PropTypes from 'prop-types';
import '../assets/css/headline.css';

const Headline = ({ srcImg, name, totalCases }) => (
  <section className="headline">
    <div className="region image">
      <img src={srcImg} alt={name} />
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

Headline.defaultProps = {
  srcImg: '',
  name: '',
  totalCases: 0,
};

Headline.propTypes = {
  srcImg: PropTypes.string,
  name: PropTypes.string,
  totalCases: PropTypes.number,
};

export default Headline;
