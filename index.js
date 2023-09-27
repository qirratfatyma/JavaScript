// Accessing an element by its ID
let heading = document.getElementById('main-heading');

// Modifying the element's content
heading.textContent = 'New Text';

// Adding an event listener to a button element
let button = document.getElementById('change-text');
button.addEventListener('click', function () {
  heading.textContent = 'Text Changed!';
});
