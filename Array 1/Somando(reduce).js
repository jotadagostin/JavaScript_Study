const salaJS = [7, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5 ,8, 9, 5 , 6 ];
const salaPython = [7, 3.5, 8, 9.5];

// acc = acumulador

function calculaMedia (notasDaSala) {
    const SomaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;

        
    })

    const media  = SomaDasNotas / notasDaSala.length;
        return media;
}


console.log(`A media è: ${calculaMedia(salaJS)}`);