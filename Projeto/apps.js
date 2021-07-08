const livros = require('./database')

//pegar um input 

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ')

//se for sim, mostrar categorias disponiveis, pergunte qual categoria ela escolhe
//se não, mostra todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() == "S") {
    console.log('Essas são as categorias disponíveis: ')
    console.log("História brasileira", "/Tecnologia", "/Drama", 
    "/História LGBTQIA+", "/Drama LGBTQIA+", "/Produtividade e estilo de vida")

    const escolheCategoria = readline.question("Qual categoria voce escolhe: ")

    const retorno = livros.filter(livro => livro.categoria === escolheCategoria)

    console.table(retorno)
}else{
    livros.sort((a,b)  => a.paginas - b.paginas)
    console.log("Essas são todas os livros disponiveis")
    console.table(livros)
}