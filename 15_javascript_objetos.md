# Objetos

Los objetos en javascript son colecciones de propiedades, que son pares de clave y valor.
Además, los objetos pueden tener métodos, que son funciones que pertenecen al objeto.

[MDN Guia](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)

## Crear un objeto

Crear un objeto es muy fácil, solo tenemos que declarar una variable y asignar sus propiedades entre llaves `{}`, separadas por comas.

```javascript
let miObjeto = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3"
}
```

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Game Dev",
  saludar: function() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellidos}`)
    }
  cumplirAños: function() {
        this.edad++
    }
}
```

## Acceder a las propiedades de un objeto

Para acceder a las propiedades de un objeto, podemos usar la notación de puntos `.` o la notación de corchetes `[]`.

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Estudiante"
}

console.log(usuario.nombre) // Juan
console.log(usuario["profesión"]) // Estudiante
usuario.profesion = "Game Dev"
console.log(usuario.profesion) // Game Dev
```

## Añadir propiedades a un objeto

Aunque un objeto ya esté creado, podemos añadirle propiedades en cualquier momento.

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Estudiante"
}

usuario.ciudad = "Sevilla"
console.log(usuario.ciudad) // Sevilla
```

> **Recuerda** cuando almacenamos un objeto en una variable, lo que estamos almacenando es una **referencia** al objeto, no el objeto en sí.
>
> Esto quiere decir que si asignamos una variable a otra, ambas variables apuntarán al mismo objeto.
>
> Esto hace que no podamos comparar objetos con el operador `===`, ya que este operador compara si dos variables apuntan al mismo objeto, no si los objetos son iguales.
>
> En cuanto al operador `==`, este compara si dos variables apuntan al mismo objeto, pero si no es así, compara si los objetos son iguales.
>
> Con clases y funciones, podemos crear objetos que sean iguales, pero que no sean el mismo objeto.

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Estudiante"
}

let usuario2 = usuario
console.log(usuario === usuario2) // true
console.log(usuario == usuario2) // true
```

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Estudiante"
}

let usuario2 = {
    nombre: "Juan",
    apellidos: "García",
    edad: 25,
    profesión: "Estudiante"
}

console.log(usuario === usuario2) // false
console.log(usuario == usuario2) // false

```

