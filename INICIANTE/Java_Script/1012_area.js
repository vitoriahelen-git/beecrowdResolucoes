// Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// Entrada
// O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// Saída
// O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem 
// correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

const lerTeclado = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
});

lerTeclado.question('', entrada => {
    const valores = entrada.split(' ').map(Number);
    const A = valores[0];
    const B = valores[1];
    const C = valores[2];

    const areaTriangulo = (A * C) / 2;
    const areaCirculo = 3.14159 * Math.pow(C, 2);
    const areaTrapezio = ((A + B) * C) / 2;
    const areaQuadrado = Math.pow(B, 2);
    const areaRetangulo = A * B;

    console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
    console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
    console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
    console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);

    lerTeclado.close(); 
}); 

