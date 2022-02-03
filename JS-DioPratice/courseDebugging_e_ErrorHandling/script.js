function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os parâmetros'); // se array e numero nao existe

        if(typeof arr !== 'object') 
            throw new TypeError("O Array precisa ser do tipo object")
    
        if(typeof num !== 'number') 
            throw new TypeError('O Num precisa ser do tipo Number')
    
        if(arr.length !== num) 
            throw new RangeError("Tamanho inválido!");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
            //console.log(e.name)
           // console.log(e.stack)

          // throw e;
        }
        else if(e instanceof TypeError){
            console.log('Este erro é um TypeError')
            console.log(e.message)
            //console.log(e.name)
           // console.log(e.stack)
          //  throw e;
        }
        else if(e instanceof RangeError){
            console.log('Este erro é um RangeError')
            console.log(e.message)
            //console.log(e.name)
           // console.log(e.stack)
          //  throw e;
        }
        else{
            console.log('Ocorreu um tipo de erro Nao esperado: '+ e)
        }

    }
    
}
console.log(validaArray([1,2,3,4,5], 5))