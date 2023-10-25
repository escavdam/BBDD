// piensa en que deberia salir en la consola antes de lanzar el script, deberia dar error?

console.log(mi_variable)
var mi_variable = "Hey"

// cuando usamos "var" para crear variables, estas se "subirán" a lo mas alto del bloque de codigo donde estén declaradas y se declararán sin valor (undefined)

//Para js, el código de arriba y el siguiente, son lo mismo. comenta las lineas 3 y 4, descomenta las lineas 10, 11, 12, 13 y 14 para comprobarlo

// var mi_variable
// console.log(mi_variable)
// mi_variable = "Hey"

//Ademas, las variables iniciadas en loops se quedan para siempre dando vueltas en nuestro código:

for(var i = 2; i < 100; i*=2){
  console.log("trabajando")
}

console.log(i) 

//var no se usa en la actualidad, ha quedado por motivos de compatibilidad para que aplicaciones antiguas que hacen uso de var no exploten

//let es mas seguro, como veremos mas adelante, no tendremos que preocuparnos tanto de donde hemos declarado algo, y es mas cómoda tratar con ella