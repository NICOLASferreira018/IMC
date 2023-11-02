
document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("peso");
    const imcResult = document.getElementById("imc");
    const classificacaoResult = document.getElementById("classificacao");

    calcularButton.addEventListener("click", function () {
        const altura = parseFloat(alturaInput.value);
        const peso = parseFloat(pesoInput.value);

        if (altura > 0 && peso > 0) {
            const imc = peso / (altura * altura);
            imcResult.textContent = imc.toFixed(2);

            if (imc < 18.5) {
                classificacaoResult.textContent = "Abaixo do Peso";
            } else if (imc >= 18.5 && imc < 24.9) {
                classificacaoResult.textContent = "Peso Normal";
            } else if (imc >= 25 && imc < 29.9) {
                classificacaoResult.textContent = "Sobrepeso";
            } else if (imc >= 30 && imc < 34.9) {
                classificacaoResult.textContent = "Obesidade Grau I";
            } else if (imc >= 35 && imc < 39.9) {
                classificacaoResult.textContent = "Obesidade Grau II";
            } else {
                classificacaoResult.textContent = "Obesidade Grau III";
            }
        } else {
            imcResult.textContent = "N/A";
            classificacaoResult.textContent = "Preencha os campos corretamente.";
        }
    });
});
