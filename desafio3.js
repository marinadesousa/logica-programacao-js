const temperaturaAtual = window.prompt ('Digite a temperatura atual:');
const escalaAtual = window.prompt ('Faça a escolha da escala atual');
const conversao = window.prompt ('Digite a temperatura que será ser convertida');
let calculo

if (escalaAtual=== 'C' && conversao === 'F') {
    calculo = ( temperaturaAtual * 9/5) + 32
    window.alert (`Celsius para Fahrenheit: ${calculo}?F`)
}
