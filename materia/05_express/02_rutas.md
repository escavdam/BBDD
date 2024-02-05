# Rutas

Una ruta o endpoint en Express es una URL que el servidor puede manejar y al que se puede llamar. Por ejemplo, `/usuarios` es una ruta, igual que `/`, `/tienda` o `/usuarios/1`.

Cada una de estas rutas puede manejar diferentes tipos de peticiones, como `GET`, `POST`, `PUT`, `PATCH`, y `DELETE`.

```js
app.get('/', (req, res) => { 
  res.send('Hola mundo')
})

app.get('/usuarios', (req, res) => {
  res.send('Lista de usuarios')
})
```

Estos métodos reciben dos parámetros: la ruta, y un callback que se ejecutará cuando se visite la ruta.

En este callback podemos usar los objetos `req` y `res` para manejar la petición que entra al servidor y la respuesta que vamos a devolver.

## Métodos http

Cada ruta puede manejar diferentes tipos de peticiones, como `GET`, `POST`, `PUT`, `PATCH`, y `DELETE`.

Podemos utilizar diferentes métodos en la misma ruta:

```js
app.get('/usuarios', (req, res) => { 
  res.send('Muestra los usuarios')
})

app.post('/usuarios', (req, res) => {
  res.send('Crea un usuario')
})

app.put('/usuarios', (req, res) => {
  res.send('Actualiza un usuario')
})

app.patch('/usuarios', (req, res) => {
  res.send('Actualiza un usuario')
})

app.delete('/usuarios', (req, res) => {
  res.send('Elimina un usuario')
})
```

Cada verbo http tiene un significado específico, y podemos usarlos para manejar diferentes tipos de peticiones, aun asi, los métodos http no cambian el comportamiento de la ruta en si, depende de nosotros como desarrolladores manejar la petición que se este realizando.

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

### Rutas post

Podemos crear rutas post usando el método `post`:

```js
app.post('/usuarios', (req, res) => {
  res.send('Usuario creado')
})
```

### Rutas put

Podemos crear rutas put usando el método `put`:

```js
app.put('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} actualizado`)
})
```

### Rutas patch

Podemos crear rutas patch usando el método `patch`:

```js
app.patch('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} actualizado`)
})
```

### Rutas delete

Podemos crear rutas delete usando el método `delete`:

```js
app.delete('/usuarios/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} eliminado`)
})
```
## Envio de datos por URL

### Query strings

Las query strings son una forma de enviar datos a través de la URL. Por ejemplo, en la URL `/usuarios?id=1`, el valor del query string `id` es `1`.

Los query strings se crean usando `?`, y se pueden concatenar con `&`, y para acceder a ellos en Express, podemos usar `req.query`.


```js
app.get('/usuarios', (req, res) => {
  res.send(`El id del usuario es ${req.query.id}`)
})
```
Los query strings pueden ser potencialmente peligrosos, ya que pueden ser manipulados por el usuario. Por esta razón, es importante validar y sanitizar los datos antes de usarlos, las *inyecciones* de SQL son un ejemplo de como los query strings pueden ser peligrosos.

### Rutas con parámetros

Los parámetros son una forma de enviar datos a través de la URL. Por ejemplo, en la URL `/usuarios/1`, el valor del parámetro `id` es `1`.
Podemos crear rutas con parámetros usando `:`:

```js
app.get('/usuarios/:id', (req, res) => {
  res.send(`El id del usuario es ${req.params.id}`)
})
```
Esta forma de enviar datos es más segura que los query strings, ya que los parámetros no son tan faciles de manipular, aun asi, es importante validar y sanitizar los datos antes de usarlos.
