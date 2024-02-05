# Path

El módulo path nos permite trabajar con rutas de archivos y directorios. 

Nos ayuda a solucionar varios problemas:

- Crear rutas de archivos que funcionen en cualquier sistema operativo.
- Unir rutas de archivos y directorios.
- Extraer el nombre del archivo de una ruta.
- Extraer la extensión del archivo de una ruta.
- Extraer el directorio de una ruta.

## Uso

Primero, necesitamos importar el módulo `path`:

```js
const path = require('path');
```

### Crear rutas

Podemos crear rutas de archivos y directorios usando `path.join()`. 

```js
const ruta = path.join('carpeta', 'archivo.txt');
console.log(ruta); // carpeta/archivo.txt
```

### Unir rutas

Podemos unir rutas de archivos y directorios usando `path.resolve()`. 

```js
const ruta = path.resolve('carpeta', 'archivo.txt');
console.log(ruta); // /home/usuario/carpeta/archivo.txt
```

Muy útil para crear rutas absolutas.

### Extraer el nombre del archivo

Podemos extraer el nombre del archivo de una ruta usando `path.basename()`. 

```js
const nombre = path.basename('/home/usuario/carpeta/archivo.txt');
console.log(nombre); // archivo.txt
```

### Extraer la extensión del archivo

Podemos extraer la extensión del archivo de una ruta usando `path.extname()`. 

```js
const ext = path.extname('/home/usuario/carpeta/archivo.txt');

console.log(ext); // .txt
```

### Extraer el directorio

Podemos extraer el directorio de una ruta usando `path.dirname()`. 

```js
const dir = path.dirname('/home/usuario/carpeta/archivo.txt');

console.log(dir); // /home/usuario/carpeta
```

## Valores especiales

También disponemos de valores especiales para trabajar con rutas:

- `__dirname`: La ruta del directorio del archivo actual.
- `__filename`: La ruta del archivo actual.

```js
console.log(__dirname); // /home/usuario/proyecto
console.log(__filename); // /home/usuario/proyecto/index.js
console.log(path.join(__dirname, 'archivo.txt')); // /home/usuario/proyecto/archivo.txt
```


