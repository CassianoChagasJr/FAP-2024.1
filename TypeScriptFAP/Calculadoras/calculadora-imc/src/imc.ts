 interface ImcData {
    peso: number;
    altura: number;
 };

 function calcularImc(imc: number): string{
    const resultado = document.querySelector(".resultado") as HTMLDivElement;
    if(!resultado) {
        throw new Error("Elemento 'rsultado' não encontrado no HTML.");
     }

     let interpretacao: string;
     if (imc < 18.5) interpretacao = "Abaixo do peso";
     else if (imc < 25) interpretacao = "Peso normal";
     else if (imc < 30) interpretacao = "Sobrepeso";
     else if (imc < 35) interpretacao = "Obesidade Grau I";
     else if (imc < 40) interpretacao = "Obesidade Grau II";
     else interpretacao = "Obesidade Grau III";

     resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - ${interpretacao}`;
     return interpretacao;
 }

    const pesoInput = document.getElementById('peso') as HTMLInputElement;
    const alturaInput = document.getElementById('altura') as HTMLInputElement;
    const calcularbtn = document.querySelector('.calculoIMC') as HTMLButtonElement;

 calcularbtn.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        alert ('Prencha os campos com valores corretos. Ex: seu peso e altura');
        return
    }

    try {
        const imc = peso / (altura * altura);
        calcularImc(imc);
    } catch (error) {
        alert ('ERRO');
    }
 })