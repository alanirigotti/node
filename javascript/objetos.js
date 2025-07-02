/** 
 * objetos no javascript são coleções de dados organizados com chave:valor   
 * objetos servem para representar cisas do mundo real como pessoas, carros e produtos
 */

let pessoa = {
    nome : "Alani",
    idade : 22,
    profissao : 'Costumer Sucess', 
    saudacao : () => {
        return `Olá, meu nome é ${this.nome} e gosto de programar`
    } 
}

console.log(pessoa.nome)
console.log(pessoa.saudacao())

// adicionar novas propriedades 
pessoa.corPreferida = 'vermelho'
console.log(pessoa)

// remover uma propriedade
delete pessoa.corPreferida
console.log(pessoa)

// misturando array com objetos 
let pessoas = [
   { 
        nome : 'diego',
        idade : 40,
        email: 'bracellos@gmail.com'
    }, 
    
    {
        nome : 'luana',
        idade : 21,
        email: 'luana@gmail.com'
    },

    {    
        nome : 'lorenzzo',
        idade : 30,
        email: 'lorenzzo@gmail.com'
    }
]

console.log(pessoas[1].nome)
