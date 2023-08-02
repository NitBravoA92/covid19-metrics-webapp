import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const ContinentItem = ({
  image, name, cases,
}) => {
  const continentName = name.replace(/\s/g, '-');

  return (
    <a href={`${continentName}/countries`} className="continent-item">
      <div className="icon-show-details">
        <BsArrowRightCircle />
      </div>
      <div className="image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="details">
        <h3 className="title">{ name }</h3>
        <p className="stats">
          { cases }
          {' '}
          cases
        </p>
      </div>
    </a>
  );
};

ContinentItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default ContinentItem;
