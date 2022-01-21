console.log('JS OK')

/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


// Creo array con le squadre 
const teams = [
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Napoli', punti: 0, falliSubiti: 0 },
    { nome: 'Lazio', punti: 0, falliSubiti: 0 },
    { nome: 'Roma', punti: 0, falliSubiti: 0 },
    { nome: 'Fiorentina', punti: 0, falliSubiti: 0 },
    { nome: 'Atalanta', punti: 0, falliSubiti: 0 },
]

// Genero in modo random i numeri per punti e falli subuti

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.punti = getRandomNumber(1, 100);
    team.falliSubiti = getRandomNumber(1, 70);
}
console.log(teams)

// Vado a destrutturare e creo nuova array
const nuovaArray = [];

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    const { nome, falliSubiti } = team;

    nuovaArray.push(nome, falliSubiti);
}
console.log(nuovaArray);
