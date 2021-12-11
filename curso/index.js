let aluno = require('../estudantes');

// Micro desafio - Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma  de estudantes lista(um array composto pelos alunos criados no passo 1).

let curso = {
    nomeDoCurso: "Desenvolvimento",
    notaDeAprovacao: 7,
    faltasMaximas: 2,
    estudantes: aluno.alunos
};

let calculaMedia = (notas) => {
    let soma = 0;
    for(const i in notas){
        soma += notas[i]
    }
    return soma/notas.length;
}

module.exports = {

    // Micro desafio - Passo 4
    // Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

    adicionarAluno:  function (nome, faltas, notas){
        aluno.novoAluno(nome, faltas, notas);
        console.log(curso);
    },

    // Micro desafio - Passo 5
	// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
    
    aprovou: function(nomeAluno){
        const estudante = curso.estudantes.find( aluno => aluno.nome == nomeAluno)
        const frequencia = estudante.faltas < curso.faltasMaximas ? 'BOM' : estudante.faltas == curso.faltasMaximas ? 'RAZOAVEL' : 'REPROVADO';
        const isAprovado = 
        frequencia == 'BOM' ? calculaMedia(estudante.notas) >= curso.notaDeAprovacao ? true : false 
        :
        frequencia == 'RAZOAVEL' ? calculaMedia(estudante.notas) >= curso.notaDeAprovacao + curso.notaDeAprovacao * 0.1 ? true : false 
        : false;

        return isAprovado;
    },

    // Micro desafio - Passo 6
	// Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.

    resultado: function(){
        const resultados = [];
        curso.estudantes.map(
            estudante => {
                resultados.push(this.aprovou(estudante.nome))
            })
        console.log(resultados)
    }
}