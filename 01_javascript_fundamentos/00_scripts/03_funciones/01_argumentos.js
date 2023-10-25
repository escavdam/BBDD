let a = 8
let b = 4

function suma_regulera(){
//Las funciones pueden acceder a variables globales
  console.log(a+b)
}

//Sin embargo, cuando queremos pasar datos de fuera de la funcion, es mejor hacerlo usando argumentos dentro de los parentesis:
function suma(a, b){
  console.log(a+b)
}

suma_regulera() //Suma las variables globales "a" y "b"
suma(2,3) // El 2 es "a" en la funcion, el 3 es "b"