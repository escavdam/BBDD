# Metodos y propiedades de los strings

Los strings son objetos, por lo que tienen propiedades y métodos.

[Strings MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
## Propiedades

### length

La propiedad `length` nos devuelve la longitud del string.

```javascript

let a = "Hola"
console.log(a.length) // 4
```

## Métodos

### charAt

El método `charAt` nos devuelve el carácter en la posición indicada.

```javascript
let a = "Hola"
console.log(a.charAt(0)) // H
console.log(a.charAt(1)) // o
console.log(a.charAt(2)) // l
console.log(a.charAt(3)) // a
```

### concat

El método `concat` nos permite concatenar dos strings.

```javascript
let a = "Hola"
let b = "Mundo"

console.log(a.concat(b)) // HolaMundo
```

### includes

El método `includes` nos permite saber si un string contiene otro string.

```javascript

let a = "Hola Mundo"

console.log(a.includes("Hola")) // true
console.log(a.includes("Mundo")) // true
console.log(a.includes("Adios")) // false
```

### indexOf

El método `indexOf` nos devuelve la posición de la primera ocurrencia de un string dentro de otro string.

```javascript
let a = "Hola Mundo"

console.log(a.indexOf("Hola")) // 0
console.log(a.indexOf("Mundo")) // 5
console.log(a.indexOf("Adios")) // -1
```

### toLowerCase

El método `toLowerCase` nos devuelve el string en minúsculas.

```javascript
let a = "Hola Mundo"

console.log(a.toLowerCase()) // hola mundo
```

### toUpperCase

El método `toUpperCase` nos devuelve el string en mayúsculas.

```javascript
let a = "Hola Mundo"

console.log(a.toUpperCase()) // HOLA MUNDO
```

### trim

El método `trim` nos devuelve el string sin espacios al principio ni al final.

```javascript
let a = " Hola Mundo "

console.log(a.trim()) // Hola Mundo
```

### split

El método `split` nos devuelve un array de strings, separando el string original por el carácter que le pasemos como argumento.

```javascript
let a = "Hola Mundo"

console.log(a.split(" ")) // ["Hola", "Mundo"]
console.log(a.split("")) // ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"]
```

```javascript
const email = "user231091@gmail.com"
const username = email.split("@")[0]
const domain = email.split("@")[1]
console.log(username) // user231091
```

### replace

El método `replace` nos devuelve un string reemplazando el primer argumento por el segundo.

```javascript
let a = "Hola Mundo"
let b = "Hola mundo Hola"
console.log(a.replace("Hola", "Adios")) // Adios Mundo
console.log(b.replace("Hola", "Adios")) // Adios mundo Hola
```

### slice

El método `slice` nos devuelve un string desde la posición del primer argumento hasta la posición del segundo argumento.

```javascript
let a = "Hola Mundo"

console.log(a.slice(0, 4)) // Hola
console.log(a.slice(5, 10)) // Mundo
```

### substr

El método `substr` nos devuelve un string desde la posición del primer argumento, con la longitud del segundo argumento.

```javascript
let a = "Hola Mundo"

console.log(a.substr(0, 4)) // Hola
console.log(a.substr(5, 5)) // Mundo
```

### substring

El método `substring` nos devuelve un string desde la posición del primer argumento hasta la posición del segundo argumento.

```javascript
let a = "Hola Mundo"

console.log(a.substring(0, 4)) // Hola
console.log(a.substring(5, 10)) // Mundo
```

### repeat

El método `repeat` nos devuelve un string repitiendo el string original tantas veces como le indiquemos en el argumento.

```javascript
let a = "Hola Mundo"

console.log(a.repeat(3)) // Hola MundoHola MundoHola Mundo
```

### match

El método `match` nos devuelve un array con las coincidencias de una expresión regular.

```javascript
let a = "Hola Mundo"

console.log(a.match(/o/g)) // ["o", "o"]
```

### search

El método `search` nos devuelve la posición de la primera coincidencia de una expresión regular.

```javascript
let a = "Hola Mundo"

console.log(a.search(/a/)) // 3
```

### startsWith

El método `startsWith` nos devuelve `true` si el string empieza por el argumento que le pasemos.

```javascript
let a = "Hola Mundo"

console.log(a.startsWith("Hola")) // true
console.log(a.startsWith("Mundo")) // false
```

### endsWith

El método `endsWith` nos devuelve `true` si el string termina por el argumento que le pasemos.

```javascript
let a = "Hola Mundo"

console.log(a.endsWith("Hola")) // false
console.log(a.endsWith("Mundo")) // true
```

### padStart

El método `padStart` nos devuelve el string rellenado con el carácter que le pasemos como argumento hasta la longitud que le pasemos como argumento.

```javascript
let a = "Hola Mundo"

console.log(a.padStart(15, "a")) // aaaaaHola Mundo
```

### padEnd

El método `padEnd` nos devuelve el string rellenado con el carácter que le pasemos como argumento hasta la longitud que le pasemos como argumento.

```javascript
let a = "Hola Mundo"

console.log(a.padEnd(15, "a")) // Hola Mundoaaaaa
```


