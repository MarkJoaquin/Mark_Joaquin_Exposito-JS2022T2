var prompt = require('prompt');

prompt.start();


prompt.get(['num1', 'num2'], function (err, result) {

    result.num1 = parseInt(result.num1)
    result.num2 = parseInt(result.num2)

    console.log('\n Resultado: ')
    if (result.num1 == result.num2) {
        console.log("Ambos numeros son iguales");
    }
    else if (result.num1 > result.num2) {
        console.log(`${result.num1} es mayor que ${result.num2}`)
    }
    else{
        console.log(`${result.num2} es mayor que ${result.num1}`)
    }


    console.log('\nNumeros digitados por usuario:');
    console.log(`1er numero: ${result.num1} \n2do numero ${result.num2}`);
});