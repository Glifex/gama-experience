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

// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos

// var media = (3 + 4 + 7 + 5 + 8) / 5
// console.log(media)

//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for 
//zero deverá imprimir no console o valor e dizer que ele é par.

function par(a, b) {
    if (a / b % 2 == 0) {
        console.log("Par")
    }
}

// a) números de 1 a 100  
// b) quando chegar no número 50 interrompa a instrução e pare o loop 
// c) quando chegar no número 50 pule a instrução |

// for (let i = 1; i <= 100; i++) {
//     if (i == 50) {
//         console.log(i)
//     } else {
//         console.log(i)
//     }
// }

// Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

function soma(a, b) {
    return console.log("Resultado da soma é: " + (a + b))
}

function divisao(a, b) {
    return console.log("Resultado da soma é: " + (a / b))
}

function subtracao(a, b) {
    return console.log("Resultado da soma é: " + (a - b))
}

function multiplicacao(a, b) {
    return console.log("Resultado da soma é: " + (a * b))
}

// Solicite o preço de uma mercadoria e o percentual 
//de desconto. Exiba no console o valor do desconto e o preço a pagar.

function mercadoria(preco, desconto) {
    desconto = (preco * desconto) / 100
    console.log("Valor do desconto: " + desconto)
    console.log("Valor do preço a pagar: " + (preco - desconto))
}

