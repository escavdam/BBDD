# Intervalos

[MDN setInterval](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval)

En JavaScript, podemos ejecutar código de forma repetida usando intervalos.

## `setInterval()`

La función `setInterval()` ejecuta una función cada cierto tiempo, que se especifica en milisegundos.

```javascript

setInterval(() => {
  console.log("Hola mundo")
  console.count()
}, 1000)
```

Podemos detener el intervalo con la función `clearInterval()`.

```javascript
let intervalo = setInterval(() => {
  console.log("Hola mundo")
  console.count()
}, 1000)

clearInterval(intervalo)
```

# Timeouts

[MDN setTimeout](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout)

## `setTimeout()`

La función `setTimeout()` ejecuta una función una sola vez, después de un tiempo especificado en milisegundos.

```javascript
setTimeout(() => {
  console.log("Hola mundo")
}, 1000)
```

Podemos detener el intervalo con la función `clearTimeout()`.

```javascript
let timeout = setTimeout(() => {
  console.log("Hola mundo")
}, 1000)

clearTimeout(timeout)
```

