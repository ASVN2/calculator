// switching themes

const themes = document.querySelectorAll(".theme div");
const clacContainer = document.querySelector(".calc-container");
themes.forEach((theme) => {
  // for the active class
  theme.addEventListener("click", () => {
    themes.forEach((theme) => {
      theme.classList.remove("active");
    });
    theme.classList.add("active");
    // set the number of themes and the main class
    clacContainer.className = `calc-container ${theme.classList[0]}`;
    // change the background color
    if (theme.classList[0] == "two") {
      document.body.style.backgroundColor = `hsl(0, 0%, 90%)`;
    } else if (theme.classList[0] == "three") {
      document.body.style.backgroundColor = `rgb(47, 20, 79)`;
    } else {
      document.body.style.backgroundColor = `hsl(222, 26%, 31%)`;
    }
  });
});

// logic for the app

// set variables
let screen = document.querySelector(".screen");
const keys = document.querySelectorAll(".key");
let firstNumber = [],
  secendNumber,
  value,
  resaut,
  option,
  one = false;

// loop on the all the keys
keys.forEach((key) => {
  key.addEventListener("click", () => {
    calc(key);
  });
});

// calc function
function calc(key) {
  // check if the the button clicked is number
  if (key.classList.contains("number")) {
    firstNumber.push(key.dataset.hold);
    screen.textContent = firstNumber.join("");
    // check if the the button clicked is option
  } else if (key.classList.contains("option")) {
    calculate(key);
  }
  // check if the the button clicked is equal
  else if (key.classList.contains("equal")) {
    calculate(key);
  }
  // check if the the button clicked is del
  else if (key.classList.contains("del")) {
    del();
  }
  // check if the the button clicked is reset
  else if (key.classList.contains("reset")) {
    screen.textContent = "0";
    firstNumber = [];
    value = 0;
    secendNumber = 0;
    resaut = 0;
    one = false;
  }
}

// function run when you click on del button
function del() {
  if (!value) {
    //remove the last element from the array and push it onto the screen
    firstNumber.pop();
    screen.textContent = firstNumber.join("");
  } else {
    // if I have resaut remove on screen all number
    screen.textContent = "0";
    firstNumber = [];
    value = 0;
    secendNumber = 0;
    resaut = 0;
    one = false;
  }
  // if the screen about to be empty put 0 in it
  if (screen.textContent === "") {
    screen.textContent = "0";
  }
}

// clacContainer function
function calculate(key) {
  // put the first firstNumber in resaut if the resaut empty and if it have a value add firstNumber into secendNumber
  resaut ? (secendNumber = firstNumber.join("")) : (resaut = firstNumber.join(""));
  // check if we calc and than and reset to new value
  if (one) {
    resaut = value;
  }
  // after clicking empty array
  firstNumber = [];
  // if we clicked on equal button
  if (key.classList.contains("equal")) {
    // before pass the second option
    option = option;
  } else {
    // after pass the second option
    option = key.dataset.hold;
  }
  // calculate the resaut value
  value = eval(Number(resaut) + option + Number(secendNumber));
  if (secendNumber) {
    // put it into screen and add true to variable one to make sure we have a resaut
    if (value === NaN) {
      screen.textContent = "Error";
    } else {
      if (value % 1 === 0) {
        screen.textContent = value;
      } else {
        screen.textContent = value.toFixed(2);
        one = true;
      }
    }
  }
}
