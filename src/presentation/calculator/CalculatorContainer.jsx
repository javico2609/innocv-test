import React from 'react';
import Calculator from "./Calculator";
import {CalculatorContext} from "./CalculatorContext";
import HistoricalPanel from "./components/historical/Historical";
import {useCalculator} from "./useCalculator";

export const CalculatorContainer = (props) => {

  const {state, calculateFn, addElementToExpressionFn} = useCalculator();

  const initialValue = React.useMemo(
    () => ({
      state,
      calculate: calculateFn,
      addElementToExpression: addElementToExpressionFn
    }),
    [state, calculateFn, addElementToExpressionFn]
  );

  return (
    <CalculatorContext.Provider value={initialValue}>
      <div className="flex py-2">
        <Calculator/>
        {state.operations.length > 0 && <HistoricalPanel operations={state.operations}/>}
      </div>
    </CalculatorContext.Provider>
  );
};

CalculatorContainer.propTypes = {}

CalculatorContainer.defaultProps = {}

export default CalculatorContainer;