import React from 'react';
import {emptyFn} from "../../application";

/**
 *
 state : {
    result: 0,
    expression: null,
    operations: []
 },
 calculate: fn(),
 addElementToExpression: fn(operator or number)
 * */
export const CalculatorContext = React.createContext({
  result: 0,
  expression: null,
  operations: [],
  calculate: emptyFn,
  addElementToExpression: emptyFn
});