function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Preencha todos os dados!");
        return false
    }

    //processamento
    if (op == 'soma') {
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if (op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao') {
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao') {

        if (n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }

    } else {
        resultado = "Operação Inválida";
    }


    console.log(n1);
    console.log(n2);
    console.log(op);
    console.log(resultado);


    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;


    document.getElementById('cadastro').innerHTML =
        `<tr>
        <span><strong>Primeiro Número:</strong> ${n1}</span>
            <span><strong>Segundo Número:</strong> ${n2}</span>
            <span><strong>Operação:</strong> ${op}</span>
            <span><strong>Resultado:</strong> ${resultado}</span>
        </tr>`;
}

/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if (valor2 == 0) {
        return 'Não é um número';
    }

    return valor1 / valor2;
}


