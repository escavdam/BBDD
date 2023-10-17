# Clases

Las clases en JavaScript son una forma de crear objetos con los mismos atributos y métodos. Puedes pensar en una clase como una plantilla que define algo.

Vamos a fijarnos en un ejemplo para entenderlo mejor.

```javascript
const usuario_0 = {
    nombre: "Antonio",
    edad: 24,
    ciudad: "Sevilla",
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const usuario_1 = {
    nombre: "María",
    edad: 25,
    ciudad: "Madrid",
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const usuario_2 = {
    nombre: "Juan",
    edad: 26,
    ciudad: "Barcelona",
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

```

Si tenemos que crear varios objetos que comparten características, como los usuarios de un sistema, podemos crear una clase que defina esos atributos y métodos y luego crear los objetos a partir de esa clase.

```javascript
class Usuario {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre
        this.edad = edad
        this.ciudad = ciudad
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const usuario_0 = new Usuario("Antonio", 24, "Sevilla")
const usuario_1 = new Usuario("María", 25, "Madrid")
const usuario_2 = new Usuario("Juan", 26, "Barcelona")
```

## Estructura de una clase en JavaScript

Las clases en JavaScript se definen con la palabra clave `class` seguida del nombre de la clase.

El cuerpo de la clase se define entre llaves `{}`.

```javascript
class Usuario {
    // código
}
```

El constructor de la clase se define con el método `constructor`.
El constructor de una clase se ejecuta cuando se crea un objeto a partir de esa clase, podemos pasar argumentos al constructor para inicializar los atributos del objeto.

```javascript
class Usuario {
    constructor() {
        // este código se ejecuta cuando se crea un objeto a partir de new Usuario()
    }
}
```

Los atributos de la clase se definen dentro del constructor con la palabra clave `this`.
Estos atributos son propiedades del objeto y se pueden acceder desde cualquier método de la clase.

```javascript
class Usuario {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre
        this.edad = edad
        this.ciudad = ciudad
    }
}

const usuario_0 = new Usuario("Antonio", 24, "Sevilla")
console.log(usuario_0.nombre, usuario_0.edad, usuario_0.ciudad) // Antonio
```

