"use strict";
let nome = "Lucas"; //tipo string
let numero = 16; //tipo number
let numeroDecimal = 100.50;
let booleano = true;
//Arrays
let tipoArray = [1, 2, 3];
let arrayString = ["A", "B", "C"];
//tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1 = ["Lucas", 30];
//enum - conjunto de valores nomeados
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Pendente"] = 2] = "Pendente";
})(Status || (Status = {}));
let s = Status.Ativo;
var Pedido;
(function (Pedido) {
    Pedido[Pedido["Pendente"] = 1] = "Pendente";
    Pedido[Pedido["Recebido"] = 2] = "Recebido";
    Pedido[Pedido["Cancelado"] = 9] = "Cancelado";
})(Pedido || (Pedido = {}));
let valor = "string"; //desativa a verificação de tipo
valor = 100;
let outroValor = "mensagem"; //tipo de segurança que precisa ser validado antes de usar
if (typeof outroValor === 'string') {
    console.log(outroValor.toUpperCase());
}
//tipo void para funções
function log() {
    console.log("Olá mundo");
}
let arrowFunction = () => {
};
//funções com tipos definidos
let soma = (v1, v2) => {
    return v1 + v2;
};
soma(10, 10);
//objetos tipados
let pessoa = {
    nome: "Lucas",
    idade: 30
};
//union types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor) {
    console.log(valor);
}
let emp = {
    nome: "Lucas",
    salario: 40000
};
//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentes tipos
function identidade(valor) {
    return valor;
}
let chamandoString = identidade("teste de chamada");
let chamandoNumerico = identidade(100);
//classes com tipagem
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }
    businar() {
        console.log("bi bi");
    }
}
//instanciando o objeto
let fusca = new Carro("fusca");
fusca.businar();
