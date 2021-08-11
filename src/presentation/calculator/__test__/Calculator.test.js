import {render} from "@testing-library/react";
import React from "react";
import Calculator from "../Calculator";
import {CalculatorContext} from '../CalculatorContext';

test('render', () => {
  const mockFn = jest.fn();

  const props = {
    state: {
      result: null,
      expression: null,
      operations: []
    },
    addElementToExpression: mockFn,
    calculate: mockFn
  };

  const component = render(
    <CalculatorContext.Provider value={props}>
      <Calculator/>
    </CalculatorContext.Provider>
  );

  const input = component.container.querySelector('input');

  expect(+input.value).toBe(0);
});