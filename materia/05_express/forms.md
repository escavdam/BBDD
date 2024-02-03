# Formularios

Los formularios son una parte fundamental de las aplicaciones web. Son la forma en que los usuarios interactúan con las aplicaciones web y envían datos al servidor. En Express, los formularios se envían a través de solicitudes HTTP, y los datos del formulario se pueden acceder en el servidor a través del objeto `req.body`.

## Enviar un formulario

Considera el siguiente html:

```html
<form action="/procesar" method="POST">
  <input type="text" name="nombre">
  <input type="text" name="apellido">
  <button type="submit">Enviar</button>
</form>
```

Este formulario envía los datos a la ruta `/procesar` usando el método `POST`. Cuando el usuario hace clic en el botón de enviar, el navegador envía una solicitud `POST` al servidor con los datos del formulario en el cuerpo de la solicitud.

## Procesar un formulario

Para procesar un formulario en Express, necesitamos usar un middleware que sepa cómo procesar los datos del formulario. Por defecto, Express no sabe cómo procesar los datos del formulario, por lo que necesitamos usar un middleware según el tipo de datos que esperamos recibir.

En el ejemplo anterior mandamos el formulario de forma nativa en HTML, para capturar esos datos podemos usar el middleware `urlencoded`.

```js
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/procesar', (req, res) => {
  console.log(req.body)
  res.send('Datos recibidos')
})

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
```



