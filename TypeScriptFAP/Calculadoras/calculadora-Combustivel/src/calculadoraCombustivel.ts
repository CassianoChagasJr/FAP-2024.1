const botao = document.getElementById('btn') as HTMLButtonElement;

botao.addEventListener("click", () => {
    const entradaAcool =(
        (document.getElementById("alcool") as HTMLInputElement));
    const entradaGasolina = (
        (document.getElementById("gasolina") as HTMLInputElement))


    const alcool: number = parseFloat(entradaAcool.value)
    const gasolina: number = parseFloat(entradaGasolina.value)

    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <=0) {
        alert("Insira valores validos. Ex: Preço da Gasolina e preço do Álcool");
        return;
    }

    let resultado: string;
    const razao: number = alcool / gasolina;

    if(razao <= 0.7){
        resultado = "Abasteça com alcool";
    }else{
        resultado = "Abasteça com gasolina";
    }

    const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
    resultadoDiv.textContent = resultado;
});