# logica-programacao-js
Treinando a lógica de programação com JavaScript

## operadores-aritmeticos.js

~~~js
const numero1 = 20;
const numero2 = 30;
~~~

A palavra `const` é utilizada para declaração de variáveis que não vão ser
reatribuídas ( não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtração dos números é ${numero1 - numero2}`);
console.log(`A multiplicação dos números é ${numero1 * numero2}`);
console.log(`A divisão dos números é ${numero1 / numero2}`);
console.log(`O resto da divisão dos números é ${numero1 % numero2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+` -> Soma;
* `-` -> Subtração;
* `*` -> Multiplicação;
* `/`-> Divisão;
* `%`-> Resto da divisão;

## operadores-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável será **

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição.

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Reatribuindo e somando o número por 10: ${numero += 10}`);
console.log(`Reatribuindo e subtraindo por 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando por 10: ${numero *= 10}`);
console.log(`Reatribuindo e divindindo por 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da duvisao por 10: ${numero %= 10}`);
console.log(`Incrementando o número em 1: ${++ numero}`);
console.log(`Decrementando o número em 1: ${-- numero}`);
console.log(`O número final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> atribuição com soma;
* `-=` -> atribuição com subtração;
* `*=` -> atribuição com multiplicação;
* `/=` -> atribuição com divisão;
* `%=` -> atribuição com resto da divisão;
* `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrimento). Ex: `numero ++` (pós-incremnto) ou 
`++ numero` (pré-incremento).
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decremento). Ex: `numero --` (pós-decremento) ou
`-- numero` (pré-decremento).

## operadores-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

Esta estrutura exibe no console se a condição ytestada é `true` (verdadeira) 
ou `false` (falsa). A condição armazena o resultado da **comparação entre duas variáveis**, como segue:

~~~js
const a = 'a', b = 'A';
const condicao = a == b ;
 ~~~

 ## Operadores de comparação:

* `==` -> é igual
* `!=` -> não é igual
* `>` -> maior que
* `<` -> menor que 
* `>=` -> maior OU igual
* `<=` -> menor OU igual
* `===` -> é estritamente igual ( valor E tipo)
* `!==` -> não é estritamente igual (valor OU tipo)


j