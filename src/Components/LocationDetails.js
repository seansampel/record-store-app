import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = (props) => {
  const { name, city, postcode } = props;
  return <h1>{`${name}, ${city}, ${postcode}`}</h1>;
};

LocationDetails.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
  })
};


export default LocationDetails;