// let frutas = ["banana", "maça", "uva"];
// let valorARemover = "maça";
// let indice = frutas.indexOf(valorARemover);

// if (indice > -1){
//     frutas.splice(indice, 1);

// }
// console.log(frutas); 

// let nomes = ["Ana","João","Carlos","João","Maria"];
// let nomesSemJoao = nomes.filter(function(nome){
//     if (nome === "João"){
//         return false;
//     }
//     else {
//         return true;
//     }

//     }
// );

// console.log(nomesSemJoao);

// class Pessoa {
//     constructor(nome,idade){
//         this.nome = nome;
//         this.idade = idade;
      
//     }
//     apresentar(){
//         console.log(`${this.nome},${this.idade}`);
//     }
// }
//     const pessoa1 = new Pessoa ("marcos",34);
//     const pessoa2 = new Pessoa ("lucas", 35);

// //    pessoa1.apresentar();
// //    pessoa2.apresentar();

//    let pessoas = [pessoa1, pessoa2];
//    for(let pessoa of pessoas){
//     pessoa.apresentar();
//    }

class aluno {
    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.notas = [];

    }
    adicionarNota(nota){
        this.notas.push(nota);
    }
    apresentar(){
        console.log(`${this.nome},${this.idade},${this.notas}`);
      
    }
   
}
let aluno1 = new aluno ("luis",34);
aluno1.adicionarNota(23);
aluno1.apresentar();