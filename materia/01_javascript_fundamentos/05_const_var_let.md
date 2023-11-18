# Variables y constantes en JavaScript

[MDN const](https://developer.mozilla.org/es/docs/Glossary/Constant)
[MDN var](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)
[MDN let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)

Ahora que sabemos los tipos de datos que podemos encontrar en JavaScript, vamos a ver como podemos almacenarlos en variables y constantes para usarlos en nuestro código.

Básicamente, podemos crear datos de tres formas:

| Característica | const | let | var |
| -------------- | ----- | --- | --- |
| Tipo de dato   | constante | variable | variable |
| Alcance        | bloque | bloque | función |
| Mutabilidad    | no | si | si |
| Hoisting       | no | no | si |
| Temporal Dead Zone | si | si | no |

Por norma general, usaremos `const` para crear constantes y `let` para crear variables.
`var` es la forma antigua de crear variables, que no deberíamos usar por estar en desuso.

El alcance de una variable o constante es el ámbito en el que esta es accesible, es decir, donde podemos usarla.

- **Globales**: Son accesibles desde cualquier parte del código.
- **Locales**: Son accesibles desde el bloque en el que se han creado.
- **Bloque**: Son accesibles desde el bloque en el que se han creado.
- **Función**: Son accesibles desde la función en la que se han creado.

En el caso de JavaScript, las variables y constantes creadas con `let` y `const` tienen un alcance de bloque, mientras que las creadas con `var` tienen un alcance de función y son accesibles desde cualquier parte del código, esto es lo que se conoce como **hoisting**.

El hoisting es el comportamiento por defecto de JavaScript de mover las **declaraciones** de variables y funciones a la parte superior de su ámbito actual.

```javascript
// JavaScript
console.log(a) // undefined
var a = 1
console.log(a) // 1
```

La zona temporal muerta o **Temporal Dead Zone** es el comportamiento por defecto de JavaScript de lanzar un error si intentamos acceder a una variable o constante antes de que esta sea declarada.

```javascript
// JavaScript
console.log(a) // ReferenceError
let a = 1
console.log(a) // 1
```

```javascript
saludar()

function saludar() {
  console.log(saludo) // ReferenceError
  const saludo = "Hola!"
  console.log(saludo)
}
```

## typeof

Para saber el tipo de dato de una variable o constante, podemos usar el operador `typeof`.

```javascript
// JavaScript
let a = 1
let b = "hello"
const c = true
console.log(typeof a) // number
console.log(typeof b) // string
console.log(typeof c) // boolean
```

