// exercicio 5
let prompt = require('prompt-sync')()
// let pval = parseInt(prompt('Digite o primeiro valor: '))
// let sval = parseInt(prompt('Digite o segundo valor: '))

// if (pval > sval) {
//     console.log( 'O maior valor e: '+ pval +'')
    
// }
// else if (sval > pval) {
//     console.log( 'O maior valor e: '+ sval +'')
// }

// else {
//     console.log( 'Os valores sao iguais')
// }


// exercicio 1

// let nome = prompt('Digite seu nome: ')
// let cargo = prompt('Digite seu cargo: ')
// let salario = parseFloat( prompt('Digite seu salario: '))

// if (salario < 1000) {
//     salario = salario + (salario * 0.1)
//     console.log('nome: '+ nome +' cargo: ' + cargo +' salario: '+ salario )    
// }

// else{
//     console.log ('Voce ja ganha o suficiente, contente-se com seu contracheque')


// exercicio 2

// let salario = parseFloat( prompt('Digite seu salario: '))

// if (salario < 500) {
//     salario = salario + (salario * 0.3)
//     console.log('Salario Reajustado: '+ salario)
// }
// else if (salario > 500) {
//     console.log('Sem direito a reajuste')
    
// }

// exercicio 3

// let numero = parseInt(prompt ('Digite um numero: '))

// if (numero > 0) {
//     console.log('O numero digitado e positivo')
    
// }
// else {
//     console.log('O numero digitado e negativo')
// }


// exercicio 6

// let n1 = parseFloat(prompt ('Digite a primeira nota:'))
// let n2 = parseFloat(prompt ('Digite a segunda nota:'))
// let n3 = parseFloat(prompt ('Digite a terceira nota:'))
// let n4 = parseFloat(prompt ('Digite a quarta nota:'))

// let media = (n1 + n2 + n3 + n4)/4

// if (media>=7) {

//     console.log ('Media: '+ media + ' Aluno aprovado!')    
// }

// else if (media>=5 && media<7 ) {
//     console.log ('Media: ' + media + ' Aluno em recuperacao!')    
// }

// else{
//     console.log ('Media: ' + media + ' Aluno reprovado!')
// }



// Exercício 1: Verificação de login

// let username = prompt('Digite o nome de usuario: ')
// let senha = prompt('Digite sua senha: ')


// if (username == 'admin' && senha == 'senha123') 
// {
//     console.log('Login efetuado corretamente')    
// }

// else{
//     console.log('Usuario ou senha incorreto')
// }


// Exercício 2: Verificação de dia da semana

// let number = parseInt(prompt('Digite um numero de 1 a 7:'))

// if (number ==1) {
//     console.log('Segunda-feira - Segundou!!')
  
// }
// else if (number == 2) {
//     console.log('Terca-feira - Muita calma nessa hora!');
    
// }
// else if (number == 3) {
//     console.log('Quarta feira - Forca guerreiro!');
    
// }
// else if (number == 4) {
//     console.log('Quinta feira - Quase la meu rei!');
    
// }
// else if (number == 5) {
//     console.log('Sexta feira - Sexxxtou galera!');
    
// }
// else if (number == 6) {
//     console.log('Sabado - AH Muleeeequeee!');
    
// }
// else if (number == 7) {
//     console.log('Domingo - No final do fantastico a gente chora');
    
// }

// else{
//     console.log('Numero errado parceiro!');
// }

// switch (number) {
//     case 1:
//         console.log('Segunda-feira - Segundou!!');
//         break;
//     case 2:
//         console.log('Terca-feira - Muita calma nessa hora!');
//         break
//     case 3:
//         console.log('Quarta feira - Forca guerreiro!');
//         break
//     case 4:
//         console.log('Quinta feira - Quase la meu rei!');
//         break
//     case 5:
//         console.log('Sexta feira - Sexxxtou galera!');
//         break
//     case 6:
//         console.log('Sabado - AH Muleeeequeee!');
//         break
//     case 7:
//         console.log('Domingo - No final do fantastico a gente chora');
//         break
//     default:
//         console.log('Numero errado parceiro!');
//         break;
// }


// Exercício 3: Verificação de números em ordem crescente

// let n1 = parseInt(prompt ('Digite o primeiro numero:'))
// let n2 = parseInt(prompt ('Digite o segundo numero:'))
// let n3 = parseInt(prompt ('Digite o terceiro numero:'))

// if (n1<n2 && n2<n3) {
//     console.log('Os numeros estao em ordem crescente');    
// }
// else{
//     console.log('Numeros nao estao em ordem crescente');
// }

// Exercício 4: Verificação de idade

let datanasc = parseInt(prompt ('Digite o ano de nascimento:'))
let dataat = parseInt(prompt ('Digite o ano atual:'))

let subdata = (dataat-datanasc)

if (subdata >= 18) {
    console.log('Voce ja e maior de idade');   
}
 else{
    console.log('Nao atingiu a maioridade');
 }

