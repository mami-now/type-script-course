/** Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

// my solution
export function basicOp(operation: string, value1: number, value2: number): number {
  return eval(`${value1}${operation}${value2}`);
}


//Best practice :

  /* Good luck!
  export function basicOp(operation: string, value1: number, value2: number): number {
  switch (operation) {
    case '+': 
      return value1+value2
    case '*': 
      return value1*value2
    case '/': 
      return value1/value2
    case '-': 
      return value1-value2
    }
},

2. export function basicOp(operation: string, value1: number, value2: number): number {
    if (operation === '+') return value1 + value2;
    if (operation === '-') return value1 - value2;
    if (operation === '*') return value1 * value2;
    if (operation === '/') return value1 / value2;
    return 0
}
*/
