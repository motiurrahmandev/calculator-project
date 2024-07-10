let string = "";
const buttons = document.querySelectorAll('.btn');
const inputBox = document.querySelector(".display");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputBox.value = string;
    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      inputBox.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.slice(0, -1);
      inputBox.value =string;
    }
    else {
      string = string + e.target.innerHTML;
      inputBox.value = string;

    }
  })
})  