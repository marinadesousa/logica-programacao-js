function  calculadesconto (valorTotal, Cliente ){
    let desconto = 0;
    let niveldeDesconto = ""
    

    if (Cliente === 1) {
        desconto = 0;
        niveldeDesconto = "Cliente comum";

    } else if (Cliente === 2) {
        desconto = valorTotal * 10/100; //10%
        niveldeDesconto = "Funcionário";

    } else if (Cliente === 3) {
        desconto = valorTotal * 5/100; //5%
        niveldeDesconto = "Cliente Vip"

    }else {
        console.log ("Código do cliente é inválido.");

        return;
    }
    let valorFinal = valorTotal - desconto;
  
}