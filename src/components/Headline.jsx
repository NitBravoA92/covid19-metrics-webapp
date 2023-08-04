import PropTypes from 'prop-types';
import '../assets/css/headline.css';

const Headline = ({ srcImg, name, information }) => (
  <section className="headline">
    <div className="region image">
      <img src={srcImg} alt={name} className="opacity-5" />
    </div>
    <div className="region info">
      <h1 className="name">{ name }</h1>
      {
        information.map(
          ({ stats, text }) => (
            <p className="stats-counter" key={text}>
              { stats }
              {' '}
              { text }
            </p>
          ),
        )
      }
    </div>
  </section>
);

Headline.defaultProps = {
  srcImg: '',
  name: '',
  information: [],
};

Headline.propTypes = {
  srcImg: PropTypes.string,
  name: PropTypes.string,
  information: PropTypes.arrayOf(PropTypes.shape({
    stats: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default Headline;
