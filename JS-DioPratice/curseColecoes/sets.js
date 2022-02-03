//Sets
//Dado o array [30,30,40,5,223,2049,3034,5] retorne outro array apenas com valores unicos 

const meuArray = [30,30,40,5,223,2049,3034,5];

function valorUnicos(arr){
    const mySet = new Set(arr);
    //usando spread... pra cada elemento do set vai adicionar num array *(senao é um set ,teste!):
    return [...mySet];
}
console.log(valorUnicos(meuArray))