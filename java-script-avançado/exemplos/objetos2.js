const filmes = [{
        titulo: "harry potter",
        id: 1,
        descricao: "filme de fantasia.",
        duracao: 120
    },
    {
        titulo: "harry potter 2",
        id: 2,
        descricao: "filme de fantasia e magia.",
        duracao: 100
    },
    {
        titulo: "harry potter 3",
        id: 3,
        descricao: "filme de fantasia e monstros.",
        duracao: 140
    },
]

const [{
    titulo,
    id,
    descricao,
    duracao
}] = filmes

filmes.map(filme => console.log(filme.descricao))
filmes.map(filme => console.log(filme.titulo))