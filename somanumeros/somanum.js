let resultado, resultadoFinal = 0

resultado = parseFloat(prompt("Digite um número: "))

for (let num = 1; num <= 20; num++) {
    console.log(resultado)
    resultado = resultado + resultado + 1
    resultadoFinal = resultadoFinal + resultado
}

console.log("A soma de todos os número e iqual a: " + resultadoFinal)