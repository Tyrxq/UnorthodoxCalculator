//typeof gets the data type
// typeof defaultResult returns number
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let lastEntry = logEntries.length-1;
/* You should make functions often for a website 
because what happens if you want to make a quick change.
But you copy and pasted for a hundred lines that's bad code.
*/


// Gets input from input field
function getUserNumberInput() {
   let input = parseFloat(usrInput.value);
   if(isNaN(input)){
     input = 0;
   }
   return input;
}
function calculateResult(calculationType){
  const enteredNumber =  getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === "ADD"){
    currentResult += enteredNumber;
    mathOperator = "+";
  }else{
    currentResult -= enteredNumber;
    mathOperator = "-"
  }
  createAndWriteOutput(mathOperator,initialResult,enteredNumber)
  writeToLog(calculationType + mathOperator,initialResult,enteredNumber,currentResult);
  lastEntry = logEntries.length-1;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}
function writeToLog(operationIdenity,prevResult,operationNumber,newResult){
  //This is an object
  //Pretty similar to a dictinary in Python
  //But used more like a class than a list
  const logEntry = {
    operation: operationIdenity,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult 
  };
  //This is similar to .append in python
  logEntries.push(logEntry);
  //This like print but it only shows up in the consle
  console.log(logEntries);
  console.log(logEntry.operation);
}

function add() {
  calculateResult("ADD");
 
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog("MULTIPLY*",initialResult,enteredNumber,currentResult);
  lastEntry = logEntries.length-1;
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog("DIVIDE/",initialResult,enteredNumber,currentResult);
  lastEntry = logEntries.length-1;
}

function clear(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = defaultResult
  outputResult(currentResult,'')
  writeToLog("CLEAR ",initialResult,enteredNumber,currentResult);
  lastEntry = logEntries.length-1;

}
function back(){
  lastEntry -= 1; 
  currentResult = logEntries[lastEntry].result;
  const prevOperation =logEntries[lastEntry].operation.charAt(logEntries[lastEntry].operation.length-1)
  const prevResult = logEntries[lastEntry].prevResult
  const prevOperandNum = logEntries[lastEntry].number
  if(prevOperation == " "){
    outputResult(currentResult,'')
  }
  else{
    createAndWriteOutput(prevOperation,prevResult,prevOperandNum);
  }
  writeToLog("Back" + prevOperation,prevResult,prevOperandNum,currentResult);
}
backBtn.addEventListener('click',back);
clearBtn.addEventListener('click',clear);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
