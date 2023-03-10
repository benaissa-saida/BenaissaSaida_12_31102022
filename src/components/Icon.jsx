import PropTypes from "prop-types";

function Icon({ src, alt }) {
  return <img src={src} alt={alt} className="Ss-icon" />;
}

Icon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Icon;
