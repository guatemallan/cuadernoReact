/**
 * Return con function expression
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
const sumar = function(x = 0, y = 0){
    return x + y
}
let resultado = sumar(10,20)
console.log(resultado)

/**
 * Return con function declaration
 * @param {} x 
 * @param {*} y 
 * @returns 
 */
function sumar3(x = 0, y = 0){
    return x + y
}
resultado = sumar3(50,125)
console.log(resultado)

/**
 * Caracteristica #2
 * @param {} x 
 * @param {*} y 
 * @returns 
 * Cuando la funcion flecha es de una sola linea, NO es necesario RETURN, porque está implícito
 */
// const sumar2 = (x = 0, y = 0) => return console.log(x + y) //'{' expected.
const sumar2 = (x = 0, y = 0) => console.log(x + y) //'{' expected.
sumar2(20,55)

