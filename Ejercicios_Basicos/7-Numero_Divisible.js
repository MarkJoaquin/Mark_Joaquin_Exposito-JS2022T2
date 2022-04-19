var prompt = require('prompt');

prompt.start();

prompt.get(['num'], function (err, result) {

    result.num = parseInt(result.num);

    if(result.num % 2 == 0){
        console.log("El numero digitado es divisible entre 2");
    }

    else{
        console.log("El numero digitado no es divisible entre 2");
    }
    
    console.log('\nNumero digitado por usuario:');
    console.log(`1er numero: ${result.num}`);

});