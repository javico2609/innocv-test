import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';
import ButtonActions from './ButtonActions';
import {actionsAvailable, emptyFn} from "../../../../application";

describe("Have all actions available", () => {
  test.each(actionsAvailable)("given %p", (action) => {
      const props = {onClickElement: emptyFn, onCalculate: emptyFn};
      const component = render(<ButtonActions {...props}/>);
      expect(component.container).toHaveTextContent(action.name);
    }
  );
});

describe("clicking the button calls onClick event with the element selected", () => {
  test.each(actionsAvailable)("given %p", (action) => {
      const mockFn = jest.fn();

      const props = {
        onClickElement: mockFn,
        onCalculate: mockFn
      };

      const component = render(<ButtonActions {...props}/>);
      const button = component.getByText(action.name);
      fireEvent.click(button);

      expect(mockFn.mock.calls[0][0]).toBe(action.name);
    }
  );
});