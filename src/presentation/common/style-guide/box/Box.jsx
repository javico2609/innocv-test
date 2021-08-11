import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';
import clsx from "clsx";

export const Box = (props) => {
  const {children, className} = props;

  return (
    <div className={clsx(styles.boxContainer, className)}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Box.defaultProps = {
  className: ''
}

export default React.memo(Box);
