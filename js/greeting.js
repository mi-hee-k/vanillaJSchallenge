const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const name = loginInput.value;
  localStorage.setItem(USERNAME_KEY, name);
  paintGreetings(name);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedName);
}
