<<<<<<< HEAD
let display = document.getElementById("display");

function press(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
=======
let display = document.getElementById("display");

function press(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
>>>>>>> 00b4069c19c96aca0ec21769746e8cf8c9698069
