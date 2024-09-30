let num = 10 // insira o número

//Inicializando as variaveis para armazenar os primeiros números da sequência
let fibonacci = [] // array para armazenar a sequencia de fibonacci
let a = 0 // primeiro valor de fibonacci
let b = 1 //segundo valor 
let contador = 0 //contador para controlar quantos numeros ja foram gerados

// usando while para calcular a sequencia de fibonacci
while(contador < num){
    // adicionando o numero atual da sequencia ao array
    fibonacci.push(a) //adicionando o valor inicial
    
    //atualizando os valores de A e B para o spróximos numeros da sequencia
    let temp = a //armazenando o valor atual de a em uma variavel temporaria

    a = b // atualizando o A para ser o próximo numero B

    b = temp + b // atualizando B para ser a soma dos dois últimos numeros (anterior e atual)

    //Incrementando
    contador++
}
//Exibindo a sequencia de Fibonacci
console.log(`Os primeiros ${num} números da sequência Fibonacci são: ${fibonacci.join(",")}`)
