# Crear servidor

Una vez tienes instalado Express, puedes crear un servidor con el siguiente código:

```js
const express = require('express') // Importar express
const app = express() // Crear una instancia de express

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000')) // Iniciar el servidor
```

Este código crea un servidor que escucha en el puerto 3000. Para iniciar el servidor, debemos ejecutar el comando `node` seguido del nombre del archivo:

```bash
node index.js
```

## Rutas

Una ruta es una dirección que se puede visitar en nuestro servidor. Por ejemplo, `/usuarios` o `/holamundo` es una ruta que podemos visitar en nuestro servidor. 

Para crear una ruta, debemos usar el método `get` del objeto `app`. Este método recibe dos parámetros: la ruta, y un callback que se ejecutará cuando se visite la ruta.

```js
app.get('/', (req, res) => {
  res.send('Hola mundo')
})
app.get('/usuarios', (req, res) => {
    res.send('Ruta a usuarios')
})
```

En este ejemplo, creamos dos rutas: `/` y `/usuarios`. Cuando se visite la ruta `localhost:3000/`, se ejecutará el callback que envía el mensaje `Hola mundo`. Cuando se visite la ruta `/usuarios`, se ejecutará el callback que envía el mensaje `Ruta a usuarios`.

