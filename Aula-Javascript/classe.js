class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


    read() {
        return 'Estou lendo ' + this.title
    }
}

var livro = new Book("Harry potter", "esqueci", 300);
console.log(livro.read());

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology;
    }
}