var valores = [5, 8, 10, 20, 52, 63, 85, 33, 99, 100];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num == valores[i]) {
            return i;
        }

    }
    return -1;
}

function buscaBin(num) {
    let inicio, fim;
    let meio;
    let passos = 0;
    inicio = 0;
    fim = 9;
    while (inicio <= fim) {
        meio = parseInt((inicio + fim) / 2);
        passos += 1;
        if (num == valores[meio]) {
            console.log("Achei em tantos " + passos + " passos")
            return meio;
        } else {
            if (num > valores[meio]) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }

        }
    }
    console.log("Não achei em " + passos + " passos")
    return -1;
}

// usando ferramenta de busca

console.log(buscaBin(312));
console.log(buscaBin(10));
console.log(buscaBin(99));
console.log(buscaBin(100));
