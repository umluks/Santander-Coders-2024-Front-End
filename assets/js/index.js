let nome;
let idade;
let curso;

const nomeCompleto = "Lucas Santiago Gonçalves dos Anjos"

nome = "Lucas Santiago";
idade = 37;
curso = "Analise e Desenvolvimento";


console.log (nomeCompleto, idade, curso);

// Operadores Matematicos

const nota1 = 10;
const nota2 = 9;
const nota3 = 8;
const nota4 = 7;

const somaNotas = nota1 + nota2 + nota3 + nota4;
const mediaNotas = somaNotas / 4; 

console.log("soma das notas = ", somaNotas);
console.log("média das notas = ", mediaNotas); 

if (mediaNotas >= 5) { 
    console.log("VOCÊ PASSOU");
} else {
    console.log("VOCÊ REPROVOU");
}