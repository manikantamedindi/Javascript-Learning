// ! 1
// getElementById();
const getButtonElement = document.getElementById("clickMe");

// ! 2
// getElementByName();
const radioSubmitButton = document.getElementById("btnRate");
const outputValue = document.getElementById("output");

radioSubmitButton.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  let isChecked = false;
  rates.forEach((rate) => {
    console.log("Hi");
    if (rate.checked) {
      outputValue.innerText = `You selected: ${rate.value}`;
      outputValue.style.background = "";
      isChecked = true;
    }
    if (!isChecked) {
      outputValue.style.background = "red";
      outputValue.innerHTML = "You have not selected any rate";
    }
  });
});

// ! 3
// getElementByTagName();

let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", () => {
  let selectedElements = document.getElementsByTagName("h1");
  // Loop through the selected elements and change their background color
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].style.background = "red";
  }
});

// ! 4
// getElementsByClassName()

let changeTextColorButton = document.getElementById("changeTextColor");

changeTextColorButton.addEventListener("click", () => {
  let selectedElements = document.getElementsByClassName("valueOne");
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].style.color = "red";
  }
});
