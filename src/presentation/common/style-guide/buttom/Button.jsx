import React from 'react';
import clsx from "clsx";
import styles from './Button.module.scss';

export const Button = (props) => {
  const {className, children, ...others} = props;

  return (
    <button className={clsx(styles.container, "py-2 px-2", className)} {...others}>
      {children}
    </button>
  );
};

Button.propTypes = {}

Button.defaultProps = {}

export default Button;