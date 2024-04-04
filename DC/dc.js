const soma = (lista) => {
    contador = 0
    for(i = 0; i < lista.length; i++) {
        contador += lista[i]
    }
    return contador
}

console.log(soma([2, 2, 2]))


// Escrevendo função soma de forma recursiva

// Passo 1: Descobrir o caso-base. Qual é o array mais simples que se pode obter?

// Passo 2: Deve-se chegar mais perto de um array vazio a cada recursão.

const soma2 = (array) => {
    if(array.length == 0) return 0;
    const primeiroItem = array.shift();
    return primeiroItem + soma2(array);
};

console.log(soma2([2, 4, 6]));



// Função recursiva que conte o número de itens em uma lista

const contaItens = (array) => {
    if(array.length == 0) return 0;
    array.shift()
    return 1 + contaItens(array)
}

console.log(contaItens(["Banana", "Maçã", "Laranja", "Morango", "Limão", "Caju"]));
