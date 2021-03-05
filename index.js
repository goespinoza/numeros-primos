require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Numeros = require('./models/numeros');

const main = async () => {

  let opt = '';
  const numeros = new Numeros();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        const desc = await leerInput('Ingresa un Número:');
        const resultado = numeros.primos(desc);
        console.log('=========================='.green);
        console.log(resultado.reverse());
        console.log('=========================='.green);
        break;
    }
    await pausa();
  } while (opt !== '0');
}

main();