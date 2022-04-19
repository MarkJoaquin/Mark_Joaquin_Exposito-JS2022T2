var prompt = require('prompt');

prompt.start();



prompt.get(['num1', 'num2'], function (err, result) {
   
    
    result.num1 = parseInt(result.num1);
    result.num2 = parseInt(result.num2);


    console.log('\nNumeros digitados por usuario:');
    console.log(`1er Numero: ${result.num1} \n2do Numero ${result.num2}\nSuma de ambos numeros: ${result.num1 + result.num2} `);

});