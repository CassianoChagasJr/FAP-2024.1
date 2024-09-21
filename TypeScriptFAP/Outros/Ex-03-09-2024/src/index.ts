// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

//Exercicio Programação Orientada a Objetos

class Titulo {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    exibicao(): void {
        console.log(`O nome do livro é ${this.nome}.`);
    }
}

const Titulo1 = new Titulo("It, A Coisa");
Titulo1.exibicao();

class Genero extends Titulo {
    tipo: string;

    constructor(nome: string, tipo: string){
        super(nome);
        this.tipo = tipo;
    }

    mostrar(): void {
        console.log(`${this.nome} é do genero ${this.tipo}.`);
    }
}

const Genero1 = new Genero("It, A Coisa", "Terror");
Genero1.mostrar();

class Autor extends Genero {
    escritor: string ;

    constructor(nome: string, tipo: string, escritor: string){
        super(nome, tipo);
        this.escritor = escritor;
    }

    exibir (): void {
        console.log(`${this.nome} é do genero ${this.tipo} e seu autor é ${this.escritor}.`);
    }
}

const Autor1 = new Autor ("It, A Coisa", "Terror", "Stephen King");
Autor1.exibir();



const livros: Autor [] = [];
livros.push(new Autor("O Iluminado", "Terror", "Stephen King"));

for(let livro of livros) {
    livro.exibir();
}