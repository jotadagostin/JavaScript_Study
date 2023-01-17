const alunos = ["João", "Juliana", "Ana", "Caio"];
const media = [10, 8, 7.5, 9];

const listaDeAlunosEMedia = [alunos, media];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedia[0].includes(aluno)) {
        const [alunos, media] = listaDeAlunosEMedia;
        const indice = alunos.indexOf(alunos);
        const mediaDoAluno = media[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}`)
    } else {
        console.log("Aluno não encontrado!")
    }
}

exibeNomeENota("Caio");