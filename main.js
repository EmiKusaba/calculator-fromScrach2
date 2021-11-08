let firstNum = ""
let secondNum = ""
let isFirst = true
let operation = ""

const onNumber = (val) => {
  if (isFirst) {
    firstNum += val
  } else {
    secondNum += val
  }
  console.log(val)

  updateScreen()
}

const onOperation = (val) => {
  if (firstNum === "") {
    return
  }
  isFirst = false
  operation = (val)
  console.log(operation)

  updateScreen()
}

const updateScreen = () => {
  document.getElementById("screen").innerHTML = firstNum + " " + operation + " " + secondNum
}

const onEquals = () => {
  if (firstNum === "" || secondNum === "" || operation === "") {
    return
  }
  let screen = getElementById("screen")
  switch (operation) {
    case "+": parseInt(firstNum) + parseInt(secondNum)
      break;
    case "-": parseInt(firstNum) - parseInt(secondNum)
      break;
    case "x": parseInt(firstNum) * parseInt(secondNum)
      break;
    case "/": parseInt(firstNum) / parseInt(secondNum)
      break;
    default: "Choose an operation"
  }
}