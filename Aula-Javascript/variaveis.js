// Tipos de dados e váriaveis //
var myName; //string

let myAge;

const myLastName = "Candeia";

var isStudent = false; // boolean

var person = { // objeto
    "name": "Iury",
    "age": 25,
    "signo": "Aquario"
}

var students = ["iury", "marcos", "igor"] //array

// Funções aritmetricas de dois números //
function sum(a, b) { //função
    return a + b;

}

function multiplicar(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function substracao(a, b) {
    return a - b;
}

function restoDeDivisao(a, b) {
    return a % b;
}

function incrementar(a) {
    return --a;
}

function decrementar(a) {
    return --a;
}

// Operações condicionais //

var num = 1;
var x = 0;
while (x <= 10) {
    if (num == 1) {
        console.log("São iguais!")
        break
    } else {
        num -= 1;
        x++;
        console.log("acrescentando")
    }

}

var mes = "janeiro";

switch (mes) {
    case "fevereiro":
        console.log("Mes 2");
        break;

    case "março":
        console.log("Mes 3");
        break;

    case "janeiro":
        console.log("Mes 1");
        break;

    default:
        console.log("Nenhum dos casos acima foi atendidos");
}


var colors = ["azul", "verde", "vermelho", "lilas", 'branco'];
var contador = 0;

// while (condition) {

// }

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);

}

for (let i = 0; i < 10; i++) {
    console.log(i);

}

var contador = 0;

while (contador <= 10) {
    console.log(contador);
    contador++;

}

var i = 1;
do {
    console.log(i);
    i++;
} while (i < 10);