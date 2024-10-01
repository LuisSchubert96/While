// Array com os preços de 12 produtos
let produtos = [79.80, 14.00, 1.69, 43.90, 7.00, 13.90, 99.00, 280.00, 45.90, 500.00, 89.90, 6.00]

//Variavel para acumular o total da fatura
let totalFatura = 0

//Laço FOR para percorrer o array de produtos
for (i = 0; i < produtos.length; i++){
    totalFatura += produtos[i]
}

//Exibindo o total da fatura
console.log("O total da fatura é de: R$"+ totalFatura.toFixed(2))