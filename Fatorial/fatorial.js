let num = parseFloat(prompt("Digite um número: "))
let fatorial = 1, multiplicador = 1

while( multiplicador <= num){
    fatorial = fatorial * multiplicador
    multiplicador++
}

alert(fatorial)