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

app.post('/usuarios', (req, res) => {
  res.send('Creamos usuario usuarios')
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

## Rutas con comodines

Podemos crear rutas con comodines usando `*`:

```js
app.get('/usuarios/*', (req, res) => {
  res.send('Ruta con comodín')
})
```

En este ejemplo, creamos una ruta que recibe cualquier ruta que empiece con `/usuarios/`, como `/usuarios/1`, `/usuarios/2`, `/usuarios/3`, pero tambien `/usuarios/1/editar`, `/usuarios/2/borrar`, `/usuarios/3/hola`, etc.

## Rutas con expresiones regulares

Podemos crear rutas con expresiones regulares usando `()`:

```js
app.get(/\/usuarios\/[0-9]+/, (req, res) => {
  res.send('Ruta con expresión regular')
})
```

En este ejemplo, creamos una ruta que recibe cualquier ruta que empiece con `/usuarios/` seguido de un número, como `/usuarios/1`, `/usuarios/2`, `/usuarios/3`, pero no `/usuarios/1/editar`, `/usuarios/2/borrar`, `/usuarios/3/hola`, etc.

## Rutas con middleware

Podemos crear rutas con middleware:

```js
app.get('/usuarios', middleware, (req, res) => {
  res.send('Ruta con middleware')
})
```

En este ejemplo, creamos una ruta que recibe un middleware antes de ejecutar el callback. El middleware puede ser una función que nosotros mismos creamos, o un middleware que ya viene incluido en Express.

## Rutas con múltiples callbacks

Podemos crear rutas con múltiples callbacks:

```js
app.get('/usuarios', (req, res, next) => {
  console.log('Middleware 1')
  next()
}, (req, res) => {
  res.send('Ruta con múltiples callbacks')
})
```

En este ejemplo, creamos una ruta que recibe dos callbacks. El primer callback es un middleware que se ejecuta antes de ejecutar el segundo callback.