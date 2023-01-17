const notas = [10, 6.5, 8, 7.5];

let SomaDasNotas =  0;

notas.forEach(function(nota) {
    SomaDasNotas += nota;
});

const media = SomaDasNotas / notas.length;

console.log(media);