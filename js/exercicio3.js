function placar (timeA, timeB, gol1, gol2 ) {

    let mensagem;

    if (timeA > timeB) {
        mensagem = `Corinthians está ganhando ${gol1} x ${gol2}`;

    } else if (timeB > timeA){
        mensagem = `Internacional está ganhando ${gol2} x ${gol1}`;

    } else {
        mensagem = `empate de placar ${gol1} x ${gol2}`;
    }

return {

    mensagem: mensagem,
    gol1 :gol1,
    gol2 :gol2
}
}