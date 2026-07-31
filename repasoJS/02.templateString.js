const producto = 'Tablet de 12 pulgadas'
const precio = 4000
const marca = 'Orange'


// código con sintaxis antigua y propenso a errores
console.log(producto + ',\n$' + precio + ' Dolares Estadounidenses, \nMarca: ' + marca)

// código con template string, mucho más facil de mantener
console.log(`${producto}, 
$${precio} Dolares Estadounidenses, 
Marca: ${marca}`)