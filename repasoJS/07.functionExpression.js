/**
 * Funciones expresion
 * Ademas de la sintaxis, la diferencia es que se considera a la funcion como una variable. En el caso de JS no se puede utilizar una variable antes de definirla. 
 * Con la sintaxis original, la función SI se puede utilizar antes de declararla. El interprete primero registra las funciones, y luego las invoca. Pregunta Jr. 
 * 
 */

// declaración original:
// function sumar(x = 0, y = 0){
//     console.log(x + y)
// }

/**
 * Sintaxis Function Expression
 */
const sumar = function(x = 0, y = 0){
    console.log(x + y)
}

sumar(10)
sumar(300,765)