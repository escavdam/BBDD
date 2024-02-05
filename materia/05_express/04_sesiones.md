# Sesiones

Las sesiones en express son una forma de almacenar información del usuario entre peticiones. Las sesiones son útiles para almacenar información del usuario, como el carrito de compras, la autenticación, etc.

Para usar sesiones en Express, necesitamos usar un middleware llamado `express-session` que sabe cómo manejar las sesiones.

Para usar `express-session` tras instalarlo:

```js
const express = require('express')
const session = require('express-session')
const app = express()

app.use(session({
  secret: 'mi-secreto',
  resave: false,
}));
```