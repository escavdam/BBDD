# Importaciones

Nodejs nos deja importar módulos de dos formas para segmentar nuestro código de forma más cómoda en nuestros proyectos, CommonJS y ES Modules.

## CommonJS

CommonJS es el sistema de módulos que usa Nodejs por defecto, fué la primera implementación de este patrón disponible. Para importar un módulo, usamos la función `require` y le pasamos la ruta al archivo que queremos importar.

En ocasiones, los desarrolladores usan la extensión `.cjs` para indicar que un archivo usa el sistema de módulos CommonJS.

```js
// index.js.js
const fs = require('fs');
const miModulo = require('./mi_modulo.js');
```

Para exportar un módulo, asignamos el valor que queremos exportar a la propiedad `exports` del objeto `module`.

```js
// mi_modulo.js

const miModulo = {
  nombre: 'Juan',
  apellido: 'García',
  edad: 30,
};

module.exports = miModulo;
```

También podemos exportar un módulo asignando un objeto a la propiedad `exports` del objeto `module` directamente si sólo necesitamos exportar una parte del código.

```js
// mi_modulo.js

module.exports = {
  nombre: 'Juan',
  apellido: 'García',
  edad: 30,
};
```

O exportar un objeto con varias propiedades.

```js
// mi_modulo.js

const usuario = {
  nombre: 'Juan',
  apellido: 'García',
  edad: 30,
};

function saludo () {
  console.log(`Hola, me llamo ${usuario.nombre} ${usuario.apellido} y tengo ${usuario.edad} años.`);
}

module.exports = {
  usuario,
  saludo,
};
```

## ES Modules

ES Modules es el sistema de módulos que usa JavaScript por defecto. Para importar un módulo, usamos la palabra reservada `import` seguida de la ruta al archivo que queremos importar.

En ocasiones, los desarrolladores usan la extensión `.mjs` para indicar que un archivo usa el sistema de módulos ES Modules.

```js
// index.js

import fs from 'fs';
import miModulo from './mi_modulo.js';
```

Para exportar un módulo, usamos la palabra reservada `export` seguida del valor que queremos exportar.

```js
// mi_modulo.js

const miModulo = {
  nombre: 'Juan',
  apellido: 'García',
  edad: 30,
};

export default miModulo;
```

En este caso, sólo podemos exportar un valor por defecto por archivo. Si queremos exportar varios valores, podemos usar la palabra reservada `export` seguida de la palabra reservada `default` para exportar un valor por defecto, y la palabra reservada `export` seguida de la palabra reservada `const` para exportar valores adicionales.

```js
// mi_modulo.js

const usuario = {
  nombre: 'Juan',
  apellido: 'García',
  edad: 30,
};

function saludo () {
  console.log(`Hola, me llamo ${usuario.nombre} ${usuario.apellido} y tengo ${usuario.edad} años.`);
}

export default usuario;
export { saludo };
```

## Uso de nombres nativos de paquetes globales

Desde hace poco, en Nodejs recomiendan usar los nombres nativos de los paquetes globales en lugar de los nombres cortos. Por ejemplo, en lugar de usar `fs`, debemos usar `node:fs` con el fin de evitar conflictos entre diferentes paquetes.

```js
// index.js

import fs from 'node:fs';
```

## Convertir entre CommonJS y ES Modules

Cuando usamos las extensiones `.cjs` o `.mjs`, Nodejs usa el sistema de módulos correspondiente. Además nos mostrará algunas ayudas extra en nuestro editor si usamos VSCode.

