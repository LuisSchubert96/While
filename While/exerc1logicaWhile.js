//Função que solicita os números ao usuário e calcula a soma 
function solicitarNumeros (){
    let soma = 0//variável para guardar a soma dos números inseridos
    let numero //variavel para guardar o número inserido pelo usuario
    let index = 1 // indice para indicar a ordem das entradas do usuario
    // fazendo o loop do...while que continua até o usuario inserior o número 0 (condição de para)
    do {
        //solicitando ao usuario que insira um número, com a indicação do indice
        numero = parseInt(prompt("Insira um número" + index + "(0 para sair):"))
        // verificando se o valor inserido é um número válido
        if(!isNaN(numero)){
            soma += numero // somando o númeor inserido ao total
            index++ // incrementa o indice para a próxima entrada

        }else{
            // Caso i valor inserido não seja um número, exibe um alertaao usuario
            alert("por favor insira um número válido")
        }
    }while (numero !== 0){ //loop para quando o usuario insere o 0
        //Exibindo a soma dos números no elemento HTML com id 'resultado'
        document.getElementById("resultado").innerHTML = "A soma dos números é:" + soma
    }

}