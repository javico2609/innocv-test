import React from 'react';
import styles from "./ButtonActions.module.scss";
import {Button} from "../../../common/style-guide";
import clsx from "clsx";
import PropTypes from 'prop-types';
import {actionsAvailable, emptyFn, isEqualsSymbol} from "../../../../application";

export const ButtonActions = (props) => {
  const {onClickElement, onCalculate} = props;

  return (
    <div className={styles.actions}>
      {
        actionsAvailable.map( action => {
          return <Button
            className={clsx(styles.button, action.type)}
            key={action.name}
            onClick={() => isEqualsSymbol(action.name) ? onCalculate(action.name) : onClickElement(action.name)}>
            {action.name}
          </Button>
        })
      }
    </div>
  );
};

ButtonActions.propTypes = {
  onClickElement: PropTypes.func,
  onCalculate: PropTypes.func
}

ButtonActions.defaultProps = {
  onClickElement: emptyFn,
  onCalculate: emptyFn
}

export default ButtonActions;