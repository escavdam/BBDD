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
