# Objetos globales

Node.js nos proporciona algunos objetos globales que nos permiten acceder a funcionalidades del sistema operativo, como el sistema de archivos, o el sistema de procesos.

## `console`

El objeto `console` nos permite imprimir mensajes en la consola.

```javascript
console.log("Hola mundo")
```

## `process`

El objeto `process` nos permite acceder a información sobre el proceso actual, como los argumentos con los que se ejecutó, o el directorio de trabajo actual.

```javascript
console.log(process.argv)
console.log(process.cwd())
```

## `fs`

El objeto `fs` nos permite acceder al sistema de archivos del sistema operativo.

```javascript
const fs = require("fs")

fs.writeFileSync("archivo.txt", "Hola mundo")
```

## `path`

El objeto `path` nos permite trabajar con rutas de archivos.

```javascript
const path = require("path")

console.log(path.join("carpeta", "archivo.txt"))
```

## `os`

El objeto `os` nos permite acceder a información sobre el sistema operativo.

```javascript
const os = require("os")

console.log(os.platform())
```

## `http`

El objeto `http` nos permite crear servidores web simples:

```javascript
const http = require("http")

//creamos un servidor que envie index.html

const server = http.createServer((req, res) => {
  res.end("Hola mundo")
})

server.listen(3000)
```
