// eveniment de click + querySelector
const header = document.querySelector('h2');
header.addEventListener('click', function() {
  const randomColor = generateRandomColor();
  changeTextColor(header, randomColor);
});

// schimbare culoare text random
function changeTextColor(element, color) {
  if (element) {
    element.style.color = color;
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
