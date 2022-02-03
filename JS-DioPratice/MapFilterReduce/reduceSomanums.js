function somaNumero(arr){
   return arr.reduce(function(prevValue, currentValue){
       console.log({prevValue})
       console.log({currentValue})
        return prevValue + currentValue
    },0)// valor inicial, prev tbm acumula e define o proximo valor de previos
}
const arr = [1 ,2];
console.log(somaNumero(arr))