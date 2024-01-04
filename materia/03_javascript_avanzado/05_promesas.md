# Promesas

Las promesas en JavaScript son muy parecidas a una promesa en la vida real. Cuando alguien te promete algo, esa acción queda *pendiente*, la promesa puede *cumplirse* o por el contrario *romperse*.

Las promesas en JavaScript funcionan de la misma forma. Una promesa puede *resolverse* o *rechazarse*.

Una promesa se crea de la siguiente forma:

```js
const promesa = new Promise((resolve, reject) => {
  // hacemos algo
  // si todo sale bien, llamamos a resolve
  // si algo sale mal, llamamos a reject
})
```

Una promesa recibe una función con dos parámetros: `resolve` y `reject`. Estos parámetros son funciones que debemos llamar cuando queremos resolver o rechazar la promesa.

Por ejemplo, podemos crear una promesa que se resuelva después de 1 segundo:

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('La promesa se resolvió')
  }, 1000)
})
```

En este ejemplo, creamos una promesa que se resuelve después de 1 segundo. Para ello, usamos la función `setTimeout`, que recibe dos parámetros: una función, y un número que representa la cantidad de milisegundos que queremos esperar antes de ejecutar la función.

Veamo otro ejemplo

```js	
const promesa = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve('La promesa se resolvió') : reject('La promesa se rechazó')
})
```

En este ejemplo, creamos una promesa que se resuelve o se rechaza de forma aleatoria. Para ello, usamos la función `Math.random`, que devuelve un número aleatorio entre 0 y 1.

## then

Una vez que tenemos una promesa, podemos usar el método `then` para recibir el resultado de la misma:

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('La promesa se resolvió')
  }, 1000)
})

promesa.then(resultado => {
  console.log(resultado)
})
```

Este método recibe una función que se ejecutará cuando la promesa se resuelva. Esta función recibe como parámetro el resultado de la promesa.

## catch

Si queremos recibir el resultado de una promesa que se rechazó, podemos usar el método `catch`:

```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('La promesa se rechazó')
  }, 1000)
})

promesa.catch(resultado => {
  console.log(resultado)
})
```

Este método recibe una función que se ejecutará cuando la promesa se rechace. Esta función recibe como parámetro el resultado de la promesa.

## Gestionando resultados y errores con then y catch

Podemos usar `then` y `catch` para gestionar el resultado de una promesa, según se resuelva o se rechace:
```js
const promesa = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve('La promesa se resolvió') : reject('La promesa se rechazó')
})

promesa
  .then(resultado => {
    console.log(resultado)
  })
  .catch(resultado => {
    console.log(resultado)
  })
```

## Promesas encadenadas

En muchas ocasiones, necesitaremos ejecutar varias promesas en serie. Un ejemplo común es cuando un servidor nos devuelve una URL, y luego debemos hacer otra petición a esa URL para obtener más información. O cuando al realizar una peticion este devuelve un json que debemos convertir a un objeto JavaScript.

Ambas acciones son asíncronas, por lo que debemos usar promesas para gestionarlas. Para ello, podemos encadenar promesas usando `then`:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
```

En este ejemplo, hacemos una petición a la API de JSONPlaceholder, y luego convertimos la respuesta en un objeto JavaScript.

## Promise.all

En muchas ocasiones, necesitaremos ejecutar varias promesas en paralelo. Un ejemplo común es cuando queremos hacer varias peticiones a un servidor, y luego ejecutar una función cuando todas las peticiones se hayan completado.

Para ello, podemos usar el método `Promise.all`:

```js
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('La promesa 1 se resolvió')
  }, 1000)
})

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('La promesa 2 se resolvió')
  }, 2000)
})

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('La promesa 3 se resolvió')
  }, 3000)
})

Promise.all([promesa1, promesa2, promesa3])
  .then(resultado => {
    console.log(resultado)
  })
```

Este método recibe un array de promesas, y devuelve una promesa que se resuelve cuando todas las promesas del array se resuelven.

