import React, {useContext} from 'react';
import {Box, Input} from "../common/style-guide";
import styles from './Calculator.module.scss';
import ButtonActions from "./components/button-actions/ButtonActions";
import {CalculatorContext} from "./CalculatorContext";

export const Calculator = (props) => {
  const {state: {result, expression}, addElementToExpression, calculate} = useContext(CalculatorContext);

  return (
    <div className="flex flex-center flex-v-center h-full w-full">
      <Box className={styles.calculatorContainer}>
        <Input
          className={styles.input}
          readOnly
          value={expression || result || 0}/>

        <ButtonActions
          onClickElement={addElementToExpression}
          onCalculate={calculate}/>
      </Box>
    </div>
  );
};

Calculator.propTypes = {}

Calculator.defaultProps = {}

export default Calculator;