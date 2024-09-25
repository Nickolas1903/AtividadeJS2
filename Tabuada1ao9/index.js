let num, multiplicador, resultado
multiplicador = 1

num = parseFloat(prompt("Escreva um número: "))

while(multiplicador <= 10){
    resultado = num * multiplicador
    console.log(resultado)
    multiplicador = multiplicador + 1

}