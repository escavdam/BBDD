# Bucles

Los bucles son estructuras de control que nos permiten ejecutar un bloque de código varias veces.

## Bucle for

El bucle `for` es el bucle más utilizado en JavaScript. Se utiliza para ejecutar un bloque de código un número determinado de veces.

La estructura de un bucle `for` es la siguiente:
```javascript
for(inicio; condicion; incremento) {
  // código
}
```

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

Podemos utilizar el bucle `for` para recorrer un array:

```javascript
let a = [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
  console.log(a[i])
}
```

## Bucle while

El bucle `while` es un bucle que se ejecuta mientras se cumpla una condición.

La estructura de un bucle `while` es la siguiente:

```javascript   
while(condicion) {
  // código
}
```

> **Recuerda** que la condición debe ser una expresión que devuelva un valor booleano.
> Tu código se ejecutará mientras la condición sea `true`.
> Debes tener cuidado de no crear un bucle infinito, asegurate que durante la ejecución del bucle la condición se vuelve `false` en algún momento.

```javascript
while(true){
    console.log("Hola")
}
```

Este bucle se ejecutará infinitamente, ya que la condición siempre será `true`.

## Bucle do while

El bucle `do while` es un bucle que se ejecuta mientras se cumpla una condición, pero a diferencia del bucle `while`, el bucle `do while` se ejecuta al menos una vez.

La estructura de un bucle `do while` es la siguiente:

```javascript

do {
  // código
} while(condicion)
```

## Bucle for...of

El bucle `for...of` es un bucle que nos permite recorrer un array.

La estructura de un bucle `for...of` es la siguiente:

```javascript
for(let variable of array) {
  // código
}
```

```javascript
let emojis = ["🐶", "🐱", "🐭", "🐹", "🐰"]
for(let emoji of emojis) {
  console.log(emoji)
}
```

## Bucle for...in

El bucle `for...in` es un bucle que nos permite recorrer un objeto.

La estructura de un bucle `for...in` es la siguiente:

```javascript
for(let variable in objeto) {
  // código
}
```

```javascript
let persona = {
  nombre: "Antonio",
  edad: 20,
  ciudad: "Sevilla"
}

for(let propiedad in persona) {
  console.log(propiedad)
}
```