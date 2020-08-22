//typeof gets the data type
// typeof defaultResult returns number
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
/* You should make functions often for a website 
because what happens if you want to make a quick change.
But you copy and pasted for a hundred lines that's bad code.
*/

// Gets input from input field
function getUserNumberInput() {
  return parseFloat(usrInput.value);
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
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
   writeToLog("ADD",initialResult,enteredNumber,currentResult);
 
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog("SUBTRACT",initialResult,enteredNumber,currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog("MULTIPLY",initialResult,enteredNumber,currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog("DIVIDE",initialResult,enteredNumber,currentResult);
}

function clear(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = defaultResult
  outputResult(currentResult,'')
  writeToLog("CLEAR",initialResult,enteredNumber,currentResult);

}
clearBtn.addEventListener('click',clear);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);