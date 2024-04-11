function  calculadesconto (valorTotal, Cliente ){
    
    if (Cliente === 'Comum') {
        return valorTotal;

    } else if (Cliente === 'Funcionario') {
        return valorTotal - (valorTotal * 0.1);

    } else {
        return valorTotal - (valorTotal * 0.05);

    }
  
}