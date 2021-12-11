let aluno = require('./estudantes');
let curso = require('./curso');

console.log("\nCalcular Media ----------------------------------------");
aluno.calcularMedia();

console.log("\nFaltas +1 ----------------------------------------");
aluno.faltas();

console.log("\nAdicionar Aluno ----------------------------------------");
curso.adicionarAluno("Thiago",0,[10,9.5,10,9]);

console.log("\nAprovado ----------------------------------------");
console.log(curso.aprovou('Rita'));

console.log("\nResultado ----------------------------------------");
curso.resultado();
