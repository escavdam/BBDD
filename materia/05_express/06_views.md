# Vistas

En express, podemos enviar vistas al cliente usando el método `render`. Para usarlo, necesitaremos configurar el motor de plantillas que queramos usar en nuestra app previamente.

Una vista es un archivo que contiene código HTML y código JavaScript. El código JavaScript nos permite insertar datos dinámicos en el HTML.

Podemos usar HTML plano, o un motor de plantillas como `pug`, `ejs`, `handlebars`, `nunjucks`, `react`, `vue`, `svelte`, etc.

## Uso de vistas

Considera el siguiente archivo `index.html`, situado en la carpeta `views`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hola mundo</h1>
</body>
</html>
```

Para enviar esta vista al cliente, necesitaremos configurar el motor de plantillas `html` e indicar la carpeta donde se encuentran las vistas:

```js
const express = require('express')
const app = express()

app.set('view engine', 'html')
app.set('views', './views')
```

Luego, podemos enviar la vista con el método `render`:

```js
app.get('/', (req, res) => {
  res.render('index')
})
```
