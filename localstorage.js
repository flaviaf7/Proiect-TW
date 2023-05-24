//salvarea datelor actuale in local storage
function saveFormData() {
    const formData = {
      exerciseType: document.getElementById('exercise-type').value,
      duration: document.getElementById('duration').value,
      intensity: document.getElementById('intensity').value,
      notes: document.getElementById('notes').value
    };
  
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  
 //restaurarea datelor din local storage
function restoreFormData() {
    const savedFormData = localStorage.getItem('formData');
  
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);
  
      document.getElementById('exercise-type').value = formData.exerciseType;
      document.getElementById('duration').value = formData.duration;
      document.getElementById('intensity').value = formData.intensity;
      document.getElementById('notes').value = formData.notes;
    }
  }
  
  document.getElementById('submit').addEventListener('click', saveFormData);
  
  document.addEventListener('DOMContentLoaded', restoreFormData);
  