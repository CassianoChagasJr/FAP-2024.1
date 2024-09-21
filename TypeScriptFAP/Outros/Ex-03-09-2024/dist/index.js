// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
//Exercicio Programação Orientada a Objetos
class Titulo {
    constructor(nome) {
        this.nome = nome;
    }
    exibicao() {
        console.log(`O nome do livro é ${this.nome}.`);
    }
}
const Titulo1 = new Titulo("It, A Coisa");
Titulo1.exibicao();
class Genero extends Titulo {
    constructor(nome, tipo) {
        super(nome);
        this.tipo = tipo;
    }
    mostrar() {
        console.log(`${this.nome} é do genero ${this.tipo}.`);
    }
}
const Genero1 = new Genero("It, A Coisa", "Terror");
Genero1.mostrar();
class Autor extends Genero {
    constructor(nome, tipo, escritor) {
        super(nome, tipo);
        this.escritor = escritor;
    }
    exibir() {
        console.log(`${this.nome} é do genero ${this.tipo} e seu autor é ${this.escritor}.`);
    }
}
const Autor1 = new Autor("It, A Coisa", "Terror", "Stephen King");
Autor1.exibir();
const livros = [];
livros.push(new Autor("O Iluminado", "Terror", "Stephen King"));
for (let livro of livros) {
    livro.exibir();
}
