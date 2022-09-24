/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */

 function randomDice(result: Record<string, number>){
    const firstDice = Math.floor(Math.random()*6);
    const secondDice = Math.floor(Math.random()*6);
    for (let i = 1; i < 12; i++) {
        if (firstDice+secondDice == i) {
            result[i] =+ 1;
        }
    }
    return result;
 }

 module.exports = randomDice;