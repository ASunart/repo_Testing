// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun10 = require ('./Ejercicio10');

test('Ejercicio 10', ()=>{
    const result:Record<string,number> = {};
    expect(fun10(result)).not.toEqual({});
});