import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountryItem = ({
  image, name, cases,
}) => {
  const countryName = name.replace(/\s/g, '-');

  return (
    <a href={`${countryName}`} className="country-item child-element">
      <div className="image">
        <img src={image} alt={name} loading="lazy" className="country-flag" />
      </div>
      <div className="country-info">
        <h3 className="name">{name}</h3>
        <p className="cases-stats">
          {cases}
          {' '}
          cases
        </p>
      </div>
      <div className="footer-icon">
        <BsArrowRightCircle />
      </div>
    </a>
  );
};

CountryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
};

export default CountryItem;
