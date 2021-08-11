import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return (
    <input type="text" onChange={() => {}} {...props} />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
}

Input.defaultProps = {}

export default Input;