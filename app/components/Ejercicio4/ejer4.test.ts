// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun4 = require ('./Ejercicio4');

test('Ejercicio 4', ()=>{
    const arr1: string[] = ['cat', 'dog', 'wolf'];
    const arr2: string[] = ['cow', 'cat', 'wolf', 'cat'];
    const result: string[] = ['cat', 'wolf'];
    expect(fun4(arr1, arr2)).toEqual(result);
});