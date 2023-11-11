//Una función puede usar y modificar variables globales
//Esto puede ser algo deseado, pero muchisima gente (yo incluido) os va a aconsejar no hacerlo, ya que puede complicar bastante nuestro código

let mi_variable = "Hola mundo"

function modificarVariable(){
  mi_variable = "💀"
}

//Hacer funciones que "hagan algo" y luego impriman datos no es algo muy común en realidad
//Imprimir datos nos puede ayudar a entender que sucede en el código y a buscar bugs
//Normalmente preferimos crear una funcion para que "haga algo" y luego nos devuelva ese dato, esto es mucho mas útil!

//Esta funcion se llama "esViejo" y espera un argumento llamado "edad", si edad es mayor de 30, nos devuelve el string "soy viejx", si es menor, devuelve "soy joven"

function esViejo(edad){
  if(edad > 30){
    return "soy un viejx"
  } else {
    return "soy joven"
  }
}

//Vamos a hacer otra funcion de saludo que haga uso de la funcion "esViejo" y sus returns
function saludo(nombre, edad){
  let joven_o_viejo = esViejo(edad)
  console.log(`Hola, soy ${nombre} y tengo ${edad} años, ${joven_o_viejo}`)
}

saludo("Diego", 32)
saludo("Fernando", 20)

//Ya veis, podemos almacenar el resultado de esViejo en una variable, llamado "joven_o_viejo", despues podemos hacer lo que queramos, en este caso, simplemente imprimirlo como una plantilla de strings.
