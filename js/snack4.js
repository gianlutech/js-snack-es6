console.log('JS ok');

/* 
SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

const students = [
    { id: 108, nome: 'gianluca ingrao', sommaTotale: 80 },
    { id: 104, nome: 'filippo di bella', sommaTotale: 60 },
    { id: 529, nome: 'mattia stievano', sommaTotale: 102 },
    { id: 289, nome: 'andrea antonelli', sommaTotale: 89 },
    { id: 298, nome: 'giorgio tagliente', sommaTotale: 39 },
    { id: 065, nome: 'mattia chirulli', sommaTotale: 33 },
    { id: 962, nome: 'andrea casaletto', sommaTotale: 251 },
    { id: 639, nome: 'francesco chirulli', sommaTotale: 22 },
    { id: 583, nome: 'massimiliano izzi', sommaTotale: 65 },
    { id: 488, nome: 'raffa de lucia', sommaTotale: 120 },
]

/* const capitalizedNames = students.map((name) => {
    const firstLetter = name.charAt(1).toUpperCase();
    const otherLetters = name.substring(1).toLowerCase();
    return firstLetter + otherLetters;
});
console.log(capitalizedNames) */


const sommaVoti = students.filter((sommaMaggiore) => sommaMaggiore.sommaTotale > 70);

console.log(sommaVoti)