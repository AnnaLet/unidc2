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
// // //    pessoa2.apresentar();

// //    let pessoas = [pessoa1, pessoa2];
// //    for(let pessoa of pessoas){
// //     pessoa.apresentar();
// //    }

// class aluno {
//     constructor (nome,idade){
//         this.nome = nome;
//         this.idade = idade;
//         this.notas = [];

//     }
//     adicionarNota(nota){
//         this.notas.push(nota);
//     }
//     apresentar(){
//         console.log(`${this.nome},${this.idade},${this.notas}`);
      
//     }
//    capturarNota(){
//     return this.notas;
//    };
//    calcularMedia(){
//     let somar = 0;
//     for (let nota of this.notas){
//         somar = somar + nota;
        
//     }      
//    let media = (somar / this.notas.length);
//    return media;

// }
// // 
// // criando aluno 1
// let aluno1 = new aluno ("luis",34);
// aluno1.adicionarNota(23);
// aluno1.adicionarNota(28);
// aluno1.apresentar();
// aluno1.capturarNota();
// // console.log(aluno1.capturarNota());

// // criando aluno 2
// let aluno2 = new aluno ("maria",20);
// aluno2.adicionarNota(49);
// aluno2.adicionarNota(76);
// aluno2.adicionarNota(46);

// aluno1.calcularMedia();
// aluno2.calcularMedia();
// // console.log(aluno1.calcularMedia());
// // console.log(aluno2.calcularMedia());

// class Turma {
//     constructor(nome){
//         this.nome = nome;
//         this.alunos = [];
//     }

//     receberAluno(aluno){
//         this.alunos.push(aluno);
       
//      }

//     listarturma(){
//         for (let aluno of this.alunos) {
//     //         console.log(aluno);
            
//     //     }
//     //     console.log(this.nome);
//     // }
    
// }
// let turmaSistemas = new Turma ("Sistemas");
// turmaSistemas.receberAluno(aluno1);
// turmaSistemas.receberAluno(aluno2);
// turmaSistemas.listarturma();

let numeros = [10,20,30];
 

    let [a, , c] = numeros;
    console.log(a); 
    console.log(); 
    console.log(c);