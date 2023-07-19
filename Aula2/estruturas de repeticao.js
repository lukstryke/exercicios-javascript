
// let nomes = ['Alana','Alexia','Samantha','Thiago','Odirlei']
//             // 0        1         2        3         4

// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaelemento = nomes[contador];
//     console.log(cadaelemento);    
// }            






// const frutas = ['Pera','Uva','Maca','Salada Mista']

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaelemento = frutas[contador];
//     console.log(contador,cadaelemento);
    
// }

// frutas.forEach(cadaelemento =>{
//     console.log(cadaelemento);
// })


// let salario = 1000
// let contador = 0

// // while (salario < 5000) {
// //     salario = salario + 100; //salario += 100
// //     console.log('O seu salario ainda e R$: '+ salario);
    
// // }

// do{
//   salario += 100;
//   contador++;
//   console.log('O seu salario ainda e R$: '+ salario);
// } while (salario < 5000); 

// console.log(contador);
    


const prompt = require ('prompt-sync')()

let numeroEscolhido;
// do {
//      numeroEscolhido = prompt('Digite um numero: ');
// }   while (numeroEscolhido != '5');

let senha;

do{
    senha = prompt('Digite a senha: ')

    if (senha !='123') {
        console.log('senha incorreta');
        
    }
} while (senha !='123'); 
console.log('senha correta!');