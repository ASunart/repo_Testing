/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */
 function organizeArr(arry: any[]) {
    let arr = arry;
    const newArray: any[] = [];
    arry = arry.filter(number => Number.isInteger(number));
    arr = arr.filter(string => !Number.isInteger(string));
    arry.sort();
    arr.sort();
    arr.forEach(element => {
        newArray.push(element);
    });
    arry.forEach(element => {
        newArray.push(element);
    });
    return newArray;
 }

    module.exports = organizeArr;