# Nodejs

## Introducción

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node nos permite ejecutar código JavaScript en el servidor o en nuestro ordenador local, sin necesidad de un navegador.

## ¿Por qué ejecutar JavaScript en el servidor?

JavaScript es un lenguaje de programación que se ejecuta en el navegador, y que nos permite crear aplicaciones web interactivas. Sin embargo, JavaScript también puede ser ejecutado en el servidor, y esto nos permite crear aplicaciones web con funcionalidades más avanzadas.

Al ejecutarse en un servidor, JavaScript puede acceder a recursos del sistema operativo, como el sistema de archivos, y a recursos de red, como bases de datos o servicios web. Esto nos permite crear aplicaciones web que pueden almacenar datos, o interactuar con otras aplicaciones. 
Aunque hay otros lenguajes de programación que nos permiten hacer esto (Java, Python...), JavaScript es el lenguaje más popular en el mundo, y el que más desarrolladores tiene, por lo que es una buena opción para crear aplicaciones web. Además, si ya sabes JavaScript, no tienes que aprender otro lenguaje de programación para crear aplicaciones web que necesiten ejecutarse en el servidor.

## Ejecutando JavaScript localmente/servidor

Una vez instalado, podemos ejecutar código JavaScript en nuestro ordenador usando el comando `node` seguido del nombre del archivo que queremos ejecutar.

```bash
node mi_archivo.js
```

Si el archivo se encuentra en una carpeta diferente, debemos especificar la ruta completa al archivo.

```bash
node /home/juan/mi_archivo.js
```

Ademas, si hay un archivo llamado `index.js` o `main.js` en la carpeta actual, podemos ejecutarlo usando el comando `node` sin especificar el nombre del archivo.

```bash
node
```

## Objetos globales

Node.js nos proporciona algunos objetos globales que nos permiten acceder a funcionalidades del sistema operativo, como el sistema de archivos, o el sistema de procesos.

### `console`

El objeto `console` nos permite imprimir mensajes en la consola.

```javascript
console.log("Hola mundo")
```

### `process`

El objeto `process` nos permite acceder a información sobre el proceso actual, como los argumentos con los que se ejecutó, o el directorio de trabajo actual.

```javascript
console.log(process.argv)
console.log(process.cwd())
```

### `fs`

El objeto `fs` nos permite acceder al sistema de archivos del sistema operativo.

```javascript
const fs = require("fs")

fs.writeFileSync("archivo.txt", "Hola mundo")
```

### `path`

El objeto `path` nos permite trabajar con rutas de archivos.

```javascript
const path = require("path")

console.log(path.join("carpeta", "archivo.txt"))
```

### `os`

El objeto `os` nos permite acceder a información sobre el sistema operativo.

```javascript
const os = require("os")

console.log(os.platform())
```

### `http`

El objeto `http` nos permite crear servidores web simples:

```javascript
const http = require("http")

//creamos un servidor que envie index.html

const server = http.createServer((req, res) => {
  res.end("Hola mundo")
})

server.listen(3000)
```

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

## Subiendo módulos a NPM

Para subir un módulo a NPM, debemos crear una cuenta en [npmjs.com](https://www.npmjs.com/), y luego ejecutar el comando `npm login` en la carpeta del proyecto.

```bash
npm login
```

Esto nos pedirá nuestro nombre de usuario, contraseña y correo electrónico. Luego, para subir el módulo de forma pública, debemos ejecutar el comando `npm publish --access public`.

```bash
npm publish --access public
```

