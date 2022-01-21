console.log('JS OK');
/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */

const bikeList = [
    { nome: 'Specialized', peso: 30 },
    { nome: 'Bianchi', peso: 33 },
    { nome: 'Decathlon', peso: 35 },
    { nome: 'Scott', peso: 28 }
]
console.log(bikeList);
let biciConPesoMinore = bikeList[0]
for (let i = 0; i < bikeList.length; i++) {
    const bike = bikeList[i];
    const { peso } = bike;
    if (peso < biciConPesoMinore.peso) biciConPesoMinore = bike;
}
console.log(biciConPesoMinore);

// dati necessari : 1) Peso dell'oggetto su cui stiamo ciclando
//2) il peso di biciConPesoMinore
//3) Fare un paragone tra il peso di 1 e il peso di 2 (controllare se uno e' maggiore dell'altro)