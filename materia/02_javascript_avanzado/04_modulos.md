# Modulos

Los módulos nos permiten separar nuestro código en archivos diferentes, y luego importarlos en el archivo principal.

## Importar y exportar

Para exportar un módulo, debemos usar la palabra reservada `export` antes de la declaración de la variable, función o clase que queremos exportar.

```javascript
export const nombre = "Juan"

export function saludar() {
  console.log("Hola")
}
```

Luego, en el archivo principal, podemos importar el módulo usando la palabra reservada `import` seguida del nombre de la variable, función o clase que queremos importar, y el nombre del archivo donde se encuentra.

```javascript
import { nombre, saludar } from "./modulo.js"
```

## Exportar por defecto

También podemos exportar por defecto un módulo, para esto debemos usar la palabra reservada `export default` antes de la declaración de la variable, función o clase que queremos exportar.

```javascript
export default function saludar() {
  console.log("Hola")
}
```

Luego, en el archivo principal, podemos importar el módulo usando la palabra reservada `import` seguida del nombre de la variable, función o clase que queremos importar, y el nombre del archivo donde se encuentra.

```javascript
import mi_exportacion_por_defecto from "./modulo.js"

mi_exportacion_por_defecto()
```

## Importar todo

También podemos importar todo un módulo, para esto debemos usar la palabra reservada `import * as` seguida del nombre de la variable que queremos usar para acceder a las exportaciones del módulo, y el nombre del archivo donde se encuentra.

```javascript
import * as mi_modulo from "./modulo.js"

mi_modulo.nombre
mi_modulo.saludar()
```

import y export se usan en el lado del cliente, en el navegador.

