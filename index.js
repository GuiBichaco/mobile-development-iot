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

// 📌 Estruturas de Controle
// As estruturas de controle ajudam a tomar decisões no código.

// Condicional if-else
let hora = 14;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
// Switch-case para múltiplas condições
let cor = "azul";
switch (cor) {
    case "vermelho":
        console.log("A cor escolhida foi vermelho.");
        break;
    case "azul":
        console.log("A cor escolhida foi azul.");
        break;
    default:
        console.log("Cor não reconhecida.");
}
// Laços de repetição
// For - executa um bloco de código várias vezes
for (let i = 0; i < 5; i++) {
    console.log("Contador:", i);
}
// While - executa enquanto a condição for verdadeira
let contador = 0;
while (contador < 3) {
    console.log("Número:", contador);
    contador++;
}

// 📌 Funções e Escopo
// As funções encapsulam blocos de código para reutilização.

// Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Maria"));

// Arrow Function (função moderna)
const dobro = (num) => num * 2;
console.log(dobro(5)); // Retorna 10

// Escopo de variáveis
let global = "Sou global";
function testarEscopo() {
    let local = "Sou local";
    console.log(global); // Acessa variável global
    console.log(local); // Acessa variável local
}
testarEscopo();

// console.log(local);  // Erro! 'local' não está acessível fora da função
// Callback function (introdução)
function processar(callback) {
    console.log("Processando...");
    callback();
}
processar(() => console.log("Finalizado!"));

// Função assíncrona (introdução)
async function pegarDados() {
    return "Dados recebidos!";
}
pegarDados().then(console.log); // Usa .then para lidar com a resposta