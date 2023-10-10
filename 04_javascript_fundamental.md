# Fundamentos de JavaScript

## Variables y constantes
Las variables y constantes son espacios de memoria que se utilizan para almacenar un valor y poderlo procesar.

Estas tienen un **nombre**, un **tipo** de dato y un **valor** que debemos asignar.

Para crearlas, debemos declararlas:

```javascript
// JavaScript
let a
var b
const c //esto dará error
```
**Recordad**: Una variable puede cambiar de valor, mientras que una constante no, debemos de asignar un valor a la vez que declaramos la constante.

Una vez creadas, podemos asignarles un valor:

```javascript
let a
var b
const c = true

a = 1
b = "hello"
c = false // esto dara error
```

## Tipos de datos
Ya hemos visto que dependiendo del contexto en que nos encontremos, los tipos de datos pueden ser diferentes. En JavaScript encontraremos la siguiente clasificación de datos:

- Primitivos
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol
  - BigInt
- Compuestos
  - Object

### Primitivos
Vamos a ver los datos básicos de JavaScript, los primitivos.

#### Boolean
El tipo de dato booleano es un tipo de dato que solo puede tener dos valores: `true` o `false`.

```javascript
let a = true
let b = false
```

#### Number
El tipo de dato numérico es un tipo de dato que puede tener cualquier valor numérico, ya sea entero o decimal.

```javascript
let a = 1
let b = 1.5
```

#### String
El tipo de dato string es un tipo de dato que puede tener cualquier valor de texto.

```javascript
let a = "hello"
let b = 'world'
```

Podemos utilizar tanto comillas simples como comillas dobles, pero debemos ser consistentes.

Ademas, podemos usar comillas invertidas para crear **plantillas de texto** (template literals).

```javascript
let nombre = "Antonio"
let saludo = `hello ${nombre}`
console.log(saludo)
```

#### Null
El tipo de dato null es un tipo de dato que solo puede tener un valor: `null`.
Este tipo de dato se utiliza para indicar que una variable o constante no tiene valor, pero está declarada.

```javascript
let a = null
```

#### Undefined
El tipo de dato undefined es un tipo de dato que solo puede tener un valor: `undefined`.
Este tipo de dato se utiliza para indicar que una variable o constante **no** ha sido declarada.

```javascript
console.log(a)
```

#### Symbol
El tipo de dato symbol es un tipo de dato que se utiliza para crear identificadores únicos.

Este dato se utiliza en casos muy concretos, como por ejemplo, para crear propiedades privadas en los objetos.

Por ahora, no os preocupeis demasiado por el.

#### BigInt
El tipo de dato bigint es un tipo de dato que se utiliza para representar números enteros muy grandes.

Si trabajas en un proyecto donde tengas que trabajar con números muy grandes, puede que te sea útil.

### Datos compuestos
JavaScript solo tiene un tipo de dato compuesto, el objeto.
Cualquier otro tipo de dato que no sea primitivo, es un objeto en JavaScript.

#### Object
El tipo de dato object es un tipo de dato que se utiliza para representar cualquier tipo de dato compuesto.

Utiliza una estructura de clave-valor, donde la clave es un string y el valor puede ser cualquier tipo de dato.

Cada uno de estos valores se denomina **propiedad** del objeto.

```javascript
let persona = {
  nombre: "Antonio", //propiedad nombre
  edad: 24 //propiedad edad
}
```
Estas propiedades pueden ser accedidas mediante la notación de punto (`objeto.propiedad`) o mediante la notación de corchetes (`objeto["propiedad"]`).

```javascript
let persona = {
  nombre: "Antonio",
  edad: 24
}
console.log(persona.nombre) // Antonio
console.log(persona["edad"]) // 24
```
Además, los objetos no solo pueden tener propiedades, sino que también pueden tener **métodos**.

Los métodos son funciones que se ejecutan en el contexto del objeto, y pueden acceder a las propiedades del objeto mediante la palabra clave `this`.

```javascript
let persona = {
  nombre: "Antonio",
  edad: 24,
  saludar: function() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`)
  }
}