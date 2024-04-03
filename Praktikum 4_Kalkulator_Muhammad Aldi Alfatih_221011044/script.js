const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deletee() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function kalkulasi() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}