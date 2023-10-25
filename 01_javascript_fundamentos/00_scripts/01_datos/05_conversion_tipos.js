//JavaScript es un lenguaje dinámico, es decir, que puede cambiar su tipo de dato en tiempo de ejecución.

let mi_variable = "Un string"
mi_variable = 5
mi_variable = true
mi_variable = ["Una lista"]

console.log(mi_variable)

//Además, cuando intentamos realizar operaciones entre tipos de datos distintos, JavaScript intentará convertirlos en el tipo de dato más adecuado:

let numero = 5
let boolean = true
let string = "un string"
let lista = ["Elemento A", "Elemento B", "Elemento C"]

let resultado = numero + boolean

console.log(`Si sumamos un ${typeof numero} con un ${typeof boolean} obtenemos 
 ${typeof resultado}`)
console.log(`${numero} + ${boolean} = ${resultado}`)

resultado = numero + string
console.log(`Si sumamos un ${typeof numero} con un ${typeof string} obtenemos 
 ${typeof resultado}`)
console.log(`${numero} + ${string} = ${resultado}`)

//Esto hace que sea muy flexible, pero en muchos casos es ineficiente y debemos de o bien usar constantes, o comprobar que es un tipo de dato válido antes de ejecutar una operación.