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


    const objCalculo = {
        n1: n1,
        n2: n2,
        op: op,
        resultado: resultado
    };

    //chamar a função cadastrarNaAPI(objIMC)
    const retorno = cadastrarNaAPI(objCalculo);

    if (retorno) {
        buscarCalculo(); //faz um get e coloca tudo no html (tabela)

    } else {
        alert("Não foi possivel cadastrar");
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);
    document.getElementById('resultado').innerHTML = resultado;


    document.getElementById('cadastro').innerHTML = `
    <article>
        <span><strong>Primeiro Número:</strong> ${n1}</span>
        <span><strong>Segundo Número:</strong> ${n2}</span>
        <span><strong>Operação:</strong> ${op}</span>
        <span><strong>Resultado:</strong> ${resultado}</span>
    </article>
`;
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



async function cadastrarNaAPI(objetoCacular) {

    try {
        console.log(objetoCacular);

        const resposta = await fetch("http://localhost:3000/calculo", {

            method: "POST",
            body: JSON.stringify(objetoCacular),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });
        return true;


    } catch (error) {
        console.log(error);
        return false;
    }
}


async function buscarCalculo() {
    try {
        const retorno = await fetch("http://localhost:3000/calculo")
        const dadosRetornados = await retorno.json();


        await console.log(dadosRetornados);


        const tabela = document.getElementById("cadastro");
        let template = "";

        for (let i = 0; i < dadosRetornados.length; i++) {

            template +=
                `<article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${dadosRetornados[i].n1}</span>
            <span><strong>Segundo Número:</strong> ${dadosRetornados[i].n2}</span>
            <span><strong>Operação:</strong> ${dadosRetornados[i].op}</span>
            <span><strong>Resultado:</strong> ${dadosRetornados[i].resultado}</span>
        </article>`;
        }

        tabela.innerHTML = template;

    } catch (error) {
        console.log(error);
    }
}