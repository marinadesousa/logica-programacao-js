// declaração sem atribuição (só com let)
function calculaIMC(peso, altura) {

     const imc = peso / altura **2;
     let mensagem;

    // teste de mesa
    // imc = 19.1 ;

    if (imc <= 18.5) {
        mensagem = `IMC: ${imc.toFixed(1)} --> Abaixo do peso`;        
    } else if (imc < 25) {
        win`IMC: ${imc.toFixed(1)} --> Peso normal`;
    } else if (imc < 30) {
        mensagem = `IMC: ${imc.toFixed(1)} --> Sobrepeso`;
    } else if (imc < 35) {
        mensagem = `IMC: ${imc.toFixed(1)} --> Obesidade grau I`;
    } else if (imc < 40 )  {
        mensagem = `IMC: ${imc.toFixed(1)} --> Obesidade grau II`;
    } else {
        mensagem = `IMC: ${imc} -- Obesidade grau III`;
    }

    return mensagem;
}