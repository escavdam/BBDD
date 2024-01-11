# CORS

El protocolo CORS (Cross-Origin Resource Sharing) es un mecanismo que permite que un recurso restringido en una página web sea solicitado desde otro dominio fuera del dominio desde el que se sirvió el primer recurso. Una página web puede liberar explícitamente un recurso mediante el uso de la cabecera Access-Control-Allow-Origin.

Por defecto, nuestro servidor solo permite peticiones desde el mismo dominio. Por ejemplo, si nuestro servidor está en `localhost:3000`, solo permitirá peticiones desde `localhost:3000`. Si intentamos hacer una petición desde otro dominio, nos dará un error de CORS.

Para permitir peticiones desde otros dominios, debemos instalar el paquete `cors`:

```bash
npm install cors
```

Y luego usarlo en nuestro servidor:

```js
const cors = require('cors')

app.use(cors())
```

Con esto, nuestro servidor permitirá peticiones desde cualquier dominio.

## Opciones

Podemos configurar el paquete `cors` para que solo permita peticiones desde ciertos dominios. Para ello, debemos pasarle un objeto con las opciones:

```js
const corsOptions = {
  origin: 'http://example.com'
}

app.use(cors(corsOptions))
```

En este ejemplo, solo permitiremos peticiones desde `http://example.com`.

También podemos pasarle un array con varios dominios:

```js
const corsOptions = {
  origin: ['http://example.com', 'http://example2.com']
}

app.use(cors(corsOptions))
```

Normalmente los servidores permiten peticiones desde cualquier dominio, pero si quieres restringirlo, puedes usar esta opción.

## Preflight

Cuando hacemos una petición `POST`, `PUT` o `DELETE`, el navegador primero hace una petición `OPTIONS` para comprobar si el servidor permite peticiones desde ese dominio. Si el servidor no permite peticiones desde ese dominio, el navegador no hará la petición.

Si quieres que tu servidor permita peticiones `OPTIONS`, debes añadir la opción `optionsSuccessStatus`:

```js
const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
```

En este ejemplo, el servidor responderá con un código `200` cuando reciba una petición `OPTIONS`.

**No siempre** es necesario añadir esta opción. Pero hay algunos navegadores o dispositivos que no hacen la petición `POST`, `PUT` o `DELETE` si el servidor no responde con un código `200` en la petición `OPTIONS`.
