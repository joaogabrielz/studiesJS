//crie funcao que recebe array de alunos e um numero que representarasua media final
//percorra o array e popule um novo array auxiliar apenas com alunos cujas notas sao maiores ou iguals media final
//utilize tecnica desestruturing para manipular propriedades decada launo
const alunos = [
    {
        nome:'Joao',
        nota:10,
        turma:'2B'
    },
    {
        nome:'Sofia',
        nota:9,
        turma:'2B'
    },
    {
        nome:'Paulo',
        nota:5,
        turma:'2C'
    },
    {
        nome:'Miguel',
        nota:3,
        turma:'2C'
    }
];

function alunosAprovados(arr, media){
    let  aprovados = [];

    for(let i=0; i < arr.length; i++){
        //usando object desestruturing:
        const {nota , nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
        //-------------------------
        //-Sem Object desestruturing:
        // if(arr[i].nota >= media) {
        //     aprovados.push(arr[i].nome);
        // }   
    }
    return aprovados;
}
console.log(`Alunos Aprovados: [${alunosAprovados(alunos, 5)}]`)