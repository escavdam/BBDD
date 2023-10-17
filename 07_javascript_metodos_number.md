# Metodos y propiedades number

Los números son objetos, por lo que tienen propiedades y métodos.

[Number MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)
## Propiedades

### MAX_VALUE

La propiedad `MAX_VALUE` nos devuelve el valor máximo que puede almacenar un número en JavaScript.

```javascript
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
```

### MIN_VALUE

La propiedad `MIN_VALUE` nos devuelve el valor mínimo que puede almacenar un número en JavaScript.

```javascript
console.log(Number.MIN_VALUE) // 5e-324
```

### NaN

La propiedad `NaN` nos devuelve el valor `NaN` (Not a Number).

```javascript
console.log(Number.NaN) // NaN
```

### NEGATIVE_INFINITY

La propiedad `NEGATIVE_INFINITY` nos devuelve el valor `-Infinity`.

```javascript
console.log(Number.NEGATIVE_INFINITY) // -Infinity
```

### POSITIVE_INFINITY

La propiedad `POSITIVE_INFINITY` nos devuelve el valor `Infinity`.

```javascript
console.log(Number.POSITIVE_INFINITY) // Infinity
```

## Métodos

### isFinite

El método `isFinite` nos permite saber si un número es finito.

```javascript
console.log(Number.isFinite(1)) // true
console.log(Number.isFinite(Infinity)) // false
```

### isInteger

El método `isInteger` nos permite saber si un número es entero.

```javascript
console.log(Number.isInteger(1)) // true
console.log(Number.isInteger(1.5)) // false
```

### isNaN

El método `isNaN` nos permite saber si un número es `NaN`.

```javascript
console.log(Number.isNaN(1)) // false
console.log(Number.isNaN(NaN)) // true
```

### isSafeInteger

El método `isSafeInteger` nos permite saber si un número es un entero seguro.

```javascript
console.log(Number.isSafeInteger(1)) // true
console.log(Number.isSafeInteger(9007199254740991)) // true
console.log(Number.isSafeInteger(9007199254740992)) // false
```

### parseFloat

El método `parseFloat` nos permite convertir un string a un número decimal.

```javascript
console.log(Number.parseFloat("1")) // 1
console.log(Number.parseFloat("1.5")) // 1.5
```

### parseInt

El método `parseInt` nos permite convertir un string a un número entero.

```javascript
console.log(Number.parseInt("1")) // 

console.log(Number.parseInt("1.5")) // 1

```



