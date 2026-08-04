/**
 * DESTRUCTURING CON ARREGLOS
 */

const tecnologias = ['HTML','CSS','JS','React','Node.js']

//obtener una variable con el valor de 'React'
const react = tecnologias[3]
console.log(react)

// con desctructuring

const [html, css, node] = tecnologias

// como lo supo?
console.log(html)
console.log(css)

// pues los extrae posicionalmente
console.log(node) // node tiene el valor que está en la posicion 2

// y si solo quiero obtener 1 variable, sin las demás?

const [,,, react2] = tecnologias

console.log(react2)