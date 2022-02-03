function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}
const nums = [2, 4, 6, 8, 10]
//console.log('array mapeado2x ' + mapSemThis(mapSemThis(nums)));
console.log('array mapeado ' + mapSemThis(nums)) //x2
console.log('array original ' + nums)