# Rutas

En express podemos crear rutas usando el método `get`:

```js
app.get('/', (req, res) => {
  res.send('Hola mundo')
})
```

Este método recibe dos parámetros: la ruta, y un callback que se ejecutará cuando se visite la ruta.

En este callback podemos usar los objetos `req` y `res` para manejar la petición y la respuesta.

## Respuestas

Podemos mandar cualquier tipo de dato en la respuesta. Por ejemplo, podemos mandar un objeto:

```js
app.get('/', (req, res) => {
  res.send({ mensaje: 'Hola mundo' })
})
```

O un array:

```js
app.get('/', (req, res) => {
  res.send([1, 2, 3])
})
```

No es necesario convertir los datos a JSON, Express lo hace automáticamente.



## Rutas con parámetros

Podemos crear rutas con parámetros usando `:`:

```js
app.get('/usuarios/:id', (req, res) => {
  res.send(`El id del usuario es ${req.params.id}`)
})
```

En este ejemplo, creamos una ruta que recibe un parámetro `id`. Para acceder al valor del parámetro, podemos usar `req.params.id`.

Podemos crear rutas con varios parámetros:

```js
app.get('/usuarios/:id/:nombre', (req, res) => {
  res.send(`El id del usuario es ${req.params.id}, y su nombre es ${req.params.nombre}`)
})
```

## Rutas con query strings

Podemos crear rutas con query strings usando `?`:

```js
app.get('/usuarios', (req, res) => {
  res.send(`El id del usuario es ${req.query.id}`)
})
```

En la url `/usuarios?id=1`, el valor del query string `id` es `1`. Para acceder al valor del query string, podemos usar `req.query.id`.

Podemos crear rutas con varios query strings:

```js
app.get('/usuarios', (req, res) => {
  res.send(`El id del usuario es ${req.query.id}, y su nombre es ${req.query.nombre}`)
})
```

Aqui, la ruta `/usuarios?id=1&nombre=Juan` tiene el query string `id` con el valor `1`, y el query string `nombre` con el valor `Juan`.

## Rutas con métodos

Hasta ahora hemos usado el método `get` para crear rutas. Pero también podemos usar otros métodos, como `post`, `put`, `patch`, y `delete`.

Recordemos los verbos HTTP:

- `GET`: Obtener un recurso.
- `POST`: Crear un recurso.
- `PUT`: Reemplazar un recurso.
- `PATCH`: Actualizar un recurso.
- `DELETE`: Eliminar un recurso.

## Rutas post

Podemos crear rutas post usando el método `post`:

```js
app.post('/usuarios', (req, res) => {
  res.send('Usuario creado')
})
```

## Rutas put

Podemos crear rutas put usando el método `put`:

```js
app.put('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} actualizado`)
})
```

## Rutas patch

Podemos crear rutas patch usando el método `patch`:

```js
app.patch('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} actualizado`)
})
```

## Rutas delete

Podemos crear rutas delete usando el método `delete`:

```js
app.delete('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} eliminado`)
})
```

**Recordad** que los verbos http no cambian el comportamiento de la ruta en si, solo responden según la petición que se haga y nos ayudan a identificar que tipo de petición se esta realizando.

