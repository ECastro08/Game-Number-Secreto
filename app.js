let numberRandom = 0;
let intentos = 0;
let listNumbers = [];
let numMax = 10;

function generateText(element, text) {
    let elemento = document.querySelector(element);
    elemento.innerHTML = text;
    return;
}


function generateNumberRandom() {

    let numGenerate =  Math.floor(Math.random()*numMax)+1;
    if (listNumbers.length == numMax) {
        generateText('p','Ya se generaron todos los numeros');
    } else {
        if(listNumbers.includes(numGenerate)) {
            return generateNumberRandom();
        } else {
            listNumbers.push(numGenerate);
            return numGenerate;
        }
    }
}

function typeUser(){
    let numberUser = parseInt(document.getElementById('valueUser').value);
    
    if(numberUser === numberRandom) {
        generateText('h2',`Acertaste en ${intentos} ${intentos == 1 ? 'Vez':'Veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if(numberUser > numberRandom) {
            generateText('h2','Sigue intentando, el numero es menor');
        } else {
            generateText('h2','Sigue intentando, el numero es mayor');
        }
    } intentos++;
    cleanBox();
    return;
}

function cleanBox() {
    document.getElementById('valueUser').value = '';
}

function condicionesIniciales() {
    generateText('h1','Juega al numero secreto');
    generateText('p',`Input your number between 1 to ${numMax}`);
    numberRandom = generateNumberRandom();
    intentos = 1;
}

function resetGame() {
    cleanBox();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()