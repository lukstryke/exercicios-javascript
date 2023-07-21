// do while - estrutura de repeticao que continua a execucao conforme a condicao for verdadeira


import promptSync from "prompt-sync"; // chamar o pacote (prompt sync)
const prompt = promptSync(); // importa a funcao do prompt (caixa de texto onde o usuario vai digitar)
let exercicio; // declaracao da variavel (pegar o dado do usuario)
import{ exercicio1Salario, exercicio2Aumento, exercicio3NumPosNeg } from "../Aula1/atividades2.js"


do {
    exercicio = parseInt(prompt('Digite o numero do exercicio a ser executado(1 a 6): '))

    switch (exercicio) {
        case 1:
            exercicio1Salario() // chamar a funcao necessita de parenteses
            break;
        case 2:
            exercicio2Aumento() 
            break;
        case 3:
            exercicio3NumPosNeg() 
            break;
    
        default:
            break;
    }

} while (exercicio);