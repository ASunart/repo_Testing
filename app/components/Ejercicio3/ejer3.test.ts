// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun3 = require ('./Ejercicio3');

test('Ejercicio 3', ()=>{
    const arrayMulti = [['e', 'd', 'f'], ['a', 'c', 'b'], ['m', 'o', 'n']];
    const result = [['a', 'b', 'c'],['d', 'e', 'f'], ['m', 'n', 'o']];
    expect(fun3(arrayMulti)).toEqual(result);
});