const nota1 = 10, nota2 = 6, nota3 = 7 ;
const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    console.log (`O aluno foi APROVADO com média ${media.toFixed(2)}`);
} else if ( media >= 5) {
    console.log (`O aluno foi está de EXAME com média ${media.toFixed(2)}`);
} else {
    console.log (`O aluno foi REPROVADO com média ${media.toFixed(2)}`); 
}