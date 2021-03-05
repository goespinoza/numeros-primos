class Numeros {

  constructor() { }

  primos(numero) {
    let j = 2;
    const numerosPrimos = [];

    for (; j < numero; j++) {
      if (this.primo(j)) {
        numerosPrimos.push(j);
      }
    }
    return numerosPrimos;
  }

  primo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
}

module.exports = Numeros;
