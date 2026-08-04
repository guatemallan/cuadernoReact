/**
 * ITERADORES DE ARREGLOS
 */

const tecnologias = ['HTML','CSS','JS','React','Node.js', 'Java', 'Nest.js', 'TypeScript']

// como puedo imprimir todos los valores?

// console.log(tecnologias[0])
// console.log(tecnologias[1])
// console.log(tecnologias[2])
// console.log(tecnologias[3])
// console.log(tecnologias[4])

// pero esto es muy impractico, y no recomendado, especialmente para arreglos muy grandes. 

// un mejor acercamiento sería un ciclo 

// for(let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i])
// }

/**
 * PERO se puede hacer aún más sencillo: de 3 maneras
 * 
 */ 

// 1. FOR EACH
// tecnologias.forEach(function(tecnologia){
//     console.log(tecnologia)
// })

// 2. MAP
// la diferencia es que MAP devuelve un arrelgo nuevo, en base a condicion dentro de la funcion.

// map sin condicion
// tecnologias.map(function(tecnologia){
//     console.log(tecnologia)
// })

// comparando, map si genera un arreglo, for each será undefined... 

const arrayTecForEach = tecnologias.forEach(function(tec){
    // console.log(tecnologia)
    return tec
})
const arrayTecMap = tecnologias.map(function(tecnologia){
    // console.log(tecnologia)
    return 'Hola ' + tecnologia
})

console.log(arrayTecForEach) // undefined
console.log(arrayTecMap) // nuevo arreglo

// 3. for .. of
for(let tec of tecnologias){
    console.log(tec)
}