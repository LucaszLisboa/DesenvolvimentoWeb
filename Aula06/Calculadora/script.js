let display = "0";

const displayElement = document.getElementById("display");
// const display = document.querySelector("display");

const buttonsElements = document.querySelectorAll(".btn");

buttonsElements.forEach(
    (buttonElement) => {
        buttonElement.onclick = onButtonClickEvent
    })

function onButtonClickEvent(event) {
    const buttonElement = event.target

    switch (buttonElement.innerText) {
        case "C":
            limparDisplay();
            break;
        case "=":
            calcularResultado();
            break;
        default:
            adicionaCaractere(buttonElement.innerText);
            break;
    }

    updateDisplay();
}

function limparDisplay() {
    display = "0";
}

function calcularResultado() {
    try{
        display = eval(display)
    } catch (error) {
        display = "ERR!"
    }
}

function adicionaCaractere(caractere) {
    if (display == "0" && caractere !== ".") {
        display = ""
    }

    display += caractere
}

function updateDisplay(){
    displayElement.innerText = display;
}