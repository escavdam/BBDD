# require

La palabra reservada `require` nos permite importar módulos en Node.js. Para usarla, debemos asignarla a una variable, y pasarle como parámetro el nombre del módulo que queremos importar.

```javascript
const fs = require("fs")
const express = require("express")
```

## Módulos nativos

Node.js viene con una serie de módulos nativos que podemos importar usando `require`. Algunos de los más comunes son:

- `fs`: Para trabajar con el sistema de archivos.
- `http`: Para crear servidores web.
- `path`: Para trabajar con rutas de archivos.
- `os`: Para trabajar con el sistema operativo.
- `events`: Para trabajar con eventos.
- `crypto`: Para trabajar con encriptación.

Para ver la lista completa de módulos nativos, podemos visitar la [documentación oficial](https://nodejs.org/api/).

