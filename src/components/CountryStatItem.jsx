import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const CountryStatItem = ({ title, amount }) => (
  <li className="country-stat-item">
    <div className="stat-show-title">
      <h3 className="title">{ title }</h3>
    </div>
    <div className="stat-show-amount">
      <span className="amount">{ amount }</span>
      <BsArrowRightCircle />
    </div>
  </li>
);

CountryStatItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default CountryStatItem;
