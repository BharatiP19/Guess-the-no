// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  // Check if the guess is correct
  if (guess === randomNumber) {
    showMessage("Congratulations! You guessed the correct number.");
  } else if (guess < randomNumber) {
    showMessage("Too low. Try again.");
  } else {
    showMessage("Too high. Try again.");
  }

  // Clear the input field
  guessInput.value = "";
}

// Function to display a message
function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}
