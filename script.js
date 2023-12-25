document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');
    const resultsDiv = document.getElementById('results');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get values from the input fields
      const input1Value = document.getElementById('input1').value;
      const input2Value = document.getElementById('input2').value;
      const input3Value = document.getElementById('input3').value;
  
      // Create a new paragraph for each input value
      const newParagraph = document.createElement('p');
      newParagraph.textContent = `${input1Value}, ${input2Value}, ${input3Value}`;
  
      // Add dynamic styles to the paragraph
      newParagraph.style.color = getRandomColor(); // Implement getRandomColor function
  
      // Append the paragraph to the results div
      resultsDiv.appendChild(newParagraph);
    });
  
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  