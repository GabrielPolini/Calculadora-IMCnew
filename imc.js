const calcular = document.getElementById('calcular');

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Verificar se todos os campos foram preenchidos
    if (nome !== '' && altura !== '' && peso !== '') {
        // Calcular o IMC
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        
        // Obtendo a idade
        let idade = 0;
        const idadeAnos = prompt("Informe a idade:");
        if (idadeAnos !== null && idadeAnos !== '') {
            idade = parseInt(idadeAnos);
        }

        // Classificação baseada na idade
        let classificacao = '';
        if (idade >= 2 && idade <= 5) {
            classificacao = 'É uma criança de 2 a 5 anos';
        } else if (idade >= 6 && idade <= 12) {
            classificacao = 'É uma criança de 6 a 12 anos';
        } else {
            // Para faixas etárias diferentes, a classificação padrão de IMC é utilizada
            if (valorIMC < 18.5) {
                classificacao = 'Abaixo do peso!';
            } else if (valorIMC < 25) {
                classificacao = 'com peso ideal. Parabéns!';
            } else if (valorIMC < 30) {
                classificacao = 'levemente acima do peso';
            } else if (valorIMC < 35) {
                classificacao = 'obesidade grau I';
            } else if (valorIMC < 40) {
                classificacao = 'obesidade grau II';
            } else {
                classificacao = "com obesidade grau III. CUIDADO!!!";
            }
        }

        // Exibir resultado
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', calcularIMC);
