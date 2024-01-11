# Middleware

Por defecto, express no sabe cómo procesar los datos que vienen en una petición. Esto es debido a que dependiendo del tipo de petición, los datos se envían de una forma u otra. Por ejemplo, en una petición `GET` los datos se envían en la URL, mientras que en una petición `POST` los datos se envían en el cuerpo de la petición. 

Además, express no sabe cómo procesar los datos que vienen en el cuerpo de la petición. Por ejemplo, si enviamos un formulario, express no sabe cómo procesar los json que llegan.

Para solucionar esto, express usa middlewares. Un middleware es una función que se ejecuta antes de que se ejecute la ruta. Los middlewares se ejecutan en orden, y pueden modificar los datos de la petición antes de que se ejecute la ruta.

## Crear un middleware

Para crear un middleware, debemos usar el método `use` del objeto `app`. Este método recibe un callback que se ejecutará antes de que se ejecute la ruta.

```js
app.use((req, res, next) => {
  console.log('Middleware ejecutado');
  next();
})
```

En este ejemplo, creamos un middleware que se ejecuta antes de que se ejecute cualquier ruta. Este middleware imprime un mensaje en la consola, y luego llama a `next()`. `next()` es una función que le dice a express que ejecute la siguiente función. En este caso, la siguiente función es la ruta.

Podemos crear una funcion separada para el middleware:

```js
const middleware = (req, res, next) => {
  console.log('Middleware ejecutado');
  next();
}
```

Y luego usarla en el método `use`:

```js
app.use(middleware)
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
