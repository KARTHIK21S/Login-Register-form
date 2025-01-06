// Get elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Toggle between Sign In and Sign Up forms
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Validation for Sign Up Form
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  if (name === "" || email === "" || password === "") {
    alert("All fields are required!");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  alert("Sign Up Successful!");
});

// Validation for Sign In Form
document.getElementById('signinForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  if (email === "" || password === "") {
    alert("Both fields are required!");
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Sign In Successful!");
});
