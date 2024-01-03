# fs

`fs` es un módulo de Node.js que nos permite acceder al sistema de archivos del sistema operativo.

```javascript
const fs = require("fs")

fs.writeFileSync("archivo.txt", "Hola mundo")
```

## `fs.writeFileSync`

El método `fs.writeFileSync` nos permite escribir un archivo de forma síncrona.

```javascript
fs.writeFileSync("archivo.txt", "Hola mundo")
```

Muy util para crear json, podemos añadir el parametro "utf8" para añadir la codificacion de caracteres.

```javascript
const person = {
  name: "Juan",
  age: 25,
}

fs.writeFileSync("archivo.json", JSON.stringify(person), "utf8")
```

## `fs.writeFileAsync`

El método `fs.writeFileAsync` nos permite escribir un archivo de forma asíncrona.

```javascript
fs.writeFileAsync("archivo.txt", "Hola mundo", (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Archivo creado")
  }
})
```

## `fs.readFileSync`

El método `fs.readFileSync` nos permite leer un archivo de forma síncrona.

```javascript
const contenido = fs.readFileSync("archivo.txt", "utf8")

console.log(contenido)
```

Si quieres editar el contenido de un archivo, puedes usar el método `fs.readFileSync` para leer el archivo, editar el contenido, y luego usar el método `fs.writeFileSync` para escribir el archivo.

```javascript
const contenido = fs.readFileSync("archivo.txt", "utf8")

const nuevo_contenido = contenido + "\nAdios mundo"

fs.writeFileSync("archivo.txt", nuevo_contenido)
```

## `fs.readFile`

El método `fs.readFile` nos permite leer un archivo de forma asíncrona.

```javascript
fs.readFile("archivo.txt", "utf8", (err, contenido) => {
  if (err) {
    console.log(err)
  } else {
    console.log(contenido)
  }
})
```

## `fs.readdirSync`

El método `fs.readdirSync` nos permite leer el contenido de un directorio de forma síncrona.

```javascript
const archivos = fs.readdirSync("carpeta")

console.log(archivos)
```

## `fs.readdir`

El método `fs.readdir` nos permite leer el contenido de un directorio de forma asíncrona.

```javascript
fs.readdir("carpeta", (err, archivos) => {
  if (err) {
    console.log(err)
  } else {
    console.log(archivos)
  }
})
```

## `fs.mkdirSync`

El método `fs.mkdirSync` nos permite crear un directorio de forma síncrona.

```javascript
fs.mkdirSync("carpeta")
```

## `fs.mkdir`

El método `fs.mkdir` nos permite crear un directorio de forma asíncrona.

```javascript
fs.mkdir("carpeta", (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Carpeta creada")
  }
})
```

