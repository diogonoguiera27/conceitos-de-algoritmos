
// Exemplo Criando Variavel Simples 

let nome = "João"; // estamos criando uma variavel chamada nome e guardadndo dentro dela o valor "João"
let idade = 30; // estamos criando uma variavel chamada idade e guardadndo dentro dela o valor 30
let cidade = "senador canedo"; // estamos criando uma variavel chamada cidade e guardadndo dentro dela o valor "senador canedo"

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);

nome = "Maria"; // estamos mudando o valor da variavel nome para "Maria"
console.log("Nome: " + nome); // agora o valor da variavel nome é "Maria"

idade = 31; // alteração em tempo de execução
console.log("Idade depois: " + idade);

// Exemplo 2 :  Criando Constante 

const cpf = "123.456.789-00"; // estamos criando uma constante chamada cpf e guardadndo dentro dela o valor "123.456.789-00"
const dataNascimento = "01/01/1990"; // estamos criando uma constante chamada dataNascimento e guardadndo dentro dela o valor "01/01/1990"
const nacionalidade = "brasileira"; // estamos criando uma constante chamada nacionalidade e guardadndo dentro dela o valor "brasileira"

console.log("CPF: " + cpf); 
// Aqui estamos criando uma constante chamada cpf. 
// O CPF de uma pessoa não muda toda hora, então faz sentido ser uma constante
console.log("Data de Nascimento: " + dataNascimento);
console.log("Nacionalidade: " + nacionalidade);
// Também é uma informação que normalmente não muda durante o programa


// Tetando Modificar uma Constante 
cpf = "000.000.000-00"; // Isso vai dar um erro, porque não podemos modificar o valor de uma constante
console.log("CPF depois: " + cpf); // Isso não vai ser executado, porque o programa vai parar no erro da linha anterior