function addCurrentDateTime() {
  const footer = document.querySelector('footer');
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();
  //array method
  const paragraphs = Array.from(footer.getElementsByTagName('p'));

  //update the second paragraph if it exists
  if (paragraphs.length >= 2) {
    const secondParagraph = paragraphs[1];
    secondParagraph.textContent = `Current Date: ${dateString} | Current Time: ${timeString}`;
  } else {
    const dateTimeParagraph = document.createElement('p');
    dateTimeParagraph.textContent = `Current Date: ${dateString} | Current Time: ${timeString}`;
    footer.appendChild(dateTimeParagraph);
  }
}

let intervalId = null;

document.addEventListener('DOMContentLoaded', () => {
  //eveniment de la tastatura
  document.addEventListener('keydown', handleKeyPress);
});

function handleKeyPress(event) {
  if ((event.key === 'T' || event.key === 't') && !intervalId) {
    addCurrentDateTime();
    
    //updates every second
    intervalId = setInterval(() => {
      addCurrentDateTime();
    }, 1000);
  }
}