// eslint-disable-next-line @typescript-eslint/no-var-requires
const fun8 = require ('./Ejercicio8');

test('Ejercicio 8', () =>{
    const ideas: string[] = ['Buena', 'Regular', 'Normal'];
    expect(fun8(ideas)).toBe('Publicar, fantástico');
});