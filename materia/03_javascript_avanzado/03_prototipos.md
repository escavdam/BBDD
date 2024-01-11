# Prototipos

## Introducción

Los prototipos son un mecanismo que nos permite agregar propiedades y métodos a los objetos. Todos los objetos en JavaScript tienen un prototipo, y los prototipos son objetos también.

## ¿Qué es un prototipo?

Un prototipo es un objeto que tiene propiedades y métodos, y que puede ser usado como plantilla para crear otros objetos.

## ¿Para qué sirven los prototipos?

Los prototipos nos permiten agregar propiedades y métodos a los objetos, y que estos sean heredados por los objetos que se creen a partir de ellos.

Es un mecanismo similar a la herencia en otros lenguajes de programación.

## Ejemplo de prototipo

```javascript
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function() {
    return `${this.nombre} ${this.apellido}`
  }
}

console.log(persona.nombreCompleto())
```

## Ejemplo de prototipo con constructor

```javascript
function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.nombreCompleto = function() {
  return `${this.nombre} ${this.apellido}`
}

const persona = new Persona("Juan", "Perez")

console.log(persona.nombreCompleto())
```

En este caso, nuestro prototipo es la función `Persona`, y los objetos que creemos a partir de ella van a heredar las propiedades y métodos que definamos en su prototipo.

Los prototipos son la forma en la que JavaScript implementa la herencia, gracias a ellos podemos acceder a las propiedades y métodos de un objeto desde otro objeto.

```javascript
const nombre = "Juan"
console.log(nombre.toUpperCase())
```

En este caso, el prototipo de `nombre` es `String`, y por eso podemos acceder a sus métodos.

```javascript
console.log(String.prototype)
```

Esto nos va a mostrar el prototipo de `String`, que es un objeto con todos los métodos que podemos usar en un string.

## Ejemplo de prototipo con clase

```javascript
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
}

const persona = new Persona("Juan", "Perez")

console.log(persona.nombreCompleto())
```

En este caso, nuestro prototipo es la clase `Persona`, y los objetos que creemos a partir de ella van a heredar las propiedades y métodos que definamos en su prototipo.

**Si!** Las clases son prototipos, aunque muchos lenguajes de programación orientados a objetos no lo implementen de esta forma, en JavaScript las clases son prototipos.

## Ejemplo de prototipo con clase y herencia

```javascript
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
  }

  nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, sueldo) {
    super(nombre, apellido)
    this.sueldo = sueldo
  }

  nombreCompleto() {
    return `${super.nombreCompleto()} - ${this.sueldo}`
  }
}

const empleado = new Empleado("Juan", "Perez", 1000)

console.log(empleado.nombreCompleto())
```
