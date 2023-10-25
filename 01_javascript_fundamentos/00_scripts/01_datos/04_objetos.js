//Los objetos son los tipos de dato mas importantes en javascript

//Nos permiten crear propiedades mediante clave valor:

const usuario = {
  nombre: "Juan",
  edad: 32,
}

//Podemos acceder a sus propiedades mediante notación de punto o [] y usando el nombre de la propiedad del objeto

console.log(usuario.nombre)
console.log(usuario["edad"])

//Podemos crear mas propiedades en cualquier momento:

usuario.ciudad = "Granada"

console.table(usuario)

//Los objetos también pueden tener métodos, estas son funciones que quedan encapsuladas dentro del propio objeto, y tienen acceso a las propiedades del mismo.

const botella = {
  material: "plastico",
  capacidad: 1.0, //litros
  cantidad_agua: 0.0, //litros
  vaciar: function(){
    botella.cantidad_agua = 0
    console.log(`Vaciaste la botella, tienes ${botella.cantidad_agua} litros de agua`)
  },
  llenar: function(){
    botella.cantidad_agua = botella.capacidad
    console.log(`Llenaste la botella, tienes ${botella.cantidad_agua} litros de agua`)
  },
  darUnTrago: function(){
    botella.cantidad_agua -= 0.1
    console.log(`Bebiste un poco, quedan ${botella.cantidad_agua} litros de agua`)
  }
}

console.table(botella)
botella.llenar()
botella.darUnTrago()
botella.darUnTrago()
botella.darUnTrago()
console.table(botella)
botella.vaciar()
console.table(botella)
