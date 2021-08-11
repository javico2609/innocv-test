import React from 'react';
import PropTypes from 'prop-types';
import styles from './Historical.module.scss';

export const Historical = (props) => {
  const {operations} = props;
  return (
    <div className={styles.container}>
      <h3>Historical report:</h3>
      <div className={styles.historicalMessageContainer}>
        {
          operations.map(operation => {
            return (
              <div key={operation.id}>
                <div className={styles.messageContainer}>
                  <span>{operation.expression}</span>
                  <span>{operation.result}</span>
                </div>
                <span>{operation.status}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

Historical.propTypes = {
  operations: PropTypes.array
}

Historical.defaultProps = {
  operations: []
}

export default Historical;