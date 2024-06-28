function calculateImc(weight, height) {
    let imc = weight/(height*height);
    console.log(imc);
    return imc;
}

//

function calcultaFactorial(num) {
    for (let i= num -1; i >= 1 ; i--) {
        fact = num *= i;
    } 
    return console.log(fact); 
}

//

function converterDolarAPeso(valor) {
    conversion = valor*4165;
    return console.log(conversion);
}

//

function CalculateAreaPerimetro(alt, anch) {
    let area = alt*anch;
    let perimetro = 2*alt + 2*anch;
    console.log(`Area: ${area} Perimetro:${perimetro}`)
    return area, perimetro;
}

//

function calculateAreaCircular(radio) {
    let pi = 3.14;
    let areaC = pi*(radio*radio);
    let perimetroC = (radio+radio)*pi;
    console.log(areaC,perimetroC);
}

//

function tablaMultiplicar(num) {
    for(let i=0; i<=10;i++) {
         //console.log(i)
        console.log(num*i);
    }
} 

tablaMultiplicar(3)