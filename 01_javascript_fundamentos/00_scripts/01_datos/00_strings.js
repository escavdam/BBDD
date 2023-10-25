//los strings son cadenas de caracteres
//podemos declararlas mediante "", '' o ``

const mi_string = "hola"
const otro_string = 'mundo'
const frase = mi_string + ` ` + otro_string

console.log(typeof frase)
console.log(frase)

//Da igual si usas "" o '', pero usa siempre la misma

//Las comillas invertidas nos dejan hacer plantillas de strings:

const nombre = "Juan"
const edad = 32
const ciudad = "Granada"
const plantilla = `Hola! Soy ${nombre}, tengo ${edad} y soy de ${ciudad}`

console.log(plantilla)

//los strings tienen como todos los datos de js, propiedades y metodos

nombre.length //esta propiedad es la longitud del string
nombre.toUpperCase() //esto es un metodo
console.log(nombre) //el metodo toUpperCase no modifica el string
const nombreMayus = nombre.toUpperCase() //pero si devuelve el resultado :) asi que podemos guardarlo
console.log(nombreMayus)