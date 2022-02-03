//Crie funcao getAdmins que recebe um map
//crie um map e popule-os com os nomes de usuarios e seus papeis no sistema
//dentro do getAdmins utilize loop...of para retornar uma lista com os nomes dos usuairos que sao adms

function getAdmins(map){
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}
const usuarios = new Map()
usuarios.set('Joao', 'Admin')
usuarios.set('stephany', 'Admin')
usuarios.set('everton', 'User')
usuarios.set('natalia', 'Admin')

console.log(getAdmins(usuarios))