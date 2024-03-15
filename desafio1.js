// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , 
//em que temos que obter a nota de 3 alunos, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. 
//Não é necessário ler as notas, voce pode defini-las com variáveis.//
// Voce precisará utilizar uma estrutura de decisão composta, como a seguir:

const nota1 = 6.4 , nota2 = 6.4 , nota3 = 6.4;
const condicao = (nota1 + nota2 + nota3) /3;

if (condicao >= 7) {
    console.log ('Aprovado');
} 
if (condicao <= 5) {
    console.log ('Reprovado');
} else {
    console.log ('Exame');
}


