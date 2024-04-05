const quicksort = (array) => {
    if(array.length < 2) {
        return array; // Base: arrays com 0 ou 1 elementos já estão "ordenados".
    } else {
        const pivo = array[0]; // Caso recursivo
        const menores = [];
        const maiores = [];

        for(i = 1; i < array.length; i++) {
            const valor = array[i];
            if(valor <= array[0]) menores.push(array[i]); // Subarray de todos os elementos menores que o pivô
            if(valor > array[0]) maiores.push(array[i]); // Subarray de todos os elementos maiores que o pivô
        }

        return [].concat(quicksort(menores), [pivo], quicksort(maiores));
    }
}

const lista1 = [10, 5, 2, 4];
const lista2 = [4, 5];
const lista3 = [3, 6, 7, 2, 12];

const resultado1 = quicksort(lista1);
const resultado2 = quicksort(lista2);
const resultado3 = quicksort(lista3);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);