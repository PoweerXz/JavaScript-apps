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
        let resultadoMultiplicacao = valor1 * valor2
        
        console.log(resultadoMultiplicacao)
    
    } else if (operador == operadores.divisao) {
    
        if (valor1 <= 0) {
            console.log(mensagens.erro)
    
        } else if (valor2 <= 0) {
            console.log(mensagens.erro)
        } else {
            console.log(mensagens.divisao, valor1, valor2)
            
            let resultadoDivisao = valor1 / valor2
            console.log(resultadoDivisao)
        }
    } else if (operador == operadores.subtracao) {
        console.log(mensagens.subtracao, valor1, valor2)
        
        let resultadoSubtracao = valor1 - valor2
        
        console.log(resultadoSubtracao)
    } else if (operador == operadores.soma) {
        console.log(mensagens.soma, valor1, valor2)
     
        let resultadoSoma = valor1 + valor2
     
        console.log(resultadoSoma)
    } else {
        console.log(mensagens.erro)
    }

}

calculadora(30, 10, "+")