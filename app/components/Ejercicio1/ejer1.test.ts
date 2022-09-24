// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun1 = require ('./Ejercicio1');

test('Ejercicio 1', ()=>{
    const arrayA: string[] = ['t', 'p', 'k'];
    const ArrayB: number[] = [2, 4, 8];
    const result: any[] = ['t', 2, 'p', 4, 'k', 8];
    expect(fun1(arrayA, ArrayB)).toEqual(result);    
});