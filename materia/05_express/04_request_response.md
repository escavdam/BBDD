# request

El objeto `req` o `request` contiene información sobre la petición que se está realizando:

```js
app.get('/', (req, res) => {
  console.log(req)
})
```

Este objeto contiene información como:

- `req.params`: Los parámetros de la ruta.
- `req.query`: Los query strings de la ruta.
- `req.body`: El cuerpo de la petición.
- `req.headers`: Los headers de la petición.
- `req.method`: El método de la petición.
- `req.url`: La url de la petición.
- `req.path`: La ruta de la petición.
- `req.hostname`: El hostname de la petición.

## response

El objeto `res` o `response` contiene métodos para enviar una respuesta:

```js
app.get('/', (req, res) => {
  res.send('Hola mundo')
})
```

Este objeto contiene métodos como:

- `res.send()`: Envia una respuesta.
- `res.json()`: Envia una respuesta en formato JSON.
- `res.status()`: Cambia el código de estado de la respuesta.

También podemos usar los métodos de `res` para configurar el header de la respuesta:

```js
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('Hola mundo')
})
```

