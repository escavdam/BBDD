## Asincronía

Antes de empezar a ver cómo hacer peticiones HTTP, vamos a ver qué es la asincronía, y por qué es importante.

JavaScript es un lenguaje de programación single-thread, esto significa que solo puede hacer una cosa a la vez, y que si está haciendo algo, no puede hacer otra cosa hasta que termine lo que está haciendo.

Esto es un problema, porque si queremos hacer una petición HTTP, y tenemos que esperar a que termine para poder hacer otra cosa, nuestro programa se quedaría bloqueado hasta que termine la petición, y no podríamos hacer nada más.

> **Nota**: La asíncronía no es algo que solo te vaya a afectar con las peticiónes HTTP, muchas funciones de JavaScript son asíncronas, por ejemplo, *setTimeout*, *setInterval*, *addEventListener*, *forEach*, etc.

Para solucionar esto, JavaScript usa la asincronía, que es la capacidad de hacer varias cosas a la vez, sin tener que esperar a que termine una para hacer otra.

Para entender bien la asincronia, primero debemos de tener claro el concepto de *callback*.

## Callbacks

Hemos visto los callbacks en varios aspectos de js previamente, algunos ejemplos son:

- *addEventListener*

```js
element.addEventListener('click', function() {
  // ...
});
```

- *setTimeout* y *setInterval*

```js
setTimeout(function() {
  // ...
}, 1000);
```

- *forEach*

```js
array.forEach(function(element) {
  // ...
});
```

Podemos usar callbacks para hacer que una función se ejecute cuando otra termine, por ejemplo:

```js
function mi_funcion(callback) {
  console.log("Esta es mi funcion principal")
  callback();
}

mi_funcion(function() {
  console.log("Esta es mi funcion callback")
});
```

En este ejemplo, la función *mi_funcion* recibe un callback como parámetro, y lo ejecuta al final de la función.

En la asincronía, los callbacks se usan para ejecutar código cuando una petición HTTP termine.

Es muy común explicar la asincronía mediante el uso de setTimeout, por ejemplo:

```js
console.log("Hola");

setTimeout(function() {
  console.log("Mundo");
}, 1000);

console.log("Bye!");
```

En este ejemplo, primero se ejecuta el console.log("Hola"), luego se ejecuta el setTimeout, y luego se ejecuta el console.log("Bye!"), después de 1 segundo se ejecuta el callback del setTimeout, y se ejecuta el console.log("Mundo").

### ¿Y que tiene que ver esto con las llamadas HTTP?

Cuando hacemos una petición HTTP, el servidor tarda un tiempo en procesar la petición, y luego nos devuelve una respuesta, y si hacemos la petición de forma síncrona, nuestro programa se quedaría bloqueado hasta que el servidor nos devuelva la respuesta. Además, si queremos actualizar nuestra página con los datos de la respuesta, tendríamos que recargar la página.

El término `AJAX` (Asynchronous JavaScript And XML) se refiere a la técnica de hacer peticiones HTTP de forma asíncrona, y actualizar nuestro DOM sin tener que recargar la página.

Veamos varias formas de hacer peticiones HTTP:

## Curl

La primera forma de hacer peticiones HTTP es usando *curl*, una herramienta de linea de comandos que *suele* venir instalada en los sistemas operativos UNIX. Para saber si tienes *curl* instalado, puedes ejecutar `curl --version` en la terminal.

Curl es bastante fácil de usar, es muy cómodo para simplemente testear rápidamente una API y ver que devuelve:

```bash
curl https://pokeapi.co/api/v2/pokemon/471
```

Para hacer una petición POST, podemos usar la opción `-X`:

```bash
curl -X POST https://paparruchas.glitch.me
```

Y si queremos enviar datos en la petición, podemos usar la opción `-d`:

```bash
curl -X POST -d "nombre=pepe" https://paparruchas.glitch.me
```

## XMLHttpRequest

Ahora que ya sabemos qué es la asincronía y los callbacks, vamos a ver cómo hacer peticiones HTTP con JavaScript.

Para hacer peticiones HTTP con JavaScript, usaremos el objeto *XMLHttpRequest*, que nos permite hacer peticiones HTTP de forma asíncrona.

```js 
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

request.onload = function() {
  console.log(request.response);
}
```

En este ejemplo, creamos un objeto *XMLHttpRequest*, y hacemos una petición HTTP GET a la url https://jsonplaceholder.typicode.com/todos/1, luego, cuando la petición termine, se ejecuta el callback *onload*, que nos devuelve la respuesta de la petición.

## Respuestas HTTP

Cuando hacemos una petición HTTP, el servidor nos devuelve una respuesta, que puede ser de varios tipos, los más comunes son:

- 1xx: Respuestas informativas
- 2xx: Respuestas satisfactorias
- 3xx: Redirecciones
- 4xx: Errores del cliente
- 5xx: Errores del servidor
- 6xx: Errores de la aplicación
- 7xx: Errores de la base de datos

Las respuestas 2xx y 4xx son las más comunes, las respuestas 2xx indican que la petición se ha realizado correctamente, y las respuestas 4xx indican que ha habido un error en la petición.

## Códigos de estado

Cada respuesta HTTP tiene un código de estado, que indica el estado de la petición, los más comunes son:

- 200: OK, la petición se ha realizado correctamente
- 201: Created, la petición se ha realizado correctamente y se ha creado un nuevo recurso
- 202: Accepted, la petición se ha realizado correctamente pero no se ha completado
- 204: No Content, la petición se ha realizado correctamente pero no hay contenido para devolver
- 400: Bad Request, la petición no se ha realizado correctamente
- 401: Unauthorized, la petición no se ha realizado correctamente porque no se ha autenticado
- 403: Forbidden, la petición no se ha realizado correctamente porque no se tiene permiso
- 404: Not Found, la petición no se ha realizado correctamente porque no se ha encontrado el recurso

Podemos acceder al código de estado de una petición HTTP con la propiedad *status* del objeto *XMLHttpRequest*.

```js
// ... crea tu request previamente

request.onload = function() {
  console.log(request.status);
}
```

## Respuestas JSON

Cuando hacemos una petición HTTP, el servidor nos devuelve una respuesta, que puede ser de varios tipos, los más comunes son:

- Texto plano
- HTML
- JSON
- XML
- Imágenes
- Videos
- Archivos

Los JSON son el tipo de respuesta más común, y son los que vamos a usar en el curso.

Para trabajar con JSON, podemos usar el método *JSON.parse* para convertir un JSON a un objeto de JavaScript, y el método *JSON.stringify* para convertir un objeto de JavaScript a un JSON.

## Fetch

Hasta ahora hemos visto cómo hacer peticiones HTTP con *XMLHttpRequest*, pero hay una forma más moderna de hacer peticiones HTTP, usando *fetch*.

*fetch* es una función que nos permite hacer peticiones HTTP de forma asíncrona, y nos devuelve una promesa, que podemos usar para trabajar con la respuesta de la petición.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

En este ejemplo, hacemos una petición HTTP GET a la url https://jsonplaceholder.typicode.com/todos/1, y cuando la petición termine, se ejecuta el callback *then*, que nos devuelve la respuesta de la petición, y si hay algún error, se ejecuta el callback *catch*, que nos devuelve el error.

## Promesas

Las promesas son un objeto que nos permite trabajar con código asíncrono de forma más sencilla, su sintaxis es la siguiente:

```js
var mi_promesa = new Promise(function(resolve, reject) {
  // ...
});
```

Las promesas tienen dos callbacks, *resolve* y *reject*, que se ejecutan cuando la promesa se resuelve o se rechaza.

```js
var mi_promesa = new Promise(function(resolve, reject) {
  resolve("Esta promesa se ha resuelto");
});

mi_promesa.then(function(response) {
  console.log(response);
});
```

En este ejemplo, creamos una promesa, y la resolvemos con el método *resolve*, luego, cuando la promesa se resuelve, se ejecuta el callback *then*, que nos devuelve la respuesta de la promesa.

## Async y await

Hasta ahora hemos visto cómo hacer peticiones HTTP con *XMLHttpRequest* y *fetch*, pero hay una forma más moderna de hacer peticiones HTTP, usando *async* y *await*.

*async* y *await* son dos palabras reservadas de JavaScript que nos permiten trabajar con código asíncrono de forma más sencilla, ya que *fetch* trae varias limitaciones y *XMLHttpRequest* es mucho mas complejo de implementar que *fetch*.

```js
async function mi_funcion() {
  var response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response);
}
```

En este ejemplo, creamos una función *async*, y dentro de ella hacemos una petición HTTP GET a la url https://jsonplaceholder.typicode.com/todos/1, y cuando la petición termine, se ejecuta el callback *then*, que nos devuelve la respuesta de la petición.

Como puedes ver, *async* y *await* tiene una sintaxis muy similar a *fetch*, pero *async* y *await* son mucho más fáciles de leer y de entender.

### CORS

CORS es un mecanismo de seguridad que nos permite restringir el acceso a los recursos de un servidor, para evitar que se puedan acceder desde otros dominios.

Por ejemplo, si tenemos una API en el dominio https://api.example.com, podemos restringir el acceso a esa API para que solo se pueda acceder desde el dominio https://example.com.

Para restringir el acceso a una API, debemos de configurar el servidor para que solo se pueda acceder desde el dominio que queramos, y luego, cuando hagamos una petición HTTP a esa API, debemos de añadir el header *Access-Control-Allow-Origin* con el dominio que queramos.

### CORS en localhost

Si estás haciendo una aplicación web en localhost, y quieres hacer peticiones HTTP a una API en otro dominio, es posible que tengas problemas con CORS, ya que por defecto, los navegadores no permiten hacer peticiones HTTP a otros dominios desde localhost.

Para solucionar esto, puedes usar un proxy, como por ejemplo [CORS Anywhere](https://github.com/Rob--W/cors-anywhere), que nos permite hacer peticiones HTTP a otros dominios desde localhost.

### CORS en producción

Si estás haciendo una aplicación web en producción, y quieres hacer peticiones HTTP a una API en otro dominio, es posible que tengas problemas con CORS, ya que por defecto, los navegadores no permiten hacer peticiones HTTP a otros dominios desde un dominio que no sea el mismo.

Para solucionar esto, debes de configurar el servidor para que permita hacer peticiones HTTP a otros dominios, y luego, cuando hagas una petición HTTP a esa API, debes de añadir el header *Access-Control-Allow-Origin* con el dominio que quieras.

Esto dependerá del servidor que estés usando, por ejemplo, en Express puedes usar el middleware [cors](https://expressjs.com/en/resources/middleware/cors.html).
