const notas = [10, 6.5, 8, 7.5];

let SomaDasNotas = 0;

for (let nota of notas) {
    SomaDasNotas += nota;
}

const media = SomaDasNotas / notas.length;

console.log(`A média é: ${media}`);