//exemplo 1 Imprima na tela os números pares existentes entre 0 e 100 //

// var num = 0;

for (let i = 2; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i % 2 == 0)
    }

}

// exemplo 2 Crie um algoritmo que receba três 
// notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|


function notas(nota1, nota2, nota3) {
    media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        console.log("Aprovado")
    }
    if (media >= 5 && media < 7) {
        console.log("Recuperação")
    }
    if (media < 5) {
        console.log("Reprovado")
    }
}


// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parImpar(num) {
    if (num % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
}

// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números 
// forem iguais, mostre uma mensagem no console "Os números são iguais".

function doisNumeros(a, b) {
    if (a > b) {
        console.log(a)
    } else if (a < b) {
        console.log(b)
    } else if (a = b) {
        console.log("Os números são iguais")
    }
}

// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(dia) {
    if (dia == 1) {
        console.log("Domingo")
    }
    if (dia == 2) {
        console.log("Segunda")
    }
    if (dia == 3) {
        console.log("Terça")
    }
    if (dia == 4) {
        console.log("Quarta")
    }
    if (dia == 5) {
        console.log("Quinta")
    }
    if (dia == 6) {
        console.log("Sexta")
    }
    if (dia == 7) {
        console.log("Sábado")
    }

}

// Crie um algoritmo que leia o valor de um jantar, calcule e 
//informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function contaJantar(valor) {
    var taxaGarcom = (valor * 10) / 100
    var valorTotal = valor + taxaGarcom
    console.log("Valor total " + valorTotal)
    console.log("Taxa do garçom: " + taxaGarcom)
}

contaJantar(50.50)