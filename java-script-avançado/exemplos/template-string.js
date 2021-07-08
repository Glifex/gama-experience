function calcularIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade"
}


//arrow function

const soma = (a, b) => console.log(a + b)
soma(5, 6)

const hello = (name) => console.log("Hello " + name)
hello('Iury')