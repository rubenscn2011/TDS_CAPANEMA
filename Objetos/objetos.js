// Sintaxe de um objeto {}
const aluno = {
   nome: "Rubens",
   idade: 30,
   curso: "Técnico em Desenvolvimento de Sistemas"
   }

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);

aluno.matricula = "20266TDS"; // Adiciona uma nova propriedade
  
aluno.idade = 18; // Atualiza caso existir
console.log(aluno);

delete aluno.curso;
  
console.log(aluno);
   



   