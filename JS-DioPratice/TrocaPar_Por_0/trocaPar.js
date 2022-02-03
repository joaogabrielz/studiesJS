function substituiPares(array){
    for(let i =0;i < array.length; i++){
        if(array[i] === 0){
            console.log('voce ja é zero')
        }else if(array[i] % 2 === 0){
            console.log(`substituindo ${array[i]} por 0..`)
            arr[i] = 0;
        }
    }
    return array;
}
let arr = [1,3,4,6,80,33,23,90];
console.log(substituiPares(arr));
// if input -> [1,3,4,5,80,32,23,90]
//output -> [1,3,0,0,0,33,23,0]
//if -> []
//output -> -1