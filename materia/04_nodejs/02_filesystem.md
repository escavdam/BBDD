# fs

`filesystem` es un módulo nativo de Node.js que nos permite trabajar con el sistema de archivos, podremos crear, leer, actualizar y eliminar archivos y carpetas.

La API incluye tanto métodos síncronos como asíncronos, pero se recomienda usar los métodos asíncronos ya que los métodos síncronos bloquean el hilo principal de Node.js, y esto puede afectar el rendimiento de nuestra aplicación.

## Usar el módulo

Para usar el módulo `filesystem`, debemos importarlo usando la palabra reservada `require`.

```javascript
const fs = require("fs")
```

## Leer directorios

Podemos ver el contenido de una carpeta con los métodos `readdir` y `readdirSync`.

```javascript
const dir = fs.readdirSync("./carpeta")
console.log(dir)
```

```javascript
fs.readdir("./carpeta", (err, dir) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(dir)
})
```

## Crear directorios

Podemos crear una carpeta con los métodos `mkdir` y `mkdirSync`.

```javascript
fs.mkdirSync("./carpeta")
```

```javascript
fs.mkdir("./carpeta", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Carpeta creada")
})
```

## Eliminar directorios

Podemos eliminar una carpeta con los métodos `rmdir` y `rmdirSync`.

```javascript
fs.rmdirSync("./carpeta")
```

```javascript
fs.rmdir("./carpeta", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Carpeta eliminada")
})
```

## Leer archivos

Podemos leer un archivo con los métodos `readFile` y `readFileSync`.

```javascript
const contenido = fs.readFileSync("./archivo.txt", "utf-8")
console.log(contenido)
```

```javascript
fs.readFile("./archivo.txt", "utf-8", (err, contenido) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(contenido)
})
```

Podemos ir leyendo el archivo de a pedazos con el método `createReadStream`.

```javascript
const stream = fs.createReadStream("./archivo.txt", "utf-8")

stream.on("data", (chunk) => {
  console.log(chunk)
})

stream.on("end", () => {
  console.log("Fin del archivo")
})
```

Esto es util si el archivo es muy grande y no queremos cargarlo todo en memoria.

## Crear archivos

Podemos crear un archivo con los métodos `writeFile` y `writeFileSync`.

```javascript
fs.writeFileSync("./archivo.txt", "Hola mundo")
```

```javascript
fs.writeFile("./archivo.txt", "Hola mundo", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Archivo creado")
})
```

Podemos ir escribiendo el archivo de a pedazos con el método `createWriteStream`.

```javascript
const stream = fs.createWriteStream("./archivo.txt", "utf-8")

stream.write("Hola")

stream.end(" mundo")
```

En este caso usaremos el método `write` para escribir el contenido del archivo, y el método `end` para indicar que terminamos de escribir.

## Actualizar archivos

Podemos actualizar un archivo con los métodos `appendFile` y `appendFileSync`.

```javascript
fs.appendFileSync("./archivo.txt", "Contenido extra")
```

```javascript
fs.appendFile("./archivo.txt", "Contenido extra", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Archivo actualizado")
})
```

Ambos métodos agregan el contenido al final del archivo.

## Eliminar archivos

Podemos eliminar un archivo con los métodos `unlink` y `unlinkSync`.

```javascript
fs.unlinkSync("./archivo.txt")
```

```javascript
fs.unlink("./archivo.txt", (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Archivo eliminado")
})
```



