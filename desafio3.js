function converteTemperatura() {
    const temperatura = parseFloat(window.prompt ('Digite a temperatura atual'));}
// processamento
if( !isNaN(temperatura)){
    const escalaAtual = window.prompt ('Faça a escolha da escala atual').toUpperCase();
    const conversao = window.prompt ('Digite a temperatura que será ser convertida').toUpperCase();

    if ((escalaAtual == "C" && conversao == "F")) {
        calculo = (temperatura * 9/5) + 32;
        window.alert(`Celsius para Fahrenheit: ${calculo} °F`);

    }else if ((escalaAtual == 'C' && conversao == 'K')) { 
    calculo = (temperatura - 273.15);
    window.alert(`Celsius para Kelvin: ${calculo} °K`);

    }else if ((escalaAtual == 'F' && conversao == 'C')) {
    calculo = (temperatura - 32) * 5/9;
    window.alert(`Fahrenheit para Celsius: ${calculo} °C`);

    }else if ((escalaAtual == 'F' && conversao == 'K')) {
    calculo = ((temperatura * 1) + 459.67) * 5/9;
    window.alert(`Fahrenheit para Kelvin: ${calculo} °K`);

    }else if ((escalaAtual == 'K' && conversao == 'C')) {
    calculo = (temperatura * 1) - 273.15;
    window.alert(`Kelvin para Celsius: ${calculo} °C`);

    }else if ((escalaAtual == 'K' && conversao == 'F')) {
    calculo = (temperatura * 1) * 9/5 - 459.67;
    window.alert(`Kelvin para Fahrenheit: ${calculo} °F`);

    }else  window.alert ('O número digitado para a conversão não é número válido');
}

