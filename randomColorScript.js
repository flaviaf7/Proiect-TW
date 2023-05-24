const header = document.querySelector('h2');
header.addEventListener('click', function(event) {
  const randomColor = generateRandomColor();
  
  changeRandomLetterColor(event.currentTarget, randomColor);
});

//schimba culoarea sau mareste litera
function changeRandomLetterColor(element, color) {
  if (element) {
    const text = element.textContent;
    
    const randomIndex = generateRandomNumber(0, text.length - 1);
    const letter = text.charAt(randomIndex);

    // style ul actual al literei 
    const computedStyle = window.getComputedStyle(element);
    const currentColor = computedStyle.color;

    //verifica daca culoarea este diferita de cea curenta
    if (color !== currentColor) {
      // Construiește HTML-ul modificat cu culoarea selectată pentru literă
      const modifiedText = text.substring(0, randomIndex) + `<span style="color: ${color}">${letter}</span>` + text.substring(randomIndex + 1);
      
      element.innerHTML = modifiedText;
    }
  }
}

// metoda din Math
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  const red = generateRandomNumber(0, 255);
  const green = generateRandomNumber(0, 255);
  const blue = generateRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
