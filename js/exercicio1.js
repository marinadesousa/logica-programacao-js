let resultado;

function verificarTriangulo (ladoA, ladoB, ladoC) {

    let mensagemErro, tipoTriangulo;

    // teste do triângulo
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {

        // classificação

        if (ladoA === ladoB && ladoB === ladoC) {

            tipoTriangulo = 'Equilátero';

        } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {

            tipoTriangulo = 'Isósceles';

        } else {

            tipoTriangulo = 'Escaleno';

        }  // fim classificação

    } else {

        mensagemErro = 'A forma não é um triângulo';
    }
    // fim do teste do triângulo

    return tipoTriangulo ?? mensagemErro;
    // ?? -> operador de coalescência

}