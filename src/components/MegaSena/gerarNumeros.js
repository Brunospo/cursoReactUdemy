function gerarNumeros(qtdNumeros) {
  const result = []

  while (result.length < qtdNumeros) {
    //Math.random() * (max - min + 1) + min)
    const numero = parseInt(Math.random() * 60) + 1

    if(!result.includes(numero)){
      result.push(numero)
    }
  }

  return result.sort((a,b) => a-b)
}

export {gerarNumeros}