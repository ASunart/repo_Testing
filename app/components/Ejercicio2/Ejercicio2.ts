/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */

 function evenOdd(array: number[]){
    const arr: any[] = [[], []];
    array.forEach(num => {
        if(num%2 == 0){
            arr[0].push(num);
        } else {
            arr[1].push(num);
        }
    });
    return arr;
 }
module.exports = evenOdd;