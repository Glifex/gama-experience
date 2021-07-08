const pessoa = {
    nome: "Iury",
    idade: 25,
    sexo: "Masculino",
    cidade: "Patos"
}

// notaçao de ponto

console.log(pessoa.nome)

// notação de colchetes

console.log(pessoa['idade'])

// como desestruturar objetos

const {
    nome,
    idade,
    cidade,
    sexo
} = pessoa

console.log(idade)