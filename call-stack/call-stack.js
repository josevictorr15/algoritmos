function sauda(nome) { // O computador aloca uma caixa de memória para essa chamada
    console.log(`Olá, ${nome}!`);
    sauda2(nome); // Novamente o computador aloca uma caixa de memória para esta chamada de função, sendo essa caixa adicionada em cima da primeira, quando retornamos da chamada dessa função, a caixa do topo da pilha é retirada
    console.log("Preparando para dizer tchau...");
    tchau()
};

const sauda2 = (nome) => console.log(`Como vai, ${nome}?`);

const tchau = () => console.log("Ok, tchau");

sauda("José");

// Cada vez que você faz uma chamada de função, seu computador salva na memória os valores para todas as variáveis

// ** Quando a função sauda2 foi chamada, a função sauda ficou parcialemente completa



// PILHA DE CHAMADA COM RECURSIVIDADE

const fat = (num) => {
    if (num == 1) {
        return 1
    } else {
        return num * fat(num-1)
    }
}

console.log(fat(5))