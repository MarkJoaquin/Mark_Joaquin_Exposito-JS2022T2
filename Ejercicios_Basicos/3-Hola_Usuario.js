var prompt = require('prompt');


prompt.start();


prompt.get(['username'], function (err, result) {


  console.log('\nDatos digitados por el usuario:');
  console.log('  Nombre: ' + result.username);
});