/**
 * Ejercicio 9
 * calcular el factorial de un número
 */

function factorialNum(n:number) {
    let total = 1;
    for (let i = 1; i <= n; i++){
        total = total * i;    
    }
    return total;
}

module.exports = factorialNum;