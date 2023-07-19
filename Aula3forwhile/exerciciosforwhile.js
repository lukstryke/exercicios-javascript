// 3. Faça um programa que imprima os números ímpares de 0 a 50;

// // for (let contador = 1; contador < 50 ; contador+=2) {
// //     console.log(contador);
    
// }

// 1. Imprimir números de 1 a 10 utilizando o loop for

// for (let contador = 0; contador <=10; contador++) {
//     console.log(contador);
       
// }

// 2. Imprimir números pares de 1 a 10.

// for (let contador = 0; contador <=10; contador+=2) {
//     console.log(contador);
    
// }


// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

// let prompt = require('prompt-sync')()

// let numero = parseInt(prompt('Digite o numero a ser multiplicado: '))

// for (let contador = 0; contador <=10; contador++) {
//     console.log(`${numero*contador}`);
       
// }


// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// let numAnterior = 0
// let numAtual = 1

// console.log(numAnterior);
// console.log(numAtual);

// for (let contador = 0; contador <10; contador++) {
//    let proxNumero = numAnterior + numAtual;
//    console.log(proxNumero);

//    numAnterior = numAtual
//    numAtual = proxNumero
     
// }














// while


// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

const prompt= require('prompt-sync')()

// let numero;

// do {
    
//  numero = prompt ('Digite um numero:')

// } while (numero !='0');

// 6. Imprimir números pares de 0 a 20 utilizando o loop while

// let contador = 0

// // while (contador<20) {

// //     contador+=2
// //     console.log(contador);
    
// }




// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let contador = 1
let resultado = 0

while (contador <=100) {
   // resultado += contador
   resultado = resultado + contador
   contador++
   console.log(resultado);  
}


// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.



let idade = 0

while (idade<18) {
   idade = parseInt(prompt('Digite sua idade: '))
     if (idade<18) {
        console.log('idade invalida ');   
     } 
     else{
      console.log('Maior idade atingida');
     }
}
   
    
// }


// 9-Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

// let numero = parseInt(prompt('Digite o numero: '))

// while (numero >0) {
//    numero--
//    console.log(numero);  
// }

