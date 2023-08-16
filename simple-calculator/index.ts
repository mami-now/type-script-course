// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

/*const button = document.querySelector('.button') as HTMLElement
const firstInput = document.querySelector('#first-input') as HTMLInputElement
const secondInput = document.querySelector('#second-input') as HTMLInputElement
export const screen = document.querySelector('.screen') 
 
 
function addNumbers(a: number,b: number) {
  screen.innerHTML = (a + b).toString()
}
 
button.addEventListener('click', () => addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))
*/
// const button = document.querySelector('.button') as Element
// const firstInput = document.querySelector('#first-input') as HTMLInputElement
// const secondInput = document.querySelector('#second-input') as HTMLInputElement
// export const screen = document.querySelector('.screen') as Element
 
// function addNumbers(a: number,b: number) {
//      screen.innerHTML = (a + b).toString() 
// }
 
// button.addEventListener('click', () => 
//     addNumbers(parseInt(firstInput.value), parseInt(secondInput.value)))
const names:  string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
