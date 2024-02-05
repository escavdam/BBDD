# Router

El router en Express es un middleware que nos permite dividir nuestra aplicación en rutas más pequeñas. Por ejemplo, podemos separar en una carpeta las rutas relacionadas con los usuarios, como `/usuarios`, `/usuarios/crear`, `/usuarios/editar`, cada una con sus métodos `GET`, `POST`, `PUT`, `DELETE`, y luego importarlas en nuestro archivo principal.

Esto nos permite organizar mejor nuestro código, y hacerlo más mantenible y escalable.

Generalmente, crearemos una carpeta llamada `routes` donde guardaremos nuestros routers, y luego los importaremos en nuestro archivo principal.

## Crear un router

Para exportar un router, necesitamos crear un archivo con las rutas, y luego exportar el router. Por ejemplo, vamos a crear un archivo `usuarios.js` con las rutas relacionadas con los usuarios:

```js
// routes/usuarios.js
const express = require('express')
const router = express.Router()

router.get('/usuarios', (req, res) => {
  res.send('GET /usuarios')
})

router.post('/usuarios', (req, res) => {
  res.send('POST /usuarios')
})

module.exports = router
```

Luego, en nuestro archivo principal, importamos el router y lo usamos con el método `use`:

```js
// index.js
const express = require('express')
const app = express()
const usuariosRouter = require('./routes/usuarios')

app.use(usuariosRouter)

app.listen(3000, () => {
  console.log('Servidor iniciado')
})
```

Ahora, si visitamos `/usuarios`, veremos el mensaje `GET /usuarios`, y si enviamos un POST, veremos el mensaje `POST /usuarios`.