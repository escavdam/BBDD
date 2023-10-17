# Condicionales

Los elementos condicionales nos permiten ejecutar código en función de si se cumple o no una condición, alterando el flujo de ejecución del programa.


[MDN Guia](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores)

## Condicional if

```javascript
let a = 1
let b = 2

if (a > b) {
  console.log("a es mayor que b")
}
```

## Condicional if-else

```javascript
let a = 1

if (a > 2) {
  console.log("a es mayor que 2")
} else {
  console.log("a es menor o igual que 2")
}
```

## Condicional if-else if-else

```javascript
let a = 1

if (a > 2) {
  console.log("a es mayor que 2")
} else if (a < 2) {
  console.log("a es menor que 2")
} else {
  console.log("a es igual que 2")
}
```

## Condicional switch

```javascript
let a = 1

switch (a) {
  case 1:
    console.log("a es igual que 1")
    break
  case 2:
    console.log("a es igual que 2")
    break
  default:
    console.log("a no es ni 1 ni 2")
}
```

## Operador ternario

```javascript
let a = 1

let b = a > 2 ? "a es mayor que 2" : "a es menor o igual que 2"
console.log(b)
```

## Operadores lógicos
Muchas veces necesitaremos comprobar más de una condición a la vez. Para ello, podemos utilizar los operadores lógicos `&&` (AND) y `||` (OR).


### Operador AND

```javascript
let a = 1
let b = 2

if (a > 0 && b > 0) {
  console.log("a y b son mayores que 0")
}
```

### Operador OR

```javascript
let a = 1
let b = 2

if (a > 0 || b > 0) {
  console.log("a o b son mayores que 0")
}
```

## Operadores de comparación

### Operador de igualdad `==` y desigualdad `!=`

```javascript
let a = 1
let b = 2

if (a == b) {
  console.log("a es igual que b")
}
```

### Operador de desigualdad

```javascript
let a = 1
let b = 2

if (a != b) {
  console.log("a es distinto que b")
}
```

### Operador de igualdad estricta `===` y desigualdad estricta `!==`

```javascript
let a = 1
let b = "1"

if (a === b) {
  console.log("a es igual que b")
}
```

### Operador de desigualdad estricta

```javascript
let a = 1
let b = "1"

if (a !== b) {
  console.log("a es distinto que b")
}
```

### Operador mayor que `>` y menor que `<`

```javascript
let a = 1
let b = 2

if (a < b) {
  console.log("a es menor que b")
}
```

### Operador mayor o igual que `>=` y menor o igual que `<=`

```javascript
let a = 1
let b = 2

if (a <= b) {
  console.log("a es menor o igual que b")
}
```

## Operadores aritméticos

### Operador suma `+`

```javascript
let a = 1
let b = 2

let c = a + b
console.log(c) // 3
```

### Operador resta `-`

```javascript
let a = 1
let b = 2

let c = a - b
console.log(c) // -1
```

### Operador multiplicación `*`

```javascript
let a = 1
let b = 2

let c = a * b
console.log(c) // 2
```

### Operador división `/`

```javascript
let a = 1
let b = 2

let c = a / b
console.log(c) // 0.5
```

### Operador módulo `%`

```javascript
let a = 1
let b = 2
let c = 3

let d = a + b + c

if (d % 2 == 0) {
  console.log("La suma de a, b y c es par")
} else {
  console.log("La suma de a, b y c es impar")
}
```

### Operador de incremento `++`

```javascript
let a = 1

a++
console.log(a) // 2
```

### Operador de decremento `--`

```javascript
let a = 1

a--
console.log(a) // 0
```

## Operadores de asignación

### Operador de asignación simple `=`

```javascript
let a = 1
```

### Operador de asignación de suma `+=`

```javascript
let a = 1
let b = 2

a += b
console.log(a) // 3
```

### Operador de asignación de resta `-=`

```javascript
let a = 1
let b = 2

a -= b
console.log(a) // -1
```

### Operador de asignación de multiplicación `*=`

```javascript
let a = 1

a *= 2

console.log(a) // 2
```

### Operador de asignación de división `/=`

```javascript
let a = 1

a /= 2

console.log(a) // 0.5
```

### Operador de asignación de módulo `%=`

```javascript
let a = 1

a %= 2

console.log(a) // 1
```