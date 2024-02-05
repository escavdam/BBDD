# Template Engines

Los template engines son módulos que nos permiten renderizar vistas en Express. Los template engines nos permiten combinar datos con plantillas para generar HTML dinámico.

Express incluye soporte para los siguientes template engines, algunos de los más populares son:

- [EJS](https://ejs.co/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Handlebars](https://handlebarsjs.com/guide/)
- [Nunjucks](https://mozilla.github.io/nunjucks/getting-started.html)
- [Mustache](https://mustache.github.io/)

## Uso de template engines

Para usar un template engine en Express, necesitaremos instalar el módulo del template engine que queramos usar, y luego configurar Express para que use ese template engine.

Por ejemplo, para usar EJS, necesitaremos instalar el módulo `ejs`:

```bash
npm install ejs
```

Luego, necesitaremos configurar Express para que use EJS como template engine, EJS es el motor de plantillas por defecto en Express, asi que no hace falta configurar nada, tan solo usar `set` para indicar que usaremos EJS y la carpeta donde se encuentran las vistas:

```js
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
```

Dependiendo del template engine que usemos, su configuración puede variar. Por ejemplo, para usar Mustache, debemos usar el método `mustacheExpress()` para configurar el engine y luego usar `set` para indicar que usaremos Mustache y donde tenemos las vistas:

```js
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', './views')
```


## Renderizar vistas

Una vez configurado el template engine, podemos enviar vistas al cliente con el método `render`:

```js
app.get('/', (req, res) => {
  res.render('index', { mensaje: 'Hola mundo' })
})
```

En este ejemplo, estamos enviando la vista `index` al cliente, y estamos pasando un objeto con un mensaje. En la vista, podemos usar ese mensaje con la sintaxis de EJS:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1><%= mensaje %></h1>
  <p>Mensaje desde index.ejs</p>
</body>
</html>
```

En este ejemplo, estamos usando la sintaxis `<%= mensaje %>` para insertar el mensaje en la vista.
