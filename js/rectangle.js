// Triangle calculation  
// let serial = 0;
// document.getElementById('cart-rectangle').addEventListener('click', function(){
//     serial += 1;

//     console.log('button pressed ')

// })

// const rectangleText1 = document.getElementById('rectangle-aree1')
// const rectangleText2 = document.getElementById('rectangle-aree2')
// const rectangleValue1 = document.getElementById('rectangle-value1')
// const rectangleValue2 = document.getElementById('rectangle-value2')



const output2 = document.getElementById("rectangle-area2");

// add event listeners to the input elements
input1.addEventListener("input", updateOutput);
input2.addEventListener("input", updateOutput);
console.log('button pressed')

// it is used to update output
function updateOutput() { 

  // getting values of  input elements
  const value1 = input1.value;
  const value2 = input2.value;

  //update element with input value
  output1.textContent = value1;
  output2.textContent = value2;
}

// getting input elements and cart button
const value1Input = document.getElementById('rectangle-value1');
const value2Input = document.getElementById('rectangle-value2');
const cartButton = document.getElementById('cart-rectangle');

// ad event listener to calculate button
cartButton.addEventListener('click', function() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  const total = 0.5 * value1 * value2; 

  //area calculation section started

  const table = document.getElementById('table-container');
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  const noCell = row.insertCell(0);
  noCell.innerHTML = rowCount + 1;

  const nameCell = row.insertCell(1);
  nameCell.innerHTML = 'rectangle';

  const totalCell = row.insertCell(2);
  totalCell.innerHTML = total;

  const actionCell = row.insertCell(3);
  actionCell.innerHTML = '<button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button>';
}); 