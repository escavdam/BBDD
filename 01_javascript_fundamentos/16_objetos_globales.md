## Objetos Globales

Los objetos globales son objetos que están disponibles en cualquier parte del código, sin necesidad de importarlos, JavaScript los incluye por defecto.

### Objetos Globales

#### `console`

La consola con la que hemos estado trabajando hasta ahora es un objeto global, que nos permite mostrar mensajes en la consola del navegador.

```javascript
console.log("Hola mundo")
```

Algunos métodos de la consola son:
- `console.log()`: Muestra un mensaje en la consola.
- `console.warn()`: Muestra un mensaje de advertencia en la consola.
- `console.error()`: Muestra un mensaje de error en la consola.
- `console.clear()`: Limpia la consola.
- `console.table()`: Muestra una tabla con los datos que le pasemos.
- `console.time()`: Inicia un temporizador.
- `console.timeEnd()`: Finaliza el temporizador.
- `console.group()`: Crea un grupo de mensajes.
- `console.groupEnd()`: Finaliza el grupo de mensajes.
- `console.count()`: Cuenta el número de veces que se ha llamado a `console.count()`.

#### `Math`

El objeto `Math` nos permite realizar operaciones matemáticas.

```javascript
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.random()) // 0.123456789
console.log(Math.round(4.7)) // 5
console.log(Math.pow(8, 2)) // 64
console.log(Math.sqrt(64)) // 8
console.log(Math.abs(-4.7)) // 4.7
console.log(Math.ceil(4.4)) // 5
console.log(Math.floor(4.7)) // 4
console.log(Math.sin(90 * Math.PI / 180)) // 1
console.log(Math.cos(0 * Math.PI / 180)) // 1
console.log(Math.min(0, 150, 30, 20, -8, -200)) // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)) // 150
console.log(Math.floor(Math.random() * 10)) // 0-9
```

#### `Date`

El objeto `Date` nos permite trabajar con fechas.

```javascript
let fecha = new Date()
console.log(fecha) // 2020-10-20T10:00:00.000Z
console.log(fecha.getFullYear()) // 2020
console.log(fecha.getMonth()) // 9
console.log(fecha.getDate()) // 20
console.log(fecha.getDay()) // 2
console.log(fecha.getHours()) // 12
console.log(fecha.getMinutes()) // 0
console.log(fecha.getSeconds()) // 0
console.log(fecha.getMilliseconds()) // 0
console.log(fecha.getTime()) // 1603180800000
```

#### `JSON`

El objeto `JSON` nos permite trabajar con objetos JSON.

```javascript
let usuario = {
  nombre: "Juan",
  apellidos: "García",
  edad: 25,
  profesión: "Estudiante"
}

let usuarioJSON = JSON.stringify(usuario)
console.log(usuarioJSON) // {"nombre":"Juan","apellidos":"García","edad":25,"profesión":"Estudiante"}

let usuario2 = JSON.parse(usuarioJSON)
console.log(usuario2) // {nombre: "Juan", apellidos: "García", edad: 25, profesión: "Estudiante"}
```

#### `localStorage`

El objeto `localStorage` nos permite almacenar datos en el navegador.

```javascript
let puntos = 100
localStorage.setItem("puntos", puntos)
console.log(localStorage.getItem("puntos")) // Juan
localStorage.removeItem("puntos")
console.log(localStorage.getItem("puntos")) // null
```

#### `sessionStorage`

El objeto `sessionStorage` nos permite almacenar datos en el navegador, pero estos datos se borran cuando se cierra la pestaña.

```javascript
let puntos = 100
sessionStorage.setItem("puntos", puntos)
console.log(sessionStorage.getItem("puntos")) // Juan
sessionStorage.removeItem("puntos")
console.log(sessionStorage.getItem("puntos")) // null
```

#### `location`

El objeto `location` nos permite trabajar con la URL de la página.

```javascript
console.log(location.href) // https://www.google.com/
console.log(location.hostname) // www.google.com
console.log(location.pathname) // /
console.log(location.protocol) // https:
console.log(location.port) // 443
console.log(location.search) // ?q=google
```

#### `history`

El objeto `history` nos permite trabajar con el historial de navegación.

```javascript
history.back() // Vuelve a la página anterior
history.forward() // Vuelve a la página siguiente
```

#### `navigator`

El objeto `navigator` nos permite trabajar con el navegador.

```javascript
console.log(navigator.appName) // Netscape
console.log(navigator.appCodeName) // Mozilla
console.log(navigator.platform) // Win32
console.log(navigator.language) // es-ES
console.log(navigator.cookieEnabled) // true
console.log(navigator.onLine) // true
```

#### `screen`

El objeto `screen` nos permite trabajar con la pantalla del usuario.

```javascript
console.log(screen.width) // 1920
console.log(screen.height) // 1080
console.log(screen.availWidth) // 1920
console.log(screen.availHeight) // 1040
console.log(screen.colorDepth) // 24
console.log(screen.pixelDepth) // 24
```
