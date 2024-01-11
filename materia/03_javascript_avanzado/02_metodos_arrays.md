# Metodos arrays

Los arrays poseen una serie de métodos que nos permiten realizar operaciones sobre ellos.

Estos nos permiten realizar operaciones de forma más sencilla y legible, aunque al principio puede resultar un poco confuso.

Parte de esta confusión se debe a que los métodos de los arrays reciben como parámetro una función, y esta función es la que se ejecuta sobre cada elemento del array.

Además, algunos métodos retornan un nuevo array, mientras que otros modifican el array original.

# push

El método `push` nos permite agregar un elemento al final del array.

```javascript
const array = ["uno", "dos", "tres"]
array.push("cuatro")
console.log(array)
```

# pop

El método `pop` nos permite eliminar el último elemento del array.

```javascript
const array = ["uno", "dos", "tres"]
array.pop()
console.log(array)
```

# shift

El método `shift` nos permite eliminar el primer elemento del array.

```javascript
const array = ["uno", "dos", "tres"]
array.shift()
console.log(array)
```

# unshift

El método `unshift` nos permite agregar un elemento al principio del array.

```javascript
const array = ["uno", "dos", "tres"]
array.unshift("cero")
console.log(array)
```

# slice

El método `slice` nos permite obtener una porción del array.

Recibe como parámetro la posición inicial y la posición final (opcional).

Este metodo no modifica el array original.

```javascript
const array = ["uno", "dos", "tres"]
const array2 = array.slice(1, 2)
console.log(array)
console.log(array2)
```

## forEach

El método `forEach` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo.

```javascript
const array = ["uno", "dos", "tres"]

array.forEach(function(elemento) {
  console.log(elemento)
})
```

En esta linea `array.forEach(function(elemento) {` es importante notar que la función que se pasa como parámetro recibe como argumento cada elemento del array.

Podemos acceder a la posición del elemento en el array, y al array en sí mismo, pasando más parámetros a la función.

```javascript
const array = ["uno", "dos", "tres"]

array.forEach(function(elemento, posicion, array) {
  console.log(elemento, posicion, array)
})
```

## map

El método `map` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando un nuevo array con los resultados de la función.

```javascript
const array = ["uno", "dos", "tres"]

const array2 = array.map(function(elemento) {
  return elemento.toUpperCase()
})

console.log(array)
console.log(array2)
```

Es una forma más legible de hacer lo siguiente:

```javascript
const array = ["uno", "dos", "tres"]

array.forEach(function(elemento, posicion, array) {
  console.log(elemento, posicion, array)
  array[posicion] = elemento.toUpperCase()
})

console.log(array)
```

## filter

El método `filter` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando un nuevo array con los elementos que cumplan con la condición de la función.

```javascript
const array = [0, 1, 2, 3, 4, 5]

const array2 = array.filter(function(elemento) {
  return elemento >= 3
})

console.log(array)
console.log(array2)
```

## find

El método `find` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando el primer elemento que cumpla con la condición de la función.

```javascript
const array = [0, 1, 2, 3, 4, 5]

const elemento = array.find(function(elemento) {
  return elemento >= 3
})

console.log(array)
console.log(elemento)
```

## findIndex

El método `findIndex` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando la posición del primer elemento que cumpla con la condición de la función.

```javascript
const array = [0, 1, 2, 3, 4, 5]

const posicion = array.findIndex(function(elemento) {
  return elemento >= 3
})

console.log(array)
console.log(posicion)
```

## reduce

El método `reduce` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando un valor único.

```javascript
const array = [0, 1, 2, 3, 4, 5]

const resultado = array.reduce(function(acumulador, elemento) {
  return acumulador + elemento
})

console.log(array)
console.log(resultado)
```

En reduce, los argumentos de la función son el acumulador y el elemento. El acumulador es un valor que inicia en 0, y se va modificando con cada iteración.

## every

El método `every` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando `true` si todos los elementos cumplen con la condición de la función.

```javascript
const array = [0, 1, 2, 3, 4, 5, "6"]

const resultado = array.every(function(elemento) {
  return typeof elemento === "number"
})

console.log(array)
console.log(resultado)
```

## some

El método `some` nos permite iterar sobre un array, ejecutando una función por cada elemento del mismo, y retornando `true` si alguno de los elementos cumple con la condición de la función.

```javascript
const array = [0, 1, 2, 3, 4, 5, "6"]

const resultado = array.some(function(elemento) {
  return typeof elemento === "number"
})

console.log(array)
console.log(resultado)
```

## sort

El método `sort` nos permite ordenar un array.

```javascript
const array = [1, 0, 5, 2, 3, 4, 5, "6"]
console.log(array)
array.sort()
console.log(array)
```

Podemos pasarle una función como parámetro para indicarle cómo ordenar el array.

En esta función, debemos retornar un número negativo si queremos dejar el primer elemento antes que el segundo, un número positivo si queremos dejar el primer elemento después que el segundo, y 0 si queremos dejarlos en el mismo orden.

```javascript
const array = [1, 0, 5, 2, 3, 4, 5, "6"]

array.sort(function(a, b) {
  return a - b
})

console.log(array)
```


