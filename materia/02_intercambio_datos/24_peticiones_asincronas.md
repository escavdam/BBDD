# Peticiones HTTP

Llegamos a una de las partes más importante de este curso, las peticiones HTTP. En este capítulo veremos cómo hacer peticiones HTTP con JS, y cómo trabajar con las respuestas que nos devuelve un servidor.


## ¿Qué es una petición HTTP?

Una petición HTTP es una petición que se hace a un servidor web para pedirle información. Por ejemplo, cuando entras en una página web, tu navegador hace una petición HTTP GET al servidor de esa página para pedirle que le envíe la página web, cuando rellenas un formulario y lo envías, tu navegador hace una petición HTTP POST al servidor para enviarle los datos del formulario.

Hay **muchas** formas de hacer peticiones HTTP, para iniciar, vamos a ver cómo hacerlas con JavaScript con *XMLHttpRequest*.

## Asincronía

Antes de empezar a ver cómo hacer peticiones HTTP, vamos a ver qué es la asincronía, y por qué es importante.

JavaScript es un lenguaje de programación single-thread, esto significa que solo puede hacer una cosa a la vez, y que si está haciendo algo, no puede hacer otra cosa hasta que termine lo que está haciendo.

Esto es un problema, porque si queremos hacer una petición HTTP, y tenemos que esperar a que termine para poder hacer otra cosa, nuestro programa se quedaría bloqueado hasta que termine la petición, y no podríamos hacer nada más.

Para solucionar esto, JavaScript usa la asincronía, que es la capacidad de hacer varias cosas a la vez, sin tener que esperar a que termine una para hacer otra.

## XMLHttpRequest

XMLHttpRequest es un objeto que nos permite hacer peticiones HTTP con JavaScript. Para crear una petición, debemos crear una instancia de este objeto:

```js
const request = new XMLHttpRequest()
```

Una vez que tenemos la instancia, podemos usarla para hacer peticiones. Para ello, debemos usar el método `open`:

```js
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
```

Este método recibe dos parámetros, el primero es el método HTTP que queremos usar, y el segundo es la URL a la que queremos hacer la petición.

Una vez que hemos abierto la petición, podemos enviarla usando el método `send`:

```js
request.send()
```

Este método no recibe ningún parámetro, y envía la petición al servidor.

Por último, podemos usar el método `onload` para recibir la respuesta del servidor:

```js
request.onload = () => {
  console.log(request.response)
}
```

Este método recibe una función que se ejecutará cuando el servidor responda. Esta función recibe como parámetro la respuesta del servidor.

## fetch

Fetch es una función que nos permite hacer peticiones HTTP con JavaScript. Para usarla, debemos pasarle la URL a la que queremos hacer la petición:

```js
fetch('https://jsonplaceholder.typicode.com/users')
```

Esta función devuelve una promesa, que podemos usar para recibir la respuesta del servidor:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response)
  })
```

Recuerda que el objeto Response incluye un método llamado `json` que nos permite convertir la respuesta en un objeto JavaScript:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
```