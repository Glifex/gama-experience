const alunosGama = ["Iury", "Jose", "Igor", "Ana", "Joao"]

// acessar informação em um array
console.log(alunosGama[3])

// operador spread (...)

const alunosXp = [...alunosGama, "Severino"]

console.log(alunosXp)

// metodos de iteração

for (let i = 0; i < alunosXp.length; i++) {
    console.log(alunosXp[i])

}

// Map
alunosXp.map(aluno => console.log(aluno))

// filter
const numeros = [13, 99, 22, 34, 45, 56, 67, 78]
const pares = numeros.filter(num => num % 2 == 0)
const impares = numeros.filter(num => num % 2 != 0)
console.log(impares)
console.log(pares)

const ordemDecrescente = numeros.sort((a, b) => b - a)
console.log(ordemDecrescente)

const ordemCrescente = numeros.sort((a, b) => a - b)
console.log(ordemCrescente)

// reduce - reduz o array a um resultado de uma operação matematica

const numbers = [1, 34, 35]
const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual
})

console.log(soma)