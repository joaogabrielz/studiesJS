const maca = {
    value:2,
}
const laranja = {
    value:3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
      return item * this.value
    }, thisArg)
}
const nums= [1, 2]
console.log('when this -> maÇa: \n', mapComThis(nums, maca));
console.log('when this -> laranja: \n', mapComThis(nums, laranja));
