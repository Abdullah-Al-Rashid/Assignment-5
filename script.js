let diameter = 0
let number = 0
// Connect "Calculate" button to "calculate" function
document.getElementById('calculate').addEventListener('click', calculate)

function calculate () {
  // Store the number typed by user and convert it to an integer
  diameter = document.getElementById('area').value
  diameter = parseInt(diameter)
  // Calculate the Area of the Circle using the inputted diameter
  // "Math.PI is Pi"
  number = Math.PI * (diameter / 2) ** 2
  document.getElementById('answer').innerHTML = number
}

document.getElementById('findout').addEventListener('click', findout)

function findout () {
  // Store the number typed by user and convert it to an integer
  diameter = document.getElementById('circumference').value
  diameter = parseInt(diameter)
  // Calculate the Area of the Circle using the inputted diameter
  // "Math.PI is Pi"
  number = 2 * Math.PI * (diameter / 2)
  document.getElementById('result').innerHTML = number
}
