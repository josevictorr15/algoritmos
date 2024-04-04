function regressiva(count) {
    console.log(count)
    if(count <= 1) {
        return // Caso-base
    } else { // Caso recursivo
        regressiva(count-1)
    }
}

regressiva(10)