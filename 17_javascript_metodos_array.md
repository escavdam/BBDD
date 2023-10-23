# Métodos de arrays

Los arrays tienen una serie de métodos que nos permiten trabajar con ellos de forma más sencilla.

[MDN Guia](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Indexed_collections#Array_object)

### `Array.isArray()`

Comprueba si un objeto es un array.

```javascript
let lista = [1, 2, 3, 4, 5]
console.log(Array.isArray(lista)) // true
```

### `Array.from()`

Crea un array a partir de un objeto iterable.

```javascript
let lista = Array.from("Hola mundo")
console.log(lista) // ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]
```

### `Array.of()`

Crea un array a partir de los argumentos que le pasemos.

```javascript
let lista = Array.of(1, 2, 3, 4, 5)
console.log(lista) // [1, 2, 3, 4, 5]
```

### `Array.prototype.concat()`

Une dos arrays.

```javascript
let lista1 = [1, 2, 3, 4, 5]
let lista2 = [6, 7, 8, 9, 10]
let lista3 = lista1.concat(lista2)
console.log(lista3) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### `Array.prototype.copyWithin()`

Copia una parte del array a otra parte del mismo array, sobreescribiendo los valores existentes.

```javascript
let lista = [1, 2, 3, 4, 5]
lista.copyWithin(0, 3)
console.log(lista) // [4, 5, 3, 4, 5]
```

### `Array.prototype.entries()`

Devuelve un objeto iterador con los pares clave/valor del array.

```javascript
let lista = [1, 2, 3, 4, 5]
let iterador = lista.entries()
console.log(iterador.next().value) // [0, 1]
console.log(iterador.next().value) // [1, 2]
console.log(iterador.next().value) // [2, 3]
console.log(iterador.next().value) // [3, 4]
console.log(iterador.next().value) // [4, 5]
```

### `Array.prototype.every()`

Comprueba si todos los elementos del array cumplen una condición.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.every((elemento) => elemento > 0)
console.log(resultado) // true
```

### `Array.prototype.fill()`

Rellena el array con un valor.

```javascript
let lista = [1, 2, 3, 4, 5]
lista.fill(0)
console.log(lista) // [0, 0, 0, 0, 0]
```

### `Array.prototype.find()`

Devuelve el primer elemento del array que cumpla una condición.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.find((elemento) => elemento > 3)
console.log(resultado) // 4
```

### `Array.prototype.findIndex()`

Devuelve el índice del primer elemento del array que cumpla una condición.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.findIndex((elemento) => elemento > 3)
console.log(resultado) // 3
```
### `Array.prototype.filter()`

Filtra los elementos del array que cumplan una condición.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.filter((elemento) => elemento > 3)
console.log(resultado) // [4, 5]
```

### `Array.prototype.map()`

Crea un nuevo array con los resultados de la función que le pasemos.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.map((elemento) => elemento * 2)
console.log(resultado) // [2, 4, 6, 8, 10]
```

### `Array.prototype.reduce()`

Reduce el array a un único valor.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.reduce((acumulador, elemento) => acumulador + elemento)
console.log(resultado) // 15
```

### `Array.prototype.reverse()`

Invierte el orden de los elementos del array.

```javascript
let lista = [1, 2, 3, 4, 5]
lista.reverse()
console.log(lista) // [5, 4, 3, 2, 1]
```

### `Array.prototype.slice()`

Extrae una parte del array y devuelve un nuevo array.

```javascript
let lista = [1, 2, 3, 4, 5]
let resultado = lista.slice(2, 4)
console.log(resultado) // [3, 4]
```