//Ya vimos los operadores matematicos + - * / %

//Los operadores de comparación sirven para comparar dos valores y obtener un valor booleano (true o false)

let a = 5
let b = 10

console.log(a < b) //true
console.log(a > b) //false
console.log(a <= b) //true
console.log(a >= b) //false
console.log(a == b) //false
console.log(a === b) //false
console.log(a != b) //true
console.log(a !== b) //true

//Podemos usar == o === para comprobar la igualdad entre datos
const numero = 5 
const string = '5' 

// == convierte datos diferentes antes de intentar compararlos
// === no convierte datos de diferente tipo antes de intentar compararlos
console.log(numero == string) // true
console.log(numero === string) //false

//De la misma forma, podemos usar != o !== para comprobar la desigualdad entre datos
console.log(numero != string)//false
console.log(numero !== string)//true

//En general, usar los comparadores estrictos === y !== es mejor, más seguro y aconsejable