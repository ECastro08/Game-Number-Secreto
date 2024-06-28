//Crear Funciones

function showHelloWorld(){
    console.log('Hello World');
}

function greeting(name) {
    console.log(`Hola, ${name}`);
}

function doubleNumber(number) {
    let doub = 2*number;
    return doub;
}

function getpromedio(num1, num2, num3) {
    let prom = (num1+num2+num3)/3;
    console.log(prom);
    return prom;
    
}

function isMayor(num1, num2) {
    let verify = num1 > num2 ? num1:num2;
    console.log(verify);
    return verify;
}

function exp(num) {
    let resul = num*num;
    return resul;
}
