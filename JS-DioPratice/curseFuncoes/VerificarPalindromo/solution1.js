function verificaPalindromo(string){
    if(!string) return "string inexistente";
   return string.split("").reverse().join("") === string;
}
console.log(verificaPalindromo("ovo"));
//palindromos -> ovo abba etc..

//let myVar = null;
//console.log(verificaPalindromo(myVar))