var valores = [5, 2, 6, 9, 8, 3, 4, 7];

function ordena(){
    let inicio = 0;
    let fim = 7;
    let tmp;

    for(vezes = 0; vezes < 8; vezes++){
        for(pos = inicio; pos < fim - vezes; pos++){
            if (valores[pos] > valores[pos + 1]){
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}


ordena();
console.log(valores)
console.log("Vetor ordenado...");
console.log(valores);

