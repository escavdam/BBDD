// Un bucle while se continúa ejecutando mientras la condición sea verdadera.

let valor = 0
let target = 100
let contador = 0
while(valor < target){
  valor += Math.random() * 50
  contador++
}
const mensaje = `El valor final es ${valor}, hemos entrado en el bucle ${contador} veces`
console.log(mensaje)

//Debemos tener cuidado con los while, es facil caer en un bucle infinito.
// Este tipo de bucle es útil cuando no sabemos cuántas veces se debe ejecutar.

