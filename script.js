const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Optional: keyboard support
document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789+-*/.=EnterBackspace";
  if (allowedKeys.includes(e.key)) {
    e.preventDefault();
    if (e.key === "Enter") {
      calculate();
    } else if (e.key === "Backspace") {
      deleteLast();
    } else if (e.key === "=") {
      calculate();
    } else {
      append(e.key);
    }
  }
});