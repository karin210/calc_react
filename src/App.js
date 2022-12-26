import './App.css';
import Key from './components/Key';
import Screen from './components/Screen';
import { useState } from 'react';
function App() {
const [input, setInput] = useState('');

function handleClick(e) {
  //Clear button.
  if(e.target.innerText === 'Clear') {
    setInput('');
  //Update the input state's propety adding the text of the key clicked.
  } else {
    setInput(input + e.target.innerText);
  }
}
//Create an array of the input
let inputArray = input.split('');

//Search a division
function division() {
const divisionIndex = inputArray.indexOf('/');
//Get the right side of the operation
if(divisionIndex != -1) {
  const signsToRight = inputArray.findIndex((n, index) => (n === 'x' || n === '+' || n === '-' || n === '/') && index > divisionIndex);
  let right;
  if(signsToRight != -1) {
  const rightSide = inputArray.slice(divisionIndex + 1, signsToRight);
  right = rightSide;

  } else {
    const rightSide = inputArray.slice(divisionIndex + 1);
    right = rightSide;
  }
  //Get the left side of the operation
  //Find an operator on the left
  let left;
  let startFragmentIndex;
  for(let i = divisionIndex; i >= 0 ; i--) {
    const element = inputArray[i];
    if(element === 'x' || element === '+' || element === '-') {
      const leftSide = inputArray.slice(i + 1, divisionIndex);
      left = leftSide;
      startFragmentIndex = i + 1;
      break;
    } else {
      const leftSide = inputArray.slice(0, divisionIndex);
      left = leftSide;
      startFragmentIndex = 0;
    }
  }
  //Excecute left and right and embeed the result
  let leftNumber = Number(left.join(''));
  let rightNumber = Number(right.join(''));
  let result = leftNumber / rightNumber;
  inputArray.splice(startFragmentIndex, right.length + left.length + 1, result);
  return inputArray;
  }
  
}
while(inputArray.indexOf('/') != -1) {
division();
}

function multiplication() {
//Search a multiplication
const multIndex = inputArray.indexOf('x');
//Get the right side of the operation
if(multIndex != -1) {
  const signsToRight = inputArray.findIndex((n, index) => (n === 'x' || n === '+' || n === '-' || n === '/') && index > multIndex);
  let right;
  if(signsToRight != -1) {
  const rightSide = inputArray.slice(multIndex + 1, signsToRight);
  right = rightSide;

  } else {
    const rightSide = inputArray.slice(multIndex + 1);
    right = rightSide;
    
  }
   //Get the left side of the operation
  //Find an operator on the left
  let left;
  let startFragmentIndex;
  for(let i = multIndex; i >= 0 ; i--) {
    const element = inputArray[i];
    if(element === '/' || element === '+' || element === '-') {
      const leftSide = inputArray.slice(i + 1, multIndex);
      left = leftSide;
      startFragmentIndex = i + 1;
      break;
    } else {
      const leftSide = inputArray.slice(0, multIndex);
      left = leftSide;
      startFragmentIndex = 0;
    }
  }
  //Excecute left and right and embeed the result
  let leftNumber = Number(left.join(''));
  let rightNumber = Number(right.join(''));
  let result = leftNumber * rightNumber;
  inputArray.splice(startFragmentIndex, right.length + left.length + 1, result);
  return inputArray;
  }

  
}
while(inputArray.indexOf('x') != -1) {
multiplication();
}



{/*
  -There is a division sign?
    Yes:
      -There is an operator on the right?
        Yes:
          -Slice from the division operator + 1 to the next operator
        No: 
          -Slice from the division operator + 1 omitting the end.
      -There is an operator on the left?
        Yes:
         -Slice from the left operator + 1 to the division operator
        No:
         -Slice from start until the division operator.
      -Become left and right to type number and asign a variable to store left / right.
      -Replace the fragment of the operation with the result of left / right.
  -Repeat There is a division sign?
    Yes: 
      Repeat the previous steps.
    No: 

  -There is a multiplication sign?
    Yes:
      -There is an operator on the right?
        Yes:
          -Slice from the multiplication operator + 1 to the next operator
        No: 
          -Slice from the multiplication operator + 1 omitting the end.
      -There is an operator on the left?
        Yes:
         -Slice from the left operator + 1 to the multiplication operator.
        No:
         -Slice from start until the multiplication operator.
      -Become left and right to type number and asign a variable to store left / right.
      -Replace the fragment of the operation with the result of left * right.
  -Repeat There is a multiplication sign?
    Yes: 
      Repeat the previous steps.
    No: 

  
*/}

  return (
    <div className="App">
    <Screen
    screenText = {input}
    />
    <div>
      <Key
      keySign = '1' 
      handleClick = {handleClick} 
      class = 'number'
      />
      <Key
      keySign = '2'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = '3'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = 'x'
      handleClick = {handleClick}
       />
      <Key
      keySign = '4'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = '5'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = '6'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = 	'/'
      handleClick = {handleClick}
       />
      <Key
      keySign = '7'
      handleClick = {handleClick}
      class ='number'
       />
      <Key
      keySign = '8'
      handleClick = {handleClick}
      class ='number'
       />
      <Key
      keySign = '9'
      handleClick = {handleClick}
      class ='number'
       />
      <Key
      keySign = '+' 
        handleClick = {handleClick}
      />
      <Key
      keySign = '-' 
        handleClick = {handleClick}
      />
      <Key
      keySign = '0'
      handleClick = {handleClick}
      class = 'number'
       />
      <Key
      keySign = '.' 
        handleClick = {handleClick}
      />
      <Key
      keySign = '='

       />
      <Key
      keySign = 'Clear'
      handleClick = {handleClick}
      />
     </div>

    </div>
  );
}

export default App;
