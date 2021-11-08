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