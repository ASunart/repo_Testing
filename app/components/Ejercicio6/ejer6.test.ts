// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun6 = require ('./Ejercicio6');

test('Ejercicio 6', ()=>{
    const array: any[] = [2, 'a', 5, 'p'];
    const result: any[] = ['a', 'p', 2, 5];
    expect(fun6(array)).toEqual(result);
});