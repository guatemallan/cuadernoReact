/**
 * ARROW FUNCTIONS
 * @param {*} x 
 * @param {*} y 
 * Se omite la palabra 'function' y se agrega el símbolo flecha '=>'
 * Similar a las funciones expresion, no se pueden invocar antes de declarar
 */ 
// const sumar = function(x = 0, y = 0){
const sumar = (x = 0, y = 0) => {
    console.log(x + y)
}

sumar(10)
sumar(300,765)

/**
 * Característica #1
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
// si la funcion solo tuviera una linea de codigo, se pueden omitir las llaves '{}' y convertira en una sola linea
const sumar2 = (x = 0, y = 0) => console.log(x + y)

sumar2(20,55)


