// eslint-disable-next-line @typescript-eslint/no-var-requires
const verArray = require('./Ejercicio5');

test('Verify if array 1 contains all elements of array 2', () =>{
    let arr1: number[] = [];
     arr1 = [1, 2, 3];
     let arr2: number[] = [];
     arr2 = [1, 2, 3, 4];
    expect(verArray(arr1, arr2)).toBeTruthy();
});