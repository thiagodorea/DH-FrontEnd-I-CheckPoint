// >>>>>  Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno

function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
}

const aluno1 = new Aluno("Alfredo", 1, [10,7,8,9]);
const aluno2 = new Aluno("Rita", 0, [9,9,7,8]);
const aluno3 = new Aluno("Maria", 0, [8,7,9,7]);
const aluno4 = new Aluno("João", 2, [6,9,6,9]);
const aluno5 = new Aluno("Marcos", 1, [10,9,9,8]);




module.exports = {
    novoAluno: function (nome, faltas, notas) {
        const aluno = new Aluno(nome, faltas, notas);
        this.alunos.push(aluno);
    },


    alunos: [aluno1, aluno2, aluno3, aluno4, aluno5],

    // >>>>>  Micro desafio - Passo 2
    // Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

    calcularMedia: function(){
        for(aluno of this.alunos){
            let media = 0
            const notas = aluno.notas
            for(const i in notas){
                media += notas[i]
            }
            console.log(`A média do(a) aluno ${aluno.nome} foi ${media/notas.length}.`);
            
        }
    },
    

    faltas: function(){
        for(aluno of this.alunos){
            console.log(`${aluno.nome} teve ${aluno.faltas + 1}.`)
        }
    }
}
