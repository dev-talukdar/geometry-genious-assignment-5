// card 2
document.getElementById('cart-rectangle').addEventListener('click', function () {

    // get data from html using ID 

    const geometryName = document.getElementById('rectangle').innerText;  

    const geometryValue1 = document.getElementById('rectangle-value1').value; 
    const geometryValue2 = document.getElementById('rectangle-value2').value;  
    // multiply
    const totalArea = parseInt(geometryValue1) * parseInt(geometryValue2); 

    // display data to the cart section 
    displayData(geometryName,totalArea);
})

// card 3 
document.getElementById('cart-parallelogram').addEventListener('click', function() {
    // Get the values of b and h from the HTML elements
    const b = parseInt(document.getElementById('parallelogram-aree3').innerText);
    const h = parseInt(document.getElementById('parallelogram-aree4').innerText);
  
    // Calculate the area of the parallelogram
    const area = b * h;
  
    // Display the result in the table
    displayData('Parallelogram', area.toFixed(2), '1', area.toFixed(2));
  });

//   card 4

document.getElementById('cart-rhombus').addEventListener('click', function() {
    const d1 = parseInt(document.getElementById('rhombus-area3').innerText);
    const d2 = parseInt(document.getElementById('rhombus-area4').innerText);
    const area = 0.5 * d1 * d2;
    displayData('Rhombus', area, '', area, d1, d2);
});

// card 5 
document.getElementById('cart-pentagon').addEventListener('click', function() {
    const p = parseFloat(document.getElementById('pentagon-area3').textContent);
    const b = parseFloat(document.getElementById('pentagon-area4').textContent);
    const area = 0.5 * p * b;
    displayData('Pentagon',area, p, b);
  });

//   card 6

document.getElementById('cart-ellipse').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('ellipse-area3').textContent);
    const b = parseFloat(document.getElementById('ellipse-area4').textContent);
    const area = 3.14 * a * b;
    displayData('Ellipse', area.toFixed(2), a, b);
  });
  




function displayData(GeometricName, GeometricPrice) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${1}</td>
        <td>${GeometricName}</td>
        <td>${GeometricPrice}</td> 
        <td><button class="btn btn-primary bg-cyan-600 border-none hover:bg-blue-500 text-white">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}
