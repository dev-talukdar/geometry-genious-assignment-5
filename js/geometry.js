 
//  input field 1 e kono man nile .. seta area b te show korbe
//  input field 2 e kono man nile .. seta area h te show korbe



// idea generate kore korechilam 
// document.getElementById('cart-triangle').addEventListener('click', function(){

//     console.log('button pressed')

//     const triangle1Field = document.getElementById('triangle-value1');
//     const triangle1FieldString = triangle1Field.value;
//     const newTriangle1Field = parseFloat(triangle1FieldString);

//     const triangle1Value = document.getElementById('triangle-aree1');
//     const triangle1ValueString = triangle1Value.innerText;
//     const newTriangle1Value = parseFloat(triangle1ValueString);

//     const totalArea = 

// })

// chat gpt version 

// get references to the input and output elements
const input1 = document.getElementById("triangle-value1");
const input2 = document.getElementById("triangle-value2");
const output1 = document.getElementById("triangle-aree1");
const output2 = document.getElementById("triangle-area2");

// add event listeners to the input elements
input1.addEventListener("input", updateOutput);
input2.addEventListener("input", updateOutput);

// function to update the output elements
function updateOutput() {
  // get the values of the input elements
  const value1 = input1.value;
  const value2 = input2.value;

  // update the output elements with the input values
  output1.textContent = value1;
  output2.textContent = value2;
}

// get references to the input elements and cart button
const value1Input = document.getElementById('triangle-value1');
const value2Input = document.getElementById('triangle-value2');
const cartButton = document.getElementById('cart-triangle');

// add an event listener to the cart button
cartButton.addEventListener('click', function() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  const total = 0.5 * value1 * value2;

  // create a new table row with the calculated values
  const table = document.getElementById('table-container');
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  const noCell = row.insertCell(0);
  noCell.innerHTML = rowCount + 1;

  const nameCell = row.insertCell(1);
  nameCell.innerHTML = 'Triangle';

  const totalCell = row.insertCell(2);
  totalCell.innerHTML = total;

  const actionCell = row.insertCell(3);
  actionCell.innerHTML = '<button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button>';
});



    
 
// sobar age korechilam 

    // const geometricName = document.getElementById('triangle').innerText;
    // const geometricArea1 = document.getElementById('triangle-aree1').innerText;
    // const geometricArea2 = document.getElementById('triangle-area2').innerText;
    // const geometricValue1 = document.getElementById('triangle-value1').value;
    // const geometricValue2 = document.getElementById('triangle-value2').value;

 
// function areaCalculation(geometricArea1, geometricArea2, geometricValue1, geometricValue2, totalArea) {
//     const tableArea = document.getElementById('table-container');
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${1}</td>
//     <td>${geometrName}</td>
//     <td>${geometrArea}</td>
//     <td>${geometricConvert}</td>     
    
//     `;
//     tableArea.appendChild(tr);

// }


