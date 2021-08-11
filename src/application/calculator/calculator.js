import {all, create} from 'mathjs'
import styles from "../../presentation/calculator/components/button-actions/ButtonActions.module.scss";

const math = create(all, {})
const originalDivide = math.divide;

math.import({
  divide: function (a, b) {
    if (math.isZero(b)) {
      throw new Error('Invalid expression, divide by zero its not allow!');
    }
    return originalDivide(a, b);
  }
}, {override: true});

export const extractAllNumbersFromExpression = (expression) => {
  return expression.match(/[\d]*[.]{0,1}[\d]+/g).map(number => +number);
}

export const extractAllOperatorsFromExpression = (expression) => {
  const exp = /[/*+-]+/g;
  return expression.match(exp);
}

const cleanExpression = (expression) => {
  return expression.replace(/\s/g, '')
}

export const isValidExpression = (expression) => {
  const exp = cleanExpression(expression);

  if (exp.length === 0) return false;

  try {
    math.parse(exp).compile();
    return true;
  } catch (e) {
    return false
  }
}

export const evaluateExpression = (expression) => {
  if (!isValidExpression(expression)) throw Error('Invalid expression, please type a new one!');
  return math.parse(expression).compile().evaluate({});
}

export const actionsAvailable = [
  {name: 'ac', type: styles.reset}, {name:'/', type: styles.operator},
  {name:'7', type: styles.numbers}, {name:'8', type: styles.numbers}, {name:'9', type: styles.numbers}, {name:'*', type: styles.operator},
  {name:'4', type: styles.numbers}, {name:'5', type: styles.numbers}, {name:'6', type: styles.numbers}, {name:'+', type: styles.operator},
  {name:'1', type: styles.numbers}, {name:'2', type: styles.numbers}, {name:'3', type: styles.numbers}, {name:'-', type: styles.operator},
  {name:'0', type: styles.zero}, {name:'.', type: styles.numbers}, {name:'=', type: styles.operator},
];