let firstNum = null ;
let secondNum = null ;
let resultNum = null ;

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
  console.log(firstNum)
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)  
  console.log(secondNum)
}

const add = (numA, numB) => {
  const value = numA + numB
  return value
}

const subtract = (numA, numB) => {
  const value = numA - numB
  return value
}

const multiply = (numA, numB) => {
  const value = numA * numB
  return value
}

const divide = (numA, numB) => {
  const value = numA / numB
  return value
}

// const modulus = (numA, numB) =>{
//   const value = numA % numB
//   // console.log("modulus")
//   return value
// }
const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
  return operation
}
const putResultInElement = (operationResult) => {
  console.log(operationResult)
  document.getElementById("result").value = operationResult
}

const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum))
    break;
    case "division": putResultInElement(divide(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}