# Objetos globales

[MDN Referencia](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects)

Los objetos globales son objetos que están disponibles en cualquier parte del código, son parte del lenguaje y no necesitan ser importados.

Los objetos globales incluyen metodos y propiedades que nos permiten realizar tareas comunes, como por ejemplo:

- `console`: Nos permite mostrar mensajes en la consola.
- `Math`: Nos permite realizar operaciones matemáticas.
- `Date`: Nos permite trabajar con fechas.
- `String`: Nos permite trabajar con strings.
- `Number`: Nos permite trabajar con números.

## console

La consola es una herramienta que nos permite mostrar mensajes en la una terminal o en el navegador.

En el navegador, podemos mostrar mensajes en la consola con el método `console.log`.

```javascript
console.log("Hola Mundo")
```

Tambien podemos mostrar mensajes de error con el método `console.error`.

```javascript
console.error("Ha ocurrido un error")
```

Representar objetos como tablas con el método `console.table`.

```javascript
let persona = {
  nombre: "Antonio",
  edad: 24,
  ciudad: "Sevilla"
}

console.table(persona)
```

Medir el tiempo de ejecución de un código con el método `console.time`.

```javascript
console.time("Tiempo de ejecución")
let a = 0
for(let i = 0; i < 1000; i++) {
  // código
 a++
}

console.timeEnd("Tiempo de ejecución")
```

## Math

El objeto `Math` nos permite realizar operaciones matemáticas.

```javascript
Math.PI // 3.141592653589793
Math.abs(-7.8) // 7.8
Math.ceil(7.2) // 8
Math.floor(7.8) // 7
Math.round(7.2) // 7
Math.round(7.8) // 8
Math.sqrt(81) // 9
Math.pow(2, 3) // 8
Math.sign(-7.8) // -1
Math.sign(7.8) // 1
Math.random() // 0.123456789
Math.random() * 100 // 12.3456789
Math.round(Math.random() * 100) // 12
```

## Date

El objeto `Date` nos permite trabajar con fechas.

```javascript
let fecha = new Date()

fecha.getDate() // 12
fecha.getDay() // 1
fecha.getFullYear() // 2023
fecha.getHours() // 12
fecha.getMilliseconds() // 123
fecha.getMinutes() // 34
fecha.getMonth() // 0
fecha.getSeconds() // 56
fecha.getTime() // 1578842096123

```

## String

El objeto `String` nos permite trabajar con strings.

```javascript
let nombre = "Antonio"

nombre.length // 7
nombre.toLowerCase() // antonio
nombre.toUpperCase() // ANTONIO
nombre.charAt(0) // A
nombre.charAt(1) // n
nombre.charAt(2) // t
nombre.charAt(3) // o
nombre.charAt(4) // n
nombre.charAt(5) // i
nombre.charAt(6) // o
nombre.charAt(7) // ""
nombre.charAt(8) // ""

let nombre2 = String.fromCharCode(65, 110, 116, 111, 110, 105, 111)
nombre2 // Antonio
```

## Number

El objeto `Number` nos permite trabajar con números.

```javascript
let numero = 7.8

numero.toFixed(0) // 8
numero.toFixed(1) // 7.8
numero.toFixed(2) // 7.80
numero.toFixed(3) // 7.800
numero.toFixed(4) // 7.8000
numero.toFixed(5) // 7.80000
numero.toFixed(6) // 7.800000
numero.toFixed(7) // 7.8000000
numero.toFixed(8) // 7.80000000
numero.parseInt() // 7
numero.parseFloat() // 7.8
```


## Object

El objeto `Object` nos permite trabajar con objetos.

```javascript
let persona = {
  nombre: "Antonio",
  edad: 24,
  ciudad: "Sevilla"
}

Object.keys(persona) // ["nombre", "edad", "ciudad"]

Object.values(persona) // ["Antonio", 24, "Sevilla"]

Object.entries(persona) // [["nombre", "Antonio"], ["edad", 24], ["ciudad", "Sevilla"]]
```

## Array

El objeto `Array` nos permite trabajar con arrays.

```javascript
let numeros = [1, 2, 3, 4, 5]

numeros.length // 5

numeros.push(6) // [1, 2, 3, 4, 5, 6]

numeros.pop() // [1, 2, 3, 4, 5]

numeros.unshift(0) // [0, 1, 2, 3, 4, 5]

numeros.shift() // [1, 2, 3, 4, 5]

numeros.indexOf(3) // 2

numeros.reverse() // [5, 4, 3, 2, 1]

numeros.join() // "5,4,3,2,1"

numeros.join(" ") // "5 4 3 2 1"

numeros.join(" - ") // "5 - 4 - 3 - 2 - 1"

numeros.join(" | ") // "5 | 4 | 3 | 2 | 1"

numeros.join(" | ").split(" | ") // ["5", "4", "3", "2", "1"]
```

## JSON

El objeto `JSON` nos permite trabajar con JSON.

```javascript

let persona = {
  nombre: "Antonio",
  edad: 24,
  ciudad: "Sevilla"
}

JSON.stringify(persona) // "{"nombre":"Antonio","edad":24,"ciudad":"Sevilla"}"

let personaJSON = JSON.stringify(persona)

JSON.parse(personaJSON) // {nombre: "Antonio", edad: 24, ciudad: "Sevilla"}
```

## window

El objeto `window` es el objeto global del navegador, es decir, es el objeto que contiene todos los objetos globales.

```javascript
window.console.log("Hola Mundo")
window.Math.PI // 3.141592653589793

