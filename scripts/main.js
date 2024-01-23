let myButton = document.querySelector('.button');
let myInput = document.querySelector('.input');

function convertir() {
    let celsius = myInput.value;
    let farhenheit = (celsius*1.8) + 32 ;
    let text = `${celsius}°Celsius valent ${farhenheit}°Fahrenheit`;
    if (celsius === "") {
        document.querySelector(".result").innerHTML = "Erreur! Veuillez entrer une valeur numérique.";
    }
    else if (celsius < -273.15) {
        document.querySelector(".result").innerHTML = "Le zéro absolu a été dépassé. Veuillez entrer une valeur supérieure ou égale à -273,15°C";
    } 
    else {
        document.querySelector(".result").innerHTML = text;
    }
    myInput.value = "";
}

myButton.addEventListener('click', function() {
    convertir()
})

myInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertir()
    } 
})

