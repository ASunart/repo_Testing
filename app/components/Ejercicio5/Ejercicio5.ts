/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */

function verifyArray (array1: any[], array2: any[]) {
    return array1.every((i: any) => array2.includes(i));
}

module.exports = verifyArray;