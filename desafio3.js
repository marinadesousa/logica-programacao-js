function converteTemperatura(valorTemperatura, escalaAtual, Conversao) {
    
    let temperaturaConvertida;
    if( !isNaN(valorTemperatura)) {
        escalaAtual = escalaAtual.toUpperCase();
        Conversao = Conversao.toUpperCase();

    if ((escalaAtual == "C" && Conversao == "F")) {
       calculo = ( valorTemperatura  * 9/5) + 32;
       temperaturaConvertida = `Celsius para Fahrenheit: ${calculo} °F`;

    }else if ((escalaAtual == 'C' && Conversao == 'K')) { 
        calculo = ( valorTemperatura - 273.15);
        temperaturaConvertida = `Celsius para Kelvin: ${calculo} °K`;

    }else if ((escalaAtual == 'F' && Conversao == 'C')) {
        calculo = ( valorTemperatura - 32) * 5/9;
        temperaturaConvertida = `Fahrenheit para Celsius: ${calculo} °C`;

    }else if ((escalaAtual == 'F' && Conversao == 'K')) {
        calculo = ((valorTemperatura * 1) + 459.67) * 5/9;
        temperaturaConvertida = `Fahrenheit para Kelvin: ${calculo} °K`;

    }else if ((escalaAtual == 'K' && Conversao == 'C')) {
        calculo = ( valorTemperatura * 1) - 273.15;
        temperaturaConvertida = `Kelvin para Celsius: ${calculo} °C`;

    }else if ((escalaAtual == 'K' && Conversao == 'F')) {
        calculo = ( valorTemperatura * 1) * 9/5 - 459.67;
        temperaturaConvertida = `Kelvin para Fahrenheit: ${calculo} °F`;
    }
    
}
return temperaturaConvertida;
}
