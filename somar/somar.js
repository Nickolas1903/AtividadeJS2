let num, resultado = 0

do {
    num = parseFloat(prompt("Digite um número: \nCaso queira parar digite 0"))

    resultado = resultado + num
    
} while (num != 0)

alert(resultado)