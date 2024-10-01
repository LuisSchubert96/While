//Função q
function maiorNumero(numeros){
    //Verificando se o array esta vazio
    if (numeros.length === 0){
        return "O array esta vazio"
    }
    //Inicializando a variavel maior com o primeiro elemento do array
    let maior = numeros[0] // assume que o primeironúmero é o maior inicial
    //laço para percorrer todos o números da array
    for(i = 1; i < numeros.length; i++){
        //comparando o numero atual com o maior encontrado até agora
        if(numeros[i]>maior){
            maior = numeros[i]
        }
    }
    //retornando a mensagem com o maior numero encontrado
    return `O maior é ${maior}`
}
//Array
arrayNumeros = [11,15,18,14,12,13]
resultado = maiorNumero(arrayNumeros) //chamando a função e armazenando no resultado
console.log(resultado)