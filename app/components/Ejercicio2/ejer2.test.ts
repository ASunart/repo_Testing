// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun2 = require ('./Ejercicio2');

test('Ejercicio 2', ()=>{
    const numArray: number[] = [1, 2, 3, 4];
    const result: any[] = [[2, 4], [1,3]];
    expect(fun2(numArray)).toEqual(result);
});