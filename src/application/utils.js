export const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
}

export const callFns = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};

export const emptyFn = () => {};

export const isEqualsSymbol = (element = '') => element === '=';
export const isResetSymbol = (element = '') => element === 'ac';

export const id = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}