# Funciones anónimas

Una función anónima es una función que no tiene nombre. Se utilizan a menudo como valores de otras funciones, como en el siguiente ejemplo:

```javascript
let lista = [1, 2, 3, 4, 5]

lista.forEach((elemento) => {
  console.log(elemento)
})
```

Las funciones anónimas se utilizan a menudo como callbacks, que son funciones que se pasan como argumentos a otras funciones.

```javascript
function saludar(nombre) {
  console.log(`Hola, me llamo ${nombre}`)
}

function despedir(nombre) {
  console.log(`Adiós, me llamo ${nombre}`)
}

function saludarDespedir(nombre, callback) {
  callback(nombre)
}

saludarDespedir("Juan", saludar) // Hola, me llamo Juan
saludarDespedir("Juan", despedir) // Adiós, me llamo Juan
```

Las funciones anónimas también se utilizan a menudo en funciones de orden superior, como `map()` o `filter()`.

```javascript
let lista = [1, 2, 3, 4, 5]

let resultado = lista.map((elemento) => elemento * 2)
console.log(resultado) // [2, 4, 6, 8, 10]
```

## Funciones flecha

Las funciones flecha son una forma más corta de escribir funciones anónimas.

```javascript
let lista = [1, 2, 3, 4, 5]

lista.forEach((elemento) => {
  console.log(elemento)
})
```

```javascript
let lista = [1, 2, 3, 4, 5]

lista.forEach(elemento => console.log(elemento))
```

```javascript
let lista = [1, 2, 3, 4, 5]

let resultado = lista.map(elemento => elemento * 2)
console.log(resultado) // [2, 4, 6, 8, 10]
```