# Middleware

Un middleware es una función que se ejecuta **antes** de que se ejecute la ruta. Los middlewares se ejecutan en orden, y pueden modificar los datos de la petición antes de que se ejecute la ruta.

Los middlewares son clave en nuestro servidor express, ya que estos nos permiten preprocesar los datos que vienen en la petición.

Sin los middleware, no podremos acceder a los datos que vienen en la petición, ya que estos se encuentran en el objeto `req`, y si no los procesamos, express no sabrá cómo manejarlos.

## Crear un middleware

Un middleware es una función que recibe 3 parámetros: `req`, `res` y `next`. `req` es el objeto de la petición, `res` es el objeto de la respuesta, y `next` es una función que le dice a express que ejecute la siguiente función. El método `use` le dice a express que ejecute el middleware antes de que se ejecute cualquier ruta.

```js
//middleware como función anónima
app.use((req, res, next) => {
  console.log('Middleware ejecutado');
  next();
})
```

En este ejemplo, creamos un middleware que se ejecuta antes de que se ejecute cualquier ruta mediante `app.use`. Este middleware imprime un mensaje en la consola, y luego llama a `next()`. `next()` es una función que le dice a express que ejecute la siguiente función. Cuando usamos next en un middleware, le estamos diciendo a express que ejecute la ruta.

Podemos crear una funcion separada para el middleware:

```js
const middleware = (req, res, next) => {
  console.log('Middleware ejecutado');
  next();
}
```

### Middleware en todas las rutas

Una vez tengas el middleware, puedes usarlo en todas las rutas de tu aplicación con el método `use` del objeto `app`:

```js
function middleware (req, res, next) {
  console.log('Middleware ejecutado')
  next()
}
app.use('*', middleware)
```

Un ejemplo sencillo con un logger:

```js
const logger = (req, res, next) => {
  console.log('Logging route:', req.path);
  console.log('Request Time:', new Date().toString())
  console.log('User Agent:', req.useragent)
  console.log('Request Type:', req.method)
  console.log('Request IP:', req.ip)
  console.log('~'.repeat(8))
  next();
}
app.use('*', logger);
```

### Usar un middleware en una ruta concreta

También puedes usar un middleware en una ruta concreta:

```js
function middleware (req, res, next) {
  console.log('Middleware ejecutado')
  next()
}
app.get('/usuarios', middleware, (req, res) => {
  res.send('Ruta con middleware')
})
```

### Múltiples middlewares

También puedes usar múltiples middlewares en una ruta:

```js
app.get('/usuarios', middleware1, middleware2, (req, res) => {
  res.send('Ruta con múltiples middlewares')
})
```

### Múltiples callbacks

También puedes usar múltiples callbacks en una ruta, en este caso, el primer callback es un middleware, el segundo callback es la ruta. Luego, mediante `next()` se ejecuta un tercer callback.

```js
app.get('/usuarios', (req, res, next) => {
  console.log('Middleware 1')
  next()
}, (req, res) => {
  res.send('Ruta con múltiples callbacks')
})
```

## Tipos de middleware

Existen varios tipos de middleware. Los más comunes son los siguientes:

### Middleware de ruta

El middleware de ruta se ejecuta antes de que se ejecute una ruta concreta. Para crear un middleware de ruta, debemos pasarle la ruta como primer parámetro:

```js
app.use('/usuarios', (req, res, next) => {
  console.log('Middleware ejecutado')
  next()
})
```

En este ejemplo, creamos un middleware de ruta que se ejecuta antes de que se ejecute la ruta `/usuarios`.

### Middleware de error

El middleware de error se ejecuta cuando ocurre un error. Para crear un middleware de error, debemos pasarle 4 parámetros:

```js
app.use((err, req, res, next) => {
  console.log('Middleware de error ejecutado')
  next()
})
```

**SIEMPRE** debemos pasarle los 4 parámetros. Si no pasamos los 4 parámetros, express no sabrá que es un middleware de error.

### Middleware de aplicación

El middleware de aplicación se ejecuta antes de que se ejecute cualquier ruta. Para crear un middleware de aplicación, debemos pasarle un asterisco como primer parámetro:

```js
function middleware (req, res, next) {
  console.log('Middleware de aplicación ejecutado')
  next()
}

app.use('*', middleware)
```

En este ejemplo, creamos un middleware de aplicación que se ejecuta antes de que se ejecute cualquier ruta.

### Middleware de terceros

En muchas ocasiones, desarrollar nuestro propio middleware puede ser costoso y poco práctico. Por suerte, podemos usar middlewares de terceros. Un middleware de terceros es un middleware que ha sido desarrollado por otra persona, y que podemos instalar en nuestro proyecto.

Algunos middlewares de terceros muy populares son:

- [cors](https://www.npmjs.com/package/cors): Permite peticiones desde otros dominios.
- [body-parser](https://www.npmjs.com/package/body-parser): Permite procesar los datos que vienen en el cuerpo de la petición, actualmente viene incluido en express bajo el nombre `express.json()`.
- [morgan](https://www.npmjs.com/package/morgan): Permite mostrar información sobre las peticiones que recibe el servidor.
- [helmet](https://www.npmjs.com/package/helmet): Permite añadir cabeceras de seguridad a las peticiones.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser): Permite procesar las cookies que vienen en la petición.
- [express-session](https://www.npmjs.com/package/express-session): Permite crear sesiones de usuario.
- [grey-matter](https://www.npmjs.com/package/grey-matter): Permite procesar archivos markdown.
- [multer](https://www.npmjs.com/package/multer): Permite procesar archivos que vienen en la petición.
- [marked](https://www.npmjs.com/package/marked): Permite convertir archivos markdown a HTML.
