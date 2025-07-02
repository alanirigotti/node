let variavelString = 'Alani'
let nome
let numero = 10
let numeroDecimal = 0.25
let boleana = true 
let indefinido = undefined // posso alterar o tipo durante a execução
let nulo = null 
let tipoArray = []
let tipoObjeto = {}

// substituido pelo var, pois ele tinha problemas na execução por se confundir com outras variaveis e etc
var dado = 'dados...'

// ao contrário de indefined, o const nao pode ser alterado durante a execução
const pi = 3.14
const TX_CAMBIO = 10 

console.log(1+2)
console.log(('1' + '1'))
console.log(10 - 5)
console.log(10 - 2)
console.log(10 * 9)
console.log(10 / 5)
console.log(8 % 7) //resto da divisão
console.log(10 ** 5) // exponenciação

//incremennto e decremento
numero++
numero--

// operadorrs de atribuição
let valor = 10 // atribuição simples
valor += 10 // atribuição com adição
valor -=3 
valor *= 2
valor /= 3
valor %= 3

// concatenação com string
let aluno = 'alani'
aluno += ' rigotti'
console.log(aluno)

// operadores de comparação
console.log('1' == 1) // comparação apenas de valor, portanto true
console.log(1 == 1) // comparação de igualdade de valor
console.log(1 === 1) // comparação de igualdade de valor e tipo
console.log('1' === 1) // comparação de tipo e valor, tipo string é diferente do tipo number 
console.log(1 != 2) // diferente do valor
console.log('1' != 2) // está comparando apenas o valor, portanto falso 
console.log('1' != 1) // está comparando apenas o valor, portanto falso 
console.log('1' !== 1) // compara valor e tipo, portanto true
console.log(10 > 5) // compara se o valor é maior que
console.log(10 >= 10) // comparar se o valor é maior OU igual
console.log(5 < 10) // compara se o 5 é menor que 10 
console.log(5 <= 10) // compara se o 5 é menor ou igual 10

// operadores lógicos 
console.log(true && true) // && significa que ambas condições precisam ser verdade
console.log(true || false) // || significa que ou uma ou outra condição será contemplada, se uma for verdade, então será verdade
console.log(!true) // negação, inverte os valores. leia-se 'diferente de verdadeiro'

// operador ternário
console.log(10 > 8 ? 'o numero é maior' : 'o número é menor') 
let resultado = 10 > 5 ? 'nota máxima' : 'nota miníma'  

/* // operadores especiais 
console.log(typeof 100) // retorna o tipo de dado de uma expressão ou variável
console.log(auto instanceof Array) // verifica s eo objeto foi criado a partir de um construtor
console.log(nome ?? 'sem nome') // operador de coalescência nula 
 */
// controle de decisões 

if(valor == 10) {
    console.log('aqui vai o código se for true')
} else {
    console.log('aqui vai o código se for false')
}

let idade

if(idade < 10) {
    console.log('criança');
} else if (idade < 18) { 
    console.log('adolescente');
} else if (idade < 30) {
    console.log('jovem');
} else if(idade < 50) {
    console.log('adulto');
} else {
    console.log('idoso');
}

let horario

// switch 
switch (horario) {
    case 8:
        console.log('sino da manhã')
        break;
    case 12: 
        console.log('12 badalos');
    case 18: 
        console.log('6 badalos');
        break;

    default: 
        console.log('1 badalo');
}



// ARRAY (LIST, VETOR)

let matriz = [
    [1,2,3],
    [4,5,6]
]

console.log(matriz[1][1]);

let pessoas = ['Maria', 'José', 'João']
let comidas = ['Pizza',
               'Feijoada',
               'Churrasco'
]

let misturado = ['string', 10, true]

// matriz bidimensional 
let pacientes = [
    [
        'José',
        [35, 1.75, 120],
    ],
    [   'Maria'
        [55, 1.55, 100]        
    ], 
    [
        'Thiago',
        [18, 1.77, 80]
    ]
]

console.log('Paciente: ' + pacientes[0][0]); 
console.log('Idade: ' + pacientes[0][1][0]); 
console.log('Altura: ' + pacientes[0][1][1]); 
console.log('Peso: ' + pacientes[0][1][2]); 

// funções para Arraylet 
let frutas = ['Banana', 'Melancia', 'Kiwi']
console.log('lista:', frutas);
frutas.push('Manga')
console.log('lista atualizada:' + frutas)

frutas.pop() // remove o ultimo item do array 
console.log('lista 2ª vez atualizada:' + frutas)

frutas.unshift('Melão')
console.log('lista 3ª vez atualizada:' + frutas)

frutas.shift() // remove o primeiro elemento de um array 
console.log('lista 4ª vez atualizada:' + frutas)

console.log(frutas.indexOf('Banana')) // busca o índice de um item

console.log(frutas.includes('Melancia')) //verificar se existe um elemento no array

// ordenar um array 
console.log(frutas.sort()) 

// inverter a ordem do array
console.log(frutas.reverse())

console.log(frutas.slice(1)) // pega a partir da posiçã inicial até o final 
console.log(frutas.slice(1, 1)) 
console.log(frutas.lastIndexOf(1,3)) // pega a partir d aoposição inicial até a posição final definida

//remove fruta na posição 1 a partir da posição 1
let removerFrutas = frutas.splice(1, 2)

// adicionar items 
frutas.splice(1, 0, 'Melão')
console.log('lista 5ª vez atualizada:' + frutas)

// editar um item doarray
frutas[0] = 'melancia doce'
console.log('lista 6ª vez atualizada:' + frutas)

