let title = document.querySelector('h1');

title.innerHTML = 'Time of challenge';


function clickConsole(){
    alert('El boton fue clicado');
}

function askCityOfBrazil() {
    let nameCity = prompt('Say me a city of Brazil ');
    alert(`Estuve en ${nameCity} y me acorde de ti.`);
}

function msmAlert() {
    alert('I love js');
}

function makeAdd() {
    let num1 = parseInt(prompt('Input your first number: '));
    let num2 = parseInt(prompt('Input your Second number: '));

    result = num1 + num2;

    alert(`la suma de ${num1} y ${num2} es ${result}.`)
}