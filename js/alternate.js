// Get references to the input and output elements
const input1 = document.getElementById("triangle-value1");
const input2 = document.getElementById("triangle-value2");
const output1 = document.getElementById("triangle-aree1");
const output2 = document.getElementById("triangle-area2");

// Add event listeners to the input elements
input1.addEventListener("input", updateOutput);
input2.addEventListener("input", updateOutput);

// Function to update the output elements
function updateOutput() {
  const value1 = input1.value;
  const value2 = input2.value;

  // Update the output elements with the input values
  output1.textContent = value1;
  output2.textContent = value2;
}

// Get references to the input elements and cart button
const value1Input = document.getElementById('triangle-value1');
const value2Input = document.getElementById('triangle-value2');
const cartButton = document.getElementById('cart-triangle');

// Add an event listener to the cart button
cartButton.addEventListener('click', function() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  const total = 0.5 * value1 * value2;

  // Create new table row to display area calculation
  const table = document.getElementById('table-container');
  const rowCount = table.rows.length;
  const row = table.insertRow(rowCount);

  // Add table cells to the new row
  const noCell = row.insertCell(0);
  noCell.innerHTML = rowCount + 1;

  const nameCell = row.insertCell(1);
  nameCell.innerHTML = 'Triangle';

  const totalCell = row.insertCell(2);
  totalCell.innerHTML = total;

  const actionCell = row.insertCell(3);
  actionCell.innerHTML = '<button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button>';
});
