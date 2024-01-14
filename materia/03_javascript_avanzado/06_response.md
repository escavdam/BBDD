# Response

El objeto `Response` representa la respuesta a una petición HTTP. Este objeto tiene varios métodos que nos permiten obtener los datos de la respuesta.

Este objeto se crea automáticamente cuando hacemos una petición HTTP con `fetch()`.

## `json()`

El método `json()` del objeto `Response` nos permite obtener los datos de la respuesta en formato JSON.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data));
```

## `text()`

El método `text()` del objeto `Response` nos permite obtener los datos de la respuesta en formato texto.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.text())
  .then(data => console.log(data));
```

## `blob()`

El método `blob()` del objeto `Response` nos permite obtener los datos de la respuesta en formato binario.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.blob())
  .then(data => console.log(data));
```

## `formData()`

El método `formData()` del objeto `Response` nos permite obtener los datos de la respuesta en formato `FormData`.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.formData())
  .then(data => console.log(data));
```

Ademas de estos métodos, tambien tenemos varias propiedades que nos permiten obtener información sobre la respuesta:

- `Response.ok`: devuelve `true` si la respuesta es correcta, y `false` si la respuesta es incorrecta.
- `Response.status`: devuelve el código de estado de la respuesta.
- `Response.statusText`: devuelve el mensaje de estado de la respuesta.
- `Response.url`: devuelve la URL de la respuesta.
- `Response.type`: devuelve el tipo de respuesta.
- `Response.redirected`: devuelve `true` si la respuesta es una redirección, y `false` si no lo es.
- `Response.headers`: devuelve un objeto `Headers` con las cabeceras de la respuesta.
- `Response.body`: devuelve un objeto `ReadableStream` con el cuerpo de la respuesta.
- `Response.bodyUsed`: devuelve `true` si el cuerpo de la respuesta ya ha sido leído, y `false` si no lo ha sido.
