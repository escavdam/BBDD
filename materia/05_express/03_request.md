# Request

El objeto `req` representa la petición HTTP, y tiene propiedades para la información de la petición, como el query string, los parámetros de la ruta, el cuerpo de la petición, y más.

## Query string

El query string es una forma de enviar datos al servidor a través de la URL. El query string es una cadena de texto que sigue la URL, y comienza con un signo de interrogación `?`. Los pares clave-valor en el query string están separados por un signo `&`, y el nombre de la clave y el valor están separados por un signo `=`.

Por ejemplo, en la URL `/usuarios?id=1&nombre=Juan`, el query string es `?id=1&nombre=Juan`.

Podemos acceder al query string en Express a través de la propiedad `req.query`. Por ejemplo, si queremos acceder al query string `id` en la URL `/usuarios?id=1`, podemos hacerlo de la siguiente manera:

```js
app.get('/usuarios', (req, res) => {
  res.send(`El id del usuario es ${req.query.id}`)
})
```

Otro ejemplo, la ruta `/tareas?estado=pendiente` puede devolver unas tareas, y la ruta `/tareas?estado=terminada` puede devolver otras diferentes.

Los query strings pueden ser potencialmente peligrosos, ya que pueden ser manipulados por el usuario. Por esta razón, es importante validar y sanitizar los datos antes de usarlos, las *inyecciones* de SQL son un ejemplo de como los query strings pueden ser peligrosos.

## Parámetros de la ruta

Los parámetros de la ruta son una forma de enviar datos al servidor a través de la URL. Los parámetros de la ruta son segmentos de la URL que comienzan con `:`. Por ejemplo, en la URL `/usuarios/1`, el parámetro de la ruta es `1`.

Podemos acceder a los parámetros de la ruta en Express a través de la propiedad `req.params`. Por ejemplo, si queremos acceder al parámetro `id` en la URL `/usuarios/1`, podemos hacerlo de la siguiente manera:

```js
app.get('/usuarios/:id', (req, res) => {
  res.send(`El id del usuario es ${req.params.id}`)
})
```

Otro ejemplo, la ruta `/usuarios/1` puede devolver un usuario, y la ruta `/usuarios/2` puede devolver otro usuario diferente.

## Cuerpo de la petición

El cuerpo de la petición es la parte de la petición que contiene los datos enviados por el cliente. Los datos del cuerpo de la petición pueden ser enviados a través de formularios, peticiones AJAX, JSON, etc.

Para acceder al cuerpo de la petición en Express, necesitamos usar un middleware que sepa cómo procesar los datos del cuerpo de la petición. Express incluye un middleware llamado `express.urlencoded` que sabe cómo procesar los datos de un formulario, y un middleware llamado `express.json` que sabe cómo procesar los datos en formato JSON.

### urlencoded

El middleware `urlencoded` es un middleware que sabe cómo procesar los datos de un formulario. Para usarlo, necesitamos importar `express` y crear una instancia de `express`, y luego usar el middleware `urlencoded` con el método `use`:

```js
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/procesar', (req, res) => {
  console.log(req.body.nombre)
  res.send('Datos recibidos')
})

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
```

En este ejemplo, el middleware `urlencoded` procesa los datos de un formulario como este:

```html
<form action="/procesar" method="POST">
  <input type="text" name="nombre">
  <button type="submit">Enviar</button>
</form>
```

### json

El middleware `json` es un middleware que sabe cómo procesar los datos en formato JSON. Para usarlo, necesitamos importar `express` y crear una instancia de `express`, y luego usar el middleware `json` con el método `use`:

```js
const express = require('express')
const app = express()

app.use(express.json())

app.post('/procesar', (req, res) => {
  console.log(req.body.nombre)
  res.send('Datos recibidos')
})

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
```

En este ejemplo, el middleware `json` procesa los datos en formato JSON como este:

```json
{
  "nombre": "Juan"
}
```

Podemos mandarlo a través de una petición AJAX:

```js
fetch('/procesar', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ nombre: 'Juan' })
})
```

## Cabeceras

Las cabeceras son la parte de la petición que contiene información sobre la petición, como el tipo de contenido que se está enviando, la longitud del contenido, la fecha de la petición, etc.

Algunas de las cabezeras más comunes son:

- `Content-Type`: El tipo de contenido que se está enviando, como `text/html`, `application/json`, `application/x-www-form-urlencoded`, etc.
- `Content-Length`: La longitud del contenido que se está enviando, en bytes.
- `Date`: La fecha de la petición.
- `Host`: El nombre del host al que se está haciendo la petición.
- `User-Agent`: El agente de usuario que está haciendo la petición, como el navegador o el bot que está haciendo la petición.
- `Referer`: La URL de la página que hizo la petición.

Podemos acceder a las cabeceras de la petición en Express a través de la propiedad `req.headers`.

### get

El método `get` nos permite obtener el valor de una cabecera.

```js
req.get('Content-Type')
req.get('Content-Length')
```

## Cookies

Las cookies son pequeños archivos de texto que se almacenan en el navegador del cliente. Las cookies se usan para almacenar información sobre el cliente, como las preferencias del usuario, el carrito de compras, la sesión del usuario, etc.

Podemos acceder a las cookies en Express a través de la propiedad `req.cookies`. Para usar cookies en Express, necesitamos usar un middleware llamado `cookie-parser` que sabe cómo procesar las cookies.

Para usar `cookie-parser` tras instalarlo:

```js
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

app.get('/guardar-cookie', (req, res) => {
  console.log(req.headers.cookies)
  res.cookie('nombre', 'Juan')
  res.send('Cookie guardada')
})
```

Cuando hacemos una peticion, podemos mandar cookies con la cabecera `Cookie`:

```js
fetch('/guardar-cookie', {
  headers: {
    'Cookie': 'nombre=Juan'
  }
})
```

Algunas de las opciones extra que tenemos al guardar cookies son:

- `maxAge`: La duración de la cookie en milisegundos.
- `expires`: La fecha de expiración de la cookie.
- `httpOnly`: Si es `true`, la cookie solo será accesible a través de HTTP, y no a través de JavaScript.
- `secure`: Si es `true`, la cookie solo será enviada a través de HTTPS.
- `sameSite`: Si es `strict`, la cookie solo será enviada si la petición es del mismo sitio. Si es `lax`, la cookie será enviada si la petición es del mismo sitio, o si es una petición GET desde otro sitio.

Las cookies no son un método seguro para almacenar información sensible, ya que pueden ser manipuladas por el usuario. Por esta razón, es importante no almacenar información sensible en las cookies, y siempre validar y sanitizar los datos antes de usarlos.

**NO** uses cookies para autenticar usuarios, es peligroso, y quedarán limitadas por la mayoria de navegadores muy pronto.
