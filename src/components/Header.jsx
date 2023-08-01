import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HiOutlineCog, HiOutlineMicrophone } from 'react-icons/hi';
import '../assets/css/header.css';

const Header = ({ navigation }) => (
  <header>
    <nav>
      <ul id="menu">
        <li className="pageLink">
          <NavLink to={navigation.url}>{ navigation.name }</NavLink>
        </li>
        <li className="pageName">{ navigation.page }</li>
        <li className="menu-icons">
          <button type="button" aria-label="Microphone"><HiOutlineMicrophone /></button>
          <button type="button" aria-label="Cog"><HiOutlineCog /></button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Header;
