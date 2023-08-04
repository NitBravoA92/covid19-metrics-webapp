import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <h2 className="section-title">{ title }</h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
