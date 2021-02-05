import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props =>  {
   <h1 className="LocationDetails">{props.name},{props.city},{props.postcode}</h1>
};

LocationDetails.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    postcode: PropTypes.string,
  }).isRequired,
};
// LocationDetails.propTypes = {
//   name: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   postcode: PropTypes.string.isRequired,
// };

export default LocationDetails;