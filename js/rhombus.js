document.getElementById('cart-parallelogram').addEventListener('click', function() {
    // Get the values of b and h from the HTML elements
    const b = parseInt(document.getElementById('parallelogram-aree3').innerText);
    const h = parseInt(document.getElementById('parallelogram-aree4').innerText);
  
    // Calculate the area of the parallelogram
    const area = b * h;
  
    // Display the result in the table
    displayData('Parallelogram', area.toFixed(2), '1', area.toFixed(2));
  });