// Triangle calculation  

const input1 = document.getElementById("triangle-value1");
const input2 = document.getElementById("triangle-value2");
const output1 = document.getElementById("triangle-aree1");
const output2 = document.getElementById("triangle-area2");

// add event listeners to the input elements
input1.addEventListener("input", updateOutput);
input2.addEventListener("input", updateOutput);

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
const value1Input = document.getElementById('triangle-value1');
const value2Input = document.getElementById('triangle-value2');
const cartButton = document.getElementById('cart-triangle');

// ad event listener to calculate button
cartButton.addEventListener('click', function () {
    const value1 = parseFloat(value1Input.value);
    const value2 = parseFloat(value2Input.value);
    const total = 0.5 * value1 * value2;

    // validate input values
    if (isNaN(value1) || isNaN(value2) || value1 < 0 || value2 < 0) {
        // Error message
        alert("Please enter positive numbers for both values");
        return;
    }

    //area calculation section started

    const table = document.getElementById('table-container');
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    const noCell = row.insertCell(0);
    noCell.innerHTML = rowCount + 1;

    const nameCell = row.insertCell(1);
    nameCell.innerHTML = 'Triangle';

    const totalCell = row.insertCell(2);
    totalCell.innerHTML = total ;

    const actionCell = row.insertCell(3);
    actionCell.innerHTML = '<button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button>';
});


// random background color generator

const cards = document.querySelectorAll('.card-random-bg');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = "#" + randomColor;
    });

    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = "white";
    });
});
