let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log('A quantidade de caracteres antes do trim é:' + minhaString.length)
let novaString = minhaString.trim()
console.log('A quantidade de caracteres depois do trim é:' + novaString.length)

console.log(minhaString)

novaString = minhaString.replace("________", "sticioso")

console.log(novaString)