function calculadora(valor1, valor2, operador) {
    // if (valor1 <= 0) {
    //     console.log('Não e possivel fazer essa operação')
    // }
    // else if (valor2 <= 0) {
    //     console.log('Não e possivel fazer essa operação')
    // } else {
    //     let resultado = valor1 / valor2;
    //     console.log(resultado)
    //     return
    // }
    if (operador == "*") {
        console.log('Você escolheu a multiplicação e escolheu os numeros : ', valor1, valor2)
        let resultadoMutiplicao = valor1 * valor2
        console.log(resultadoMutiplicao)
    } else if (operador == '/') {
        if (valor1 <= 0) {
            console.log('Não e possivel fazer essa operação')
        }
        else if (valor2 <= 0) {
            console.log('Não e possivel fazer essa operação')
        } else {
            console.log('Você escolheu a divisão e escolheu os numeros :', valor1, valor2)
            let resultadoDivisao = valor1 / valor2
            console.log(resultadoDivisao)

        }
    } else if (operador == '-') {
        console.log('Você escolheu a subtração e escolheu os numeros :', valor1, valor2)
        let resultadoSubtracao = valor1 - valor2
        console.log(resultadoSubtracao)
    } else if (operador == '+') {
        console.log('Você escolheu o operador soma e escolheu os numeros: ', valor1, valor2)
        let resultadoSoma = valor1 + valor2
        console.log(resultadoSoma)
                  } else {
        console.log('A operação e invalida')
    }

}

calculadora(10, 0, "/")