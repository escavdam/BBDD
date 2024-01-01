# ¿Que es una clase?

Una clase es una plantilla para crear objetos, que contiene los atributos y métodos que van a tener los objetos creados a partir de ella. Tan sólo define la estructura de los objetos, pero no contiene datos concretos, estos datos se definen al `instanciar` una clase.

Anteriormente hicimos una funcion factoria para crear objetos de tipo Persona:

```javascript
function crearPersona(nombre, apellido, edad) {
  return {
    nombre,
    apellido,
    edad,
    saludo() {
      return `${this.nombre} ${this.apellido}`
    },
    esMayorDeEdad() {
      return this.edad >= 18
    }
  }
}

const persona1 = crearPersona("Juan", "Perez", 20)
const persona2 = crearPersona("Maria", "Gomez", 15)
```

Esta forma de crear objetos es muy común, pero también nos plantea varios problemas de rendimiento en caso de que necesitemos crear muchos objetos, además, no es muy escalable, ya que si necesitamos agregar un nuevo método, tenemos que hacerlo en cada objeto.

Para solucionar estos problemas, podemos utilizar las clases.

## Class

Las clases nos permiten crear objetos de forma más eficiente, y nos permiten agregar nuevos métodos y atributos de forma más sencilla. Es importante tener en cuenta que las clases no son un nuevo tipo de dato, sino que son una forma de crear objetos.

Para crear una clase, utilizamos la palabra reservada `class`, seguida del nombre de la clase, y entre llaves, los atributos y métodos que va a tener la clase.

```javascript
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludo() {
    return `${this.nombre} ${this.apellido}`
  }

  esMayorDeEdad() {
    return this.edad >= 18
  }
}
```

La clase `Persona` tiene tres atributos: `nombre`, `apellido` y `edad`, y dos métodos: `saludo` y `esMayorDeEdad`.

El método `constructor` es un método especial que se ejecuta al instanciar una clase, y nos permite inicializar los atributos de la clase, que estarán disponibles en todos los métodos de la clase, mediante la palabra reservada `this`.

# Crear objetos a partir de clases

Para crear un objeto a partir de una clase, utilizamos la palabra reservada `new`, seguida del nombre de la clase, y entre paréntesis, los argumentos que recibe el método `constructor`.

```javascript
const persona1 = new Persona("Juan", "Perez", 20)
const persona2 = new Persona("Maria", "Gomez", 15)
```
Ahora podemos usar cualquier metodo de la clase en los objetos creados a partir de ella.

```javascript
console.log(persona1.saludo())
console.log(persona2.saludo())
console.log(persona1.esMayorDeEdad())
console.log(persona2.esMayorDeEdad())
```

# Herencia

La herencia es un mecanismo que nos permite crear nuevas clases a partir de otras clases, y heredar los atributos y métodos de la clase padre.

Vamos a ver la siguiente clase:

```javascript
class Recipiente {
  constructor(material, capacidad) {
    this.material = material
    this.capacidad = capacidad
    this.contenido = 0
  }

  llenar() {
    this.contenido = this.capacidad
  }

  vaciar() {
    this.contenido = 0
  }

  beber() {
    this.contenido -= 1
  }

  mostrarContenido() {
    console.log(this.contenido)
  }
}

class Botella extends Recipiente {
  constructor(material, capacidad, tapa) {
    super(material, capacidad)
    this.tapa = tapa
  }
  beber() {
    if (this.tapa) {
      console.log("No se puede beber, la botella está tapada")
    } else {
      super.beber()
    }
  }
  destapar() {
    this.tapa = false
  }

  tapar() {
    this.tapa = true
  }
}

```

La clase `Recipiente` tiene cuatro atributos: `material`, `capacidad`, `contenido` y `tapa`, y cuatro métodos: `llenar`, `vaciar`, `beber` y `mostrarContenido`.

La clase `Botella` hereda de la clase `Recipiente`, y tiene un atributo adicional: `tapa`, y dos métodos adicionales: `destapar` y `tapar`. Además, el método `beber` de la clase `Botella` se sobreescribe, y se agrega una validación para verificar si la botella está tapada o no.

Para heredar de una clase, utilizamos la palabra reservada `extends`, seguida del nombre de la clase de la que queremos heredar.

El método `constructor` de la clase `Botella` utiliza la palabra reservada `super`, que nos permite llamar al método `constructor` de la clase padre (en este caso `Recipiente`), y pasarle los argumentos que recibe.

# Argumentos por defecto

Los argumentos por defecto nos permiten asignar un valor por defecto a los argumentos de una función, en caso de que no se le pase un valor al llamarla.

```javascript
function repeat(str = "texto de ejemplo", times = 2) {
  let result = ""
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}
console.log(repeat())
console.log(repeat("Hola"))
console.log(repeat("Hola", 3))
console.log(repeat("Hola", 8))
```

En las clases también podemos utilizar argumentos por defecto, tanto en el método `constructor` como en los demás métodos.

```javascript
class Persona {
  constructor(nombre = "Juan", apellido = "Perez", edad = 20) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  saludo() {
    return `${this.nombre} ${this.apellido}`
  }

  esMayorDeEdad() {
    return this.edad >= 18
  }
}

const persona1 = new Persona()
const persona2 = new Persona("Maria", "Gomez", 15)
```

# Getters y setters

Los getters y setters son métodos especiales que nos permiten acceder y modificar los atributos de una clase, respectivamente.

```javascript

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }

  set nombreCompleto(nombreCompleto) {
    const [nombre, apellido] = nombreCompleto.split(" ")
    this.nombre = nombre
    this.apellido = apellido
  }

  get esMayorDeEdad() {
    return this.edad >= 18
  }

  set esMayorDeEdad(esMayorDeEdad) {
    if (esMayorDeEdad) {
      this.edad = 18
    } else {
      this.edad = 17
    }
  }
}

const persona1 = new Persona("Juan", "Perez", 20)
console.log(persona1.nombreCompleto)
persona1.nombreCompleto = "Maria Gomez"
console.log(persona1.nombreCompleto)
console.log(persona1.esMayorDeEdad)
persona1.esMayorDeEdad = false
console.log(persona1.esMayorDeEdad)
```

Los getters y setters se definen como métodos, pero se acceden como atributos, sin utilizar paréntesis. Los getters se utilizan para obtener el valor de un atributo, y los setters se utilizan para modificar el valor de un atributo, esto nos da un mayor control sobre los atributos de una clase con una sintaxis más sencilla.

# Métodos estáticos

Los métodos estáticos son métodos que se pueden utilizar sin necesidad de instanciar una clase, y se definen utilizando la palabra reservada `static`.

```javascript
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  static crear(nombre, apellido, edad) {
    return new Persona(nombre, apellido, edad)
  }

  saludo() {
    return `${this.nombre} ${this.apellido}`
  }

  esMayorDeEdad() {
    return this.edad >= 18
  }
}

const persona1 = Persona.crear("Juan", "Perez", 20)
const persona2 = Persona.crear("Maria", "Gomez", 15)
```

Los métodos estáticos se definen como métodos, pero se acceden como atributos, sin utilizar paréntesis. Los métodos estáticos se utilizan para crear funciones que no dependan de una instancia de la clase, y que puedan ser utilizadas sin necesidad de instanciar la clase.

Esto es útil para crear funciones que no dependan de una instancia de la clase, y que puedan ser utilizadas sin necesidad de instanciar la clase.

