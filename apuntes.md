# Apuntes del entrenamiento React

## Repaso JS

### Variables

[Ver apuntes en cuadernoJS](https://github.com/guatemallan/cuadernoJS/tree/main/02.variables)

>Let
La asignación de variables con let permite
>- Crear variables sin asignar un tipo
>- Crear variables sin asignar un variable inicial
>- Cambiar el tipo de dato de la variable en el flujo del código

>Const
Son más utilizadas en JS, para evitar confuciones con tipos de datos.
>- El valor permanece constante, no se puede reasignar
>- Se debe asignar un valor inicial

### Tipos de dato

>[TypeOf](chivo.md#typeof)

>Undefined
`let variableIndefinida` Variables creadas sin valor .

>String
`let nombre = 'Juan'`

>Number
Indistinto entre enteros y punto flotante.
`let cantidad = 10`
`let precio = 50.25`

>BigIng
Utilizado principalmente en aplicaciones de calculos grandes o usos cientificos.
`const numeroGrande = BigIng(3456346345634563456345634563456345634563456)`

>Boolean
`const mentira = false`
`const verdad = true`

>Null
Sin asignar espacio de memoria.
`const descuento = null`

>Symbol
No hay dos símbolos iguales, son únicos e irrepetibles.
`const primerSimbolo = Symbol(30)`

>Objetos
...

### Objetos

[Ver apuntes en cuadernoJS](https://github.com/guatemallan/cuadernoJS/tree/main/08.objetos)

En JS todo es un objeto! Un objeto es una colección de propiedades. Una propiedad es una asociacion de una llave y un valor. 

```
const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false   
}
```

#### Sintaxis de punto en objetos
Se usa para acceder al valor de una llave (propiedad) de un objeto.
`console.log(producto.nombre)`
`console.log(producto.precio)`

#### Destructuring
Notación moderna para acceder a una propiedad en un objeto.

`const { nombre } = producto` es equivalente a `const nombre = producto.nombre`

En sintáxis tradicional, para extraer todas las propiedades de *producto* tendria que hacer 3 variables:

```
const nombre = producto.nombre
const precio = producto.precio
const disponible = producto.disponible
```

Con destructuring se simplifíca el código:

```
const { nombre, precio, disponible } = producto

```

#### Object literal
Asociación de variables a un objeto. Útil para agrupar resultados. Solo se puede aplicar cuando las variables a asociar tienen el mismo nombre que las llaves del objeto. 

```
const usuario = 'Juan'
const autenticado = false

const nuevoObjeto = {
    usuario : usuario,
    autenticado : autenticado
}
```

Este código se puede resumir en:

```
const usuario = 'Juan'
const autenticado = false

const nuevoObjeto = {
    usuario,
    autenticado
}
```
