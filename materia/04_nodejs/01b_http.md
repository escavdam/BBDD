# http

El módulo `http` nos permite crear servidores web en Node.js. Podemos usarlo para crear un servidor web que responda a las peticiones de los clientes.

## Crear un servidor

Para crear un servidor, debemos importar el módulo `http` usando la palabra reservada `require`, y luego usar el método `createServer` para crear el servidor.

```javascript
const http = require("http")
const server = http.createServer()
```

Luego, podemos usar el método `listen` para indicar en qué puerto queremos que escuche el servidor.

```javascript
server.listen(3000)
```

## Servir archivos estáticos

Al igual que nuestra extension live-server de VSCode, podemos servir archivos estáticos usando el módulo `http`.

```javascript
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" })
      res.end("<h1>Error interno</h1>")
      return
    }

    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(data)
  })
})
server.listen(3000, () => console.log("Servidor iniciado"))
```


