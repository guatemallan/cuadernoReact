/**
 * ARREGLOS
 */

// esto es posible pero no recomendado
// const tecnologias = [20, 30, 40, true, 'React.js']
const tecnologias = ['HTML','CSS','JS','React','Node.js']

console.table(tecnologias)

console.log(tecnologias[1])

// AGREGAR ELEMENTOS
tecnologias[5] = 'Nest.js'
console.table(tecnologias)

// si no coloco bien el indice, se saltará varios
// tecnologias[10] = 'TypeScript'

// usamos funcioes:
tecnologias.push('TypeScript')
// el metodo push "muta", modifica la variable y esto no es recomendado en React por que muta/modifica el state

// de esta manera podemos prevenir que mute el estado
const nuevoArreglo = [...tecnologias, 'Java']

console.table(tecnologias)
console.table(nuevoArreglo)

// ELIMINAR ELEMENTOS

// se elimina el primer elemento, indice 0
// este metodo muta el state, no recomendado
tecnologias.shift();

console.table(tecnologias)

// sin mutar:
const tecnologias2 = tecnologias.filter(function(tech)
{
    if(tech !== 'CSS') {
        return tech
    }
}
)

console.table(tecnologias2)

// modificar/reemplazar:
const tecnologias3 = tecnologias.map(function(tech)
{
    if(tech === 'Node.js') {
        return 'Angular'
    }else{
        return tech
    }
}
)

console.table(tecnologias3)