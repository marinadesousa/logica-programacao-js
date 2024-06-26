 // JSON -> JavaScript Object Notation

document.querySelector('#btCalcular').addEventListener('click', function () {

    const codigoProduto = Number(document.querySelector('#codigoProduto').value);
    const qtdeProduto = Number(document.querySelector('#qtdeProduto').value);
    const produto = calculaDesconto(codigoProduto, qtdeProduto);

    const pDescricao =  document.createElement('p');
    pDescricao.innerHTML = produto.descricao;
    pDescricao.setAttribute('data-produto', produto.codigo)

    const pvalorFinal = document.createElement('p') ;
    pvalorFinal.innerHTML = produto.valorFinal.toFixed(2);
    console.log(pvalorFinal)
    pvalorFinal.classList.add('monetario');

    document.querySelector('#resultado').append(pDescricao, pvalorFinal);

});

    document.querySelector('#btlimpar').addEventListener('click', function() {
    document.querySelector('#resultado').innerHTML = '';

});


const produtos = [

    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado",
    },

    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers",
    },

    {
        codigo: 3,
        preco: 0.5,
        descricao: "Quebra-queixo",
    }

];

    function calculaDesconto(codigoProduto, qtdeProduto) {

    let preco;
    let descricao;
    let desconto;
    let valorFinal;

    for(let i = 0; i < produtos.length; i++) {

        if(produtos[i].codigo === codigoProduto) {

            preco = produtos[i].preco; 
            descricao = produtos[i].descricao;
        }
    }

        if (qtdeProduto >= 3 && qtdeProduto <= 5) {

            desconto = 0.02;

        } else if (qtdeProduto >= 6 && qtdeProduto <= 10) {

            desconto = 0.03

        } else if (qtdeProduto > 10){

            desconto = 0.05;

        } else {

            desconto = 0;

    }

        valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

        return {
            codigo: codigoProduto,
            preco: preco,
            descricao: descricao,
            valorFinal: valorFinal,
        }
}

// TODO Obter os dados de produto a partir de um ARQUIVO JSON
// TODO Refatorar a função calculaDesconto()