console.log('js ok');

/* 
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

const myArray = ['Mattia', 'Emilia', 'Raffaele', 'Filippo', 'Barbara', 'Antrè'];

const arraySliceFilter = (arr, start, end) => arr.filter((item, index) => index >= start && index <= end);
console.log(arraySliceFilter(myArray, 3, 5));

