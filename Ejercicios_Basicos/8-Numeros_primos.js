var prompt = require('prompt');

prompt.start();

prompt.get(['num'], function (err, result) {

    result.num = parseInt(result.num);
    
    if(result.num % 2 != 0){
        console.log(`El numero digitado (${result.num}) es primo.`);
    }
    else{
        console.log(`El numero digitado(${result.num}) es divisible entre 2, por ende no es un numero primo.`)
    }

    console.log('\nNumero digitado por usuario:');
    console.log(`1er numero: ${result.num}`);
});