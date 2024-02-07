# Morgan

Morgan es un middleware que nos permite hacer logging de las peticiones HTTP que recibimos. Es muy útil para depurar y monitorizar las peticiones que llegan a nuestro servidor.

Para usar Morgan, primero debemos instalarlo con npm:

```bash
npm install morgan
```

Luego, debemos importarlo y usarlo como middleware:

```js
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))

```

En este ejemplo, estamos usando el formato `dev` de Morgan. Morgan tiene varios formatos, como `combined`, `common`, `short`, `tiny`, etc. Podéis ver todos los formatos en la [documentación de Morgan](https://github.com/expressjs/morgan#readme)

Tambien podemos crear nuestros propios formatos:

```js
const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan(':method :remote-addr :url :status :res[content-length] - :response-time ms'))
```

En este ejemplo, estamos creando un formato personalizado que nos muestra el método, la dirección IP del cliente, la URL, el estado, la longitud del contenido y el tiempo de respuesta.


