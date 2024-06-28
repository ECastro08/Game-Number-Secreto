let listaGenerica = [];

//
let lenguajesDeProgramacion = ['js','python','C','C++','Kotlin'];

//

lenguajesDeProgramacion.push('java','Golang', 'rugby');

//

function showListLenguajes() {
    console.log(lenguajesDeProgramacion);
}
//
function showListInverse() {
    console.log(lenguajesDeProgramacion.reverse())
}
//
let listaNumbers = [2,3,4,5,6,7,8];

function calculatePromedioLista() {
    let inicial = 0;
    let prom = listaNumbers.reduce((acum, currentValue) => acum+currentValue,inicial)/listaNumbers.length;
    console.log(`EL promedio de la lista es ${prom}`);
    return prom;
    
}

//

function showMinYMax() {
    let maximo = Math.max(...listaNumbers);
    let minimo = Math.min(...listaNumbers);
    return console.log(`Valor maximo: ${maximo}, Valor minimo: ${minimo}`);    
}

//
function returnPosition(elemento) {
    let position = listaNumbers.indexOf(elemento);
    console.log(position)
    return position;
}

//
let array1 = [1,2,3];
let array2 = [4,5,6];

function sumLista(array1, array2) {
    let result = array1.map((item, i) => item + array2[i]);
    return console.log(result)
}
//sumLista(array1,array2);

//

function squaredList(array) {
    let result = array.map( x => x*x);
    return console.log(result);
}

squaredList([2,4,6]);