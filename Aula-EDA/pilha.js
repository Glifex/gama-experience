var elementos = [];
var topo = -1;
const MAX = 10;

function push(num) {
    if (topo < MAX) {
        topo = topo + 1;
        elementos[topo] = num;
    } else {
        console.log("Pilha está cheia!")
    }
}

function estaVazia() {
    return topo == -1;
}


function pop() {
    if (topo != -1) {
        let num = elementos[topo]
        topo = topo - 1;
        return (num)
    } else {
        console.log("A Pilha está vazia!")
    }
}

// ---- Parte do código que usa a pilha ---- //

push(10);
push(20);
push(30);

console.log(elementos);
console.log(estaVazia());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(estaVazia());
pop();
console.log(elementos);

var numDecinal = 10;
var resto;

console.log("Hora de empilhar...")
while (numDecinal != 0) {
    resto = parseInt(numDecinal % 2);
    push(resto);3
    console.log(resto);
    numDecinal = parseInt(numDecinal / 2);
}

console.log("Desempilhando tudo...")
while (!estaVazia()) {
    console.log(pop());

}

