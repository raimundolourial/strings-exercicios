const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const novaFrase = frase.replace("verde", "rosa").replace("azul","laranja").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(`${frase}

${novaFrase}`)