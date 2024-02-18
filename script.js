function manipulateData(inputArray) {
  // Return a promise that resolves after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then((numbers) => {
    // Filter out odd numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Multiply even numbers by 2 after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
	  .then((result1) => {
    // Update the text of the HTML element with ID "output"
	  
    const outputElement1 = document.getElementById("output");
    outputElement1.textContent = result1.join(', ');
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

  .then((result) => {
    // Update the text of the HTML element with ID "output"
	  
    const outputElement = document.getElementById("output");
    outputElement.textContent = result.join(', ');
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// Example usage with the provided array [1, 2, 3, 4]
manipulateData([1, 2, 3, 4]);