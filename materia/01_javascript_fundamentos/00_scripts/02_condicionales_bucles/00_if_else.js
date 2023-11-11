//Los bloques condicionales nos dejan alterar el flujo de nuestro programa

// if (condicion) {
//   // bloque de codigo que se ejecuta si la condicion es true
// } else {
//   // bloque de codigo que se ejecuta si la condicion es false
// }

const valor = 0.25

if (valor > 0.5) {
  console.log('El valor es mayor a 0.5')
} else {
  console.log('El valor es menor o igual a 0.5')
}

// Si necesitamos comprobar más de dos casos debemos usar if y else if

const valor2 = 0.5

if (valor2 > 0.5) {
  console.log('El valor es mayor a 0.5')
} else if (valor2 < 0.5) {
  console.log('El valor es menor a 0.5')
} else {
  console.log('El valor es igual a 0.5')
}

