// card 2

// add event listener to the add to cart button 
document.getElementById('cart-rectangle').addEventListener('click', function () {

    // get data from html using their ID 
    const geometryName = document.getElementById('rectangle').innerText;
    const geometryValue1 = document.getElementById('rectangle-value1').value;
    const geometryValue2 = document.getElementById('rectangle-value2').value;

    // check if inputs are valid
    if (isNaN(geometryValue1) || isNaN(geometryValue2) || geometryValue1 <= 0 || geometryValue2 <= 0) {
        // Error message, if input invalid data
        alert("Please enter positive numbers for both values");
        return;
    }

    // calculate the total area
    const totalArea = parseInt(geometryValue1) * parseInt(geometryValue2);

    // display name, total area to the cart section 
    displayData(geometryName, totalArea);
})

// card 3 
// add event listener to the calculate button 

document.getElementById('cart-parallelogram').addEventListener('click', function () {
    // Get the values of b and h from the HTML elements

    const b = parseInt(document.getElementById('parallelogram-aree3').innerText);
    const h = parseInt(document.getElementById('parallelogram-aree4').innerText);

    // Calculate the area of the parallelogram
    const area = b * h;

    // Display the result in the table
    displayData('Parallelogram', area.toFixed(2), '1', area.toFixed(2));
});

//   card 4
// add event listener to the calculate button 
document.getElementById('cart-rhombus').addEventListener('click', function () {
// Get the values of b and h from the HTML elements

    const d1 = parseInt(document.getElementById('rhombus-area3').innerText);
    const d2 = parseInt(document.getElementById('rhombus-area4').innerText);

    // Calculate the area of the parallelogram
    const area = 0.5 * d1 * d2;

    // Display the result in the table
    displayData('Rhombus', area, area, d1, d2);
});

// card 5 
// add event listener to the calculate button 
document.getElementById('cart-pentagon').addEventListener('click', function () {

    // Get the values of b and h from the HTML elements
    const p = parseFloat(document.getElementById('pentagon-area3').textContent);
    const b = parseFloat(document.getElementById('pentagon-area4').textContent);

    // Calculate the area of the parallelogram
    const area = 0.5 * p * b;

    // Display the result in the table
    displayData('Pentagon', area, p, b);
});

//   card 6
// add event listener to the calculate button 
document.getElementById('cart-ellipse').addEventListener('click', function () {

    // Get the values of b and h from the HTML elements
    const a = parseFloat(document.getElementById('ellipse-area3').textContent);
    const b = parseFloat(document.getElementById('ellipse-area4').textContent);

    // Calculate the area of the parallelogram
    const area = 3.14 * a * b;

    // Display the result in the table
    displayData('Ellipse', area.toFixed(2), a, b);
}); 

// main function to use for all

// initialize a variable 
let count = 0;

// function for  showing data in table row 
function displayData(GeometricName, GeometricArea) {

    // increament the number each time + 1
    count++;

    // getting container element 
    const container = document.getElementById('table-container');

    // create new table row 
    const tr = document.createElement('tr');

    // set the inner HTML
    tr.innerHTML = `
        <td>${count}</td>
        <td>${GeometricName}</td>
        <td>${GeometricArea} cm<sup>2</sup></td> 
        <td><button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button></td>
    `;

    // add the row to container 
    container.appendChild(tr);
}

