function multiplicacao(valor1, valor2) {
    let resultado = valor1 * valor2;
    return resultado
}

function divisao(valor1, valor2) {
    let resultado = valor1 / valor2;
    return resultado
}

function subtracao(valor1, valor2) {
    let resultado = valor1 - valor2;
    return resultado
}    

function soma(valor1, valor2) {
    let resultado = valor1 + valor2; 
    return resultado 
}

function calculadora(valor1, valor2, operador) {
    let operadores = {
        multiplicao: '*',
        divisao: '/',
        subtracao: '-',
        soma: '+',
    };

    let mensagens = {
        multiplicacao: 'Você escolheu a multiplicação e escolheu os numeros: ',
        divisao: 'Você escolheu a divisão e escolheu os numeros : ',
        subtracao: 'Você escolheu a subtração e escolheu os numeros :',
        soma: 'Você escolheu a soma e escolheu os numeros : ',
        erro: 'Operação e invalida',

    }

    if (operador == operadores.multiplicao) {

        console.log(mensagens.multiplicacao, valor1, valor2)
        let resultadoadoMultiplicacao = multiplicacao(valor1, valor2);
        
        console.log(resultadoadoMultiplicacao)
    
    } else if (operador == operadores.divisao) {
       console.log(mensagens.divisao, valor1, valor2)
       let resultadoadoDivisao = divisao(valor1, valor2);
       console.log(resultadoadoDivisao)


    } else if (operador == operadores.subtracao) {
        console.log(mensagens.subtracao, valor1, valor2)
        let resultadoadoSubtracao = subtracao(valor1, valor2);
        console.log(resultadoadoSubtracao)
    
    } else if (operador == operadores.soma) {
        console.log(mensagens.soma, valor1, valor2)
        let resultadoadoSoma = soma(valor1, valor2);
        console.log(resultadoadoSoma)
    } else {
        console.log(mensagens.erro)
    }

}

calculadora(30, 10, "+")