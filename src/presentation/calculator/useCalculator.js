import {useCallback, useState} from "react";
import {evaluateExpression, id, isResetSymbol} from "../../application";

const initialState = {
  result: null,
  expression: null,
  operations: []
};

export const useCalculator = () => {
  const [state, setState] = useState(initialState);

  const calculateFn = useCallback(
    () => {
      let nextState;

      try {
        const result = evaluateExpression(state.expression).toFixed(2);

        nextState = {
          ...state,
          result,
          expression: result,
          operations: [
            ...state.operations,
            {expression: state.expression, result, status: 'OK', id: id()}
          ]
        };

      } catch (e) {
        nextState = {
          ...state,
          result: null,
          operations: [
            ...state.operations,
            {expression: state.expression, result: '-', status: e.message, id: id()}
          ]
        };
      }

      setState(nextState);
    },
    [state, setState],
  );

  const addElementToExpressionFn = useCallback((element) => {
      if (isResetSymbol(element)) {
        setState(initialState);
        return;
      }

      setState(prev => ({...prev, expression: (prev.expression || '') + element}));
    },
    [setState],
  );

  return { state, addElementToExpressionFn, calculateFn };
}