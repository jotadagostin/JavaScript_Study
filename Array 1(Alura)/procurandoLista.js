const alunos = ["João", "Juliana", "Ana", "Caio"];
const media = [10, 8, 7.5, 9];

const listaDeAlunosEMedia = [alunos, media];

function exibeNotaEnome(aluno) {
    if (listaDeAlunosEMedia[0].includes(alunos)) {
        const indice = listaDeAlunosEMedia[0].indexOf(alunos);
        const mediaDoAluno = listaDeAlunosEMedia[1][indice];

        console.log(`${aluno} tem média ${mediaDoAluno}`);
    } else {
        console.log("Aluno não encontrado");

    }
}

exibeNotaEnome("Ana");