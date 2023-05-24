document.addEventListener('DOMContentLoaded', function() {
  // getElementsbyTagName && getElementByClassName
  const form = document.getElementsByTagName('form')[0];
  const exerciseLog = document.getElementsByClassName('exercise-log')[0];

  let exerciseCounter = 0;

  //submit event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault(); //prevent form submission

    //input values
    const exerciseType = document.getElementById('exercise-type').value;
    const duration = document.getElementById('duration').value;
    const intensity = document.getElementById('intensity').value;
    const notes = document.getElementById('notes').value;

    //validate exercise type
    if (!validateExerciseName(exerciseType)) {
      alert('Please enter a valid exercise type. (Needs to end in Workout)');
      return;
    }

    //new exercise log entry
    const exerciseEntry = document.createElement('div');
    exerciseEntry.classList.add('exercise-entry');

    exerciseCounter++;

    //counter
    const exerciseCounterElement = document.createElement('p');
    exerciseCounterElement.innerHTML = 'Exercise #' + exerciseCounter;


    const exerciseDetails = document.createElement('p');
    exerciseDetails.innerHTML = '<strong>Exercise Type:</strong> ' + exerciseType +
                                ' | <strong>Duration:</strong> ' + duration +
                                ' minutes | <strong>Intensity:</strong> ' + intensity;

    const exerciseNotes = document.createElement('p');
    exerciseNotes.innerHTML = '<strong>Additional Notes:</strong> ' + notes;

    //append the counter, details and notes
    exerciseEntry.appendChild(exerciseCounterElement);
    exerciseEntry.appendChild(exerciseDetails);
    exerciseEntry.appendChild(exerciseNotes);

    //append the entry to the exercise log
    exerciseLog.appendChild(exerciseEntry);

    //reset the form
    form.reset();
  });
});

//validarea datelor
function validateExerciseName(exerciseName) {
  const regex = /Workout$/i; //verifică dacă se termină cu "Workout"
}