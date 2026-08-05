/**
 * FUNCIONES
 * segmentos de codigo reutilizables y con proposito específico
 */

/**
 * Declaración
 * Se usan las mismas reglas para nombrar varialbes,
 * es decir no empiezan con numeros o símbolos (excepto _)
 *  */ 
// function 99sumar(){} //An identifier or keyword cannot immediately follow a numeric literal.
// function -sumar(){} //Identifier expected.
// function .sumar(){} // Identifier expected.
// function !sumar(){} // Identifier expected.
function sumar(){
    console.log(1+1)
}
sumar()

/**  
 * Funciones inteligentes:
 * Y que pasa si ahora quiero sumar otros dos numeros?
 */
function sumarVariables(x,y){
    console.log(x + y)
}
sumarVariables(3,5)

// en este caso, ignora el tercer parámetro
sumarVariables(3,5,10)

// y si pasamos solo un parametro? NaN
sumarVariables(10)

//podemos usar valores por default

function sumarVariablesConDefault(x = 0, y = 0){
    console.log(x + y)
}

sumarVariablesConDefault(10)