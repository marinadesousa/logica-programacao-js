let resultado;

function verificarTriangulo (ladoA, LadoB, LadoC) {
    if (ladoA === LadoB && LadoB === LadoC) {
        return "Equilátero";

    } else if (ladoA === LadoB || ladoA === LadoC || LadoB === LadoC) {
        return "Isósceles";

    } else if (ladoA != LadoB && ladoA != LadoC && LadoB && LadoC) {
        return "Escaleno";

    } else {
       erro = "Essas medidas não são validas";

    }
    
}