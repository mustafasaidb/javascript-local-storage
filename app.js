// select the input element
const input = document.querySelector('#input');

// select the save button
const saveButton = document.querySelector('#save-button');

// select a div element to display the saved data
const output = document.querySelector('#output');

// create an array to store the saved data
let savedData = [];

// when the page loads, get the saved data from localstorage
if (localStorage.getItem('savedData')) {
  savedData = JSON.parse(localStorage.getItem('savedData'));
  // display the saved data on the page
  output.innerHTML = savedData.join(', ');
}

// when the save button is clicked
saveButton.addEventListener('click', () => {
  // get the value from the input element
  const value = input.value;
  // add the value to the array
  savedData.push(value);
  // display the last added value on the page
  output.innerHTML = value;
  // save all the values in the array to localstorage
  localStorage.setItem('savedData', JSON.stringify(savedData));
});