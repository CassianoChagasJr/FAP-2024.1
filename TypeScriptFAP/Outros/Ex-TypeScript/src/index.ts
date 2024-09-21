// //Exercicios em TypeScript
// //Exercicio 1: Número ímpar ou par

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// const numero: number = Number(prompt('Informe um número: '));

// console.log(ePar(numero))

// function ePar (numero: number): string {
//     let mensagem: string;
//     if(numero % 2 === 0) {
//         mensagem = "É par";
//     }else {
//         mensagem = "É ímpar";
//     }
//     return mensagem;
// }

//Exercicio 2: Calculadora Simples

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let n1: number = Number(prompt('Informe um número: ')), n2: number = Number(prompt('Informe outro número: '));
// let operacao: number = Number(prompt('Selecione a operação desejada: \n - Soma \n - Subtração \n - Multiplicação \n - Divisão\n'));
// let resultado: number;

// switch(operacao){
//     case 1:
//         resultado = n1 + n2;
//         console.log(`O resultado da operação é ${resultado}`);
//         break;
//     case 2:
//         resultado = n1-n2;
//         console.log(`O resultado da operação é ${resultado}`);
//         break;
//     case 3:
//         resultado = n1 * n2;
//         console.log(`O resultado da operação é ${resultado}`);
//         break;
//     case 4:
//         resultado = n1 / n2;
//         console.log(`O resultado da operação é ${resultado}`);
//         break;

//     default:
//         console.log('Escolha uma opção válida!');
//         break;
// }

//Exercicio 3: Nota dos alunos
// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// let n1: number = Number(prompt('Informe a primeira nota: '));
// let n2: number = Number(prompt('Informe a segunda nota: '));
// let media: number = n1 + n2 / 2


// if(media >= 6){
//      console.log('O aluno está aprovado');
// }else{
//          console.log('O aluno está reprovado');
// }

// console.log(media());
// function media (n1, n2: number) String {
//     let mensagem: string;

//     if(n1+n2/2 >6){
//         mensagem = "O aluno foi aprovado";
//     }else{
//         mensagem = "O aluno foi reprovado";
//     }

//     return mensagem;
// }