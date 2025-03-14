// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
// o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o 
// valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois 
// inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os 
// dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

#include <stdio.h>
#include <stdlib.h>

int main(){
    int codigo_peca, numero_peca, codigo_peca1, numero_peca1; 
    double valor_unitario, valor_unitario1, total;

    scanf("%d %d %lf", &codigo_peca, &numero_peca, &valor_unitario);
    scanf("%d %d %lf", &codigo_peca1, &numero_peca1, &valor_unitario1);

    total = (numero_peca * valor_unitario) + (numero_peca1 * valor_unitario1); 

    printf("VALOR A PAGAR: R$ %.2lf\n", total); 

    return 0; 
}