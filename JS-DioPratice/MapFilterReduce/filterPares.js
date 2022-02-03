function filtraPares(arr){
    return arr.filter(callback)
    // return arr.filter(function(item){
    //     return item%2==0
    // }); outro metodo
}
function callback(item){
    return item % 2 == 0; //pares
    // item % 2 !== 0; impares
}
const myarray = [1,2,3,4,5,6]
console.log(filtraPares(myarray))


//outro metodo
// function filtraPares(arr){
//     return arr.filter((item) => item % 2 == 0)
// }
// const array = [1,2,3,4,5]
// console.log(filtraPares(array))