## NPM

NPM (Node Package Manager) es un gestor de paquetes para Node.js. NPM nos permite instalar paquetes de código JavaScript que podemos usar en nuestros proyectos.

Para inicializar un proyecto de Node.js, debemos ejecutar el comando `npm init` en la carpeta del proyecto. Esto nos preguntará varias cosas acerca de nuestro proyecto y luego creará un archivo `package.json` que contiene información sobre el proyecto, y las dependencias que usemos.

```bash
npm init
```

Tambien puedes saltarte las preguntas usando el flag `-y`.

```bash
npm init -y
```

### Instalar paquetes

Para instalar un paquete, debemos ejecutar el comando `npm install` seguido del nombre del paquete que queremos instalar.

```bash
npm install express
```

Esto instalará el paquete en la carpeta `node_modules` de nuestro proyecto, y agregará una entrada en el archivo `package.json` con el nombre y la versión del paquete.

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Desinstalar paquetes

Para desinstalar un paquete, debemos ejecutar el comando `npm uninstall` seguido del nombre del paquete que queremos desinstalar.

```bash
npm uninstall express
```

Esto eliminará el paquete de la carpeta `node_modules` de nuestro proyecto, y eliminará la entrada en el archivo `package.json`.

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0"
}
```

### package.json

El archivo `package.json` contiene información sobre nuestro proyecto, como el nombre, la versión, y las dependencias que usemos. Este archivo es importante porque nos permite compartir nuestro proyecto con otras personas, y que puedan instalar las dependencias necesarias para ejecutarlo.

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

A este json podemos agregarle más información, los más comunes son:

- `name`: El nombre del proyecto.
- `version`: La versión del proyecto.
- `description`: Una descripción del proyecto.
- `main`: El archivo principal del proyecto, por defecto es `index.js` o `main.js`.
- `scripts`: Scripts que podemos ejecutar usando el comando `npm run`.
- `keywords`: Palabras clave que describen el proyecto.
- `author`: El autor del proyecto.
- `license`: La licencia del proyecto.

## Crear un módulo

Para crear un módulo, debemos crear un archivo `index.js` en la carpeta del proyecto, y luego exportar las funciones o clases que queremos que sean públicas.

```javascript
//index.js
function saludar() {
  console.log("Hola")
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = {
    saludar,
    random
}
```

## Subiendo módulos a NPM

Para subir un módulo a NPM, debemos crear una cuenta en [npmjs.com](https://www.npmjs.com/), y luego ejecutar el comando `npm login` en la carpeta del proyecto.

```bash
npm login
```

Esto nos pedirá nuestro nombre de usuario, contraseña y correo electrónico. Luego, para subir el módulo de forma pública, debemos ejecutar el comando `npm publish --access public`.

```bash
npm publish --access public
```

Esto subirá el módulo a NPM, y lo hará público para que cualquier persona pueda instalarlo.

Una vez subido el módulo, podemos instalarlo en cualquier proyecto usando el comando `npm install` seguido del nombre del módulo.

Además, dispondrás del módulo en diferentes CDN's como [unpkg](https://unpkg.com/), [jsdelivr](https://www.jsdelivr.com/) o [cdnjs](https://cdnjs.com/).

Si por ejemplo tu modulo npm se llama `mi_modulo` y quieres usarlo en tu proyecto, puedes hacerlo de la siguiente manera:

```html
<script src="https://unpkg.com/mi_modulo"></script>
```