// 📌 Introdução ao JavaScript
// JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web e mobile. 
// Pode ser executada diretamente no navegador ou no Node.js.

// Exemplo de código JavaScript rodando no navegador
console.log("Olá, mundo! Este é um script JavaScript.");

// 📌 Variáveis e Tipos de Dados
// O JavaScript possui diferentes formas de declarar variáveis e vários tipos de dados primitivos.

// Declaração de variáveis
var nome = "João";  // var: escopo global (evite usar)
let idade = 25;  // let: escopo de bloco (recomendado)
const PI = 3.1415;  // const: valor fixo que não pode ser alterado
// Tipos primitivos
let texto = "Olá, mundo!";  // String
let numero = 42;  // Number
let booleano = true;  // Boolean
let nulo = null;  // Null (valor intencionalmente vazio)
let indefinido;  // Undefined (sem valor atribuído)
// Arrays e Objetos
let frutas = ["Maçã", "Banana", "Laranja"];  // Array
let pessoa = { nome: "Carlos", idade: 30 };  // Objeto
console.log(frutas[0]); // Acessa o primeiro elemento do array
console.log(pessoa.nome); // Acessa a propriedade 'nome' do objeto