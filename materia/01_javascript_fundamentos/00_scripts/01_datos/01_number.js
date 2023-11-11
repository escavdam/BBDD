//Podemos crear datos numericos

const entero = 2
const decimal = 0.1283219
const negativo = -203
const negativoDecimal = -.1283219

console.log(typeof entero)

//Los numeros tambien poseen metodos:

console.log(entero.toString()) //convierte a string
console.log(entero.toFixed(2)) //redondea a 2 decimales
console.log(entero.toExponential()) //redondea a 2 decimales y lo convierte a string
console.log(entero.toPrecision(3)) //redondea a 3 decimales
