//Exercicio 1: Cotação da moeda

/*let valorConvertido;
let cotacaoAtual = Number(prompt('Informe a cotação do dólar:'));
let dinheiro = Number(prompt('informe o valor que você tem:'));
let opcao = Number(prompt('Informe o tipo da conversão: \n1 - REAL -> DOLAR \n2 - DOLAR -> REAL'));


if(opcao == 2){
    valorConvertido = cotacaoAtual * dinheiro;
}else{
    valorConvertido = dinheiro / cotacaoAtual;
}
alert(valorConvertido)*/

//Exercicio 2: Número par ou impar

/*let n = parseInt(prompt('Informe um número:'));

if(n % 2 == 0){
    alert('O número é par');
}else{
    alert('O número é ímpar');
}*/

//Exercicio 3: Maior número

/*let numero1 = Number(prompt('Informe um número:'));
let numero2 = Number(prompt('Informe outro número:'));

if(numero1>numero2){
    alert(`O número ${numero1} é o maior`);
}else{
    alert(`O número ${numero2} é o maior`);
}*/

//exercicio 4: Nota dos alunos

/*let n1 = Number(prompt('Informe a primeira nota:'))
let n2 = Number(prompt('Informe a segunda nota:'))
let media = n1 + n2 / 2

if(media >= 6){
    alert('O aluno está aprovado');
}else{
    alert('O aluno está reprovado');
}*/

/*Exercicio 5: ingresso cinema

let ingressos = Number(prompt('Qual ingresso você deseja: \n1 Vip \n2 Standard'));
let combos = Number(prompt('Você deseja o combo da pipoca com refrigerante: \n1 Sim \n2 Não'));

if(ingressos == 1){
    if(combos == 1){
        alert('O valor do ingresso com o combo é 110 reais');
    }else{
        alert('O valor do combo é 80 reais');
    }
}else if(ingressos == 2){
    if(combos == 1){
        alert('O valor do ingresso com o combo é 70 reais');
    }else{
        alert('O valor do ingresso sem o combo é 40 reais');
    }
}else{
    alert('Opção inválida!')
}*/

//Exercicio 6: Menu interativo

/*let int1 = Number(prompt('Olá, bem vindo ao nosso chat, como posso ajudar? \n1 - Filmes \n2 - Séries \n3 - Livros \n4 - NÃO CLIQUE NESSA OPÇÃO SE FOR CONTRA PIRATARIA!'));

switch(int1){    
    case 1:
        alert('As recomendações de filmes que temos hoje são: \n - Bastardos inglórios \n - Clube da luta \n - The Batman ');
        alert('- O filme Bastardos Inglórios está disponivél na Amazon Prime \n - O filme Clube da luta se encontra dispónivel na Netflix \n - O filme The Batman se encontra dispónivel na Max');
        alert('Espero ter ajudado, obrigado e volte sempre!');
        break;
    case 2:
        alert('As recomendações de séries que temos hoje são: \n - Game of thrones \n - The boys \n -  Penny dreadful');
        alert('A série Game of Thrones está dispónivel na Max \nA série The Boys se encontra dispónivel na Amazon prime \nA série Penny dreadful se encontra dispónivel na Paramount +')
        alert('Espero ter ajudado, Obrigado e volte sempre!');
        break;
    case 3:
        alert('Os livros que recomendamos hoje são: \n Os magos de Lev Grossman \n A revolução dos bichos de George Orwell \n Assim falou Zaratrusta de Friedrich Nietzsche');
        alert('Todos os livros mostrados anteriormente podem ser comprados no aplicativo e site de compras Amazon');
        alert('Espero ter ajudado, obrigado e volte sempre!');
        break;
    case 4:
        alert('Caso não tenha dinheiro para assinar todas as plataformas de Streaming que informamos, é possível assistir a todos os filmes e séries baixando os arquivos pelo torrent e livors por sites de terceiros, grupos em redes sociais. Claro que se não souber fazer você pode estar sujeito a vírus que podem danificar seu aparelho celular ou computador');
        break;
    default:
        alert('Pedimos que escolha uma opção válida, o contato será encerrado agora. Esperamos ter ajudado de alguma forma, obrigado e volte sempre');
        break;
}*/

//Exercicio 7: Hora extra trabalhada

/*let horasTrabalhadas = Number(prompt('Informe as suas horas trabalhadas esse mês:'));
let salarioHora = Number(prompt('Informe quanto você recebe por hora trabalhada:'));
let horaRegular = 160;

if(horasTrabalhadas <= horaRegular){
    let salarioBase = horasTrabalhadas * horaRegular
    alert(`Você deve receber: ${salarioBase.toFixed(2)}!`)
}else {
   let salarioBase = horaRegular * salarioHora
   let horaExtra = horasTrabalhadas - horaRegular
   let valorExtra = salarioHora * 1.5
   let salarioExtra = horaExtra * valorExtra + salarioBase
   
   alert(`Você deve receber: ${salarioExtra.toFixed(2)}!`);
}*/

//Exercicio 8: Calculadora Simples

/*let n1 = Number(prompt('Informe um número:')), n2 = Number(prompt('Informe outro número'));
let operacao = Number(prompt('Selecione a operação desejada: \n - Soma \n - Subtração \n - Multiplicação \n - Divisão'));
let resultado;

switch(operacao){
    case 1:
        resultado = n1 + n2;
        alert(`O resultado da operação é ${resultado}`);
        break;
    case 2:
        resultado = n1-n2;
        alert(`O resultado da operação é ${resultado}`);
        break;
    case 3:
        resultado = n1 * n2;
        alert(`O resultado da operação é ${resultado}`);
        break;
    case 4:
        resultado = n1 / n2;
        alert(`O resultado da operação é ${resultado}`);
        break;

    default:
        alert('Escolha uma opção válida!');
        break;
}*/

