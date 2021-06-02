// The following event listeners detect when their respective buttons are pressed.
document.getElementById('btn1910').addEventListener('click', myFunction1910)

document.getElementById('btn1928').addEventListener('click', myFunction1928)

document.getElementById('btn1932').addEventListener('click', myFunction1932)

document.getElementById('btn1936').addEventListener('click', myFunction1936)

document.getElementById('btn1939').addEventListener('click', myFunction1939)

document.getElementById('btn1947').addEventListener('click', myFunction1947)

document.getElementById('btn1955').addEventListener('click', myFunction1955)

document.getElementById('btn1956').addEventListener('click', myFunction1956)

document.getElementById('btn1963').addEventListener('click', myFunction1963)

document.getElementById('btn1989').addEventListener('click', myFunction1989)

// When the user clicks on the button, this toggles displaying the content.
function myFunction1910() {
  document.getElementById('dropdown-1910').classList.toggle('show');
}

// This is a repeat of above for the next button.
function myFunction1928() {
  document.getElementById('dropdown-1928').classList.toggle('show');
}

// This is a repeat again, for the next button.
function myFunction1932() {
  document.getElementById('dropdown-1932').classList.toggle('show');
}

// There are 9 of these buttons, the repeats are so that they do not trigger each other.
function myFunction1936() {
  document.getElementById('dropdown-1936').classList.toggle('show');
}

// Toggles displaying the content of this button.
function myFunction1939() {
  document.getElementById('dropdown-1939').classList.toggle('show');
}

// Toggles displaying the content of this button.
function myFunction1947() {
  document.getElementById('dropdown-1947').classList.toggle('show');
}

// Toggles displaying the content of this button.
function myFunction1955() {
  document.getElementById('dropdown-1955').classList.toggle('show');
}

// Toggles displaying the content of this button.
function myFunction1956() {
  document.getElementById('dropdown-1956').classList.toggle('show');
}

// Toggles displaying the content of this button.
function myFunction1963() {
  document.getElementById('dropdown-1963').classList.toggle('show');
}

// Again, toggles displaying the content of this button.
function myFunction1989() {
  document.getElementById('dropdown-1989').classList.toggle('show');
}
