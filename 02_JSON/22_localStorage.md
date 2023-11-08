# localStorage

## Introducción

El objeto `localStorage` nos permite almacenar datos en el navegador de forma persistente, es decir, que los datos se mantienen aunque cerremos el navegador.

Esta será la forma más básica de almacenar datos en el navegador, es muy útil para almacenar datos que necesitamos en el navegador, pero que no necesitamos enviar al servidor, pero también nos permite comenzar a trabajar con JSON, que es el formato que usaremos para enviar datos al servidor.

## Guardar datos

Para guardar datos en el navegador, usaremos el método `setItem` del objeto `localStorage`, este método recibe dos parámetros, el primero es el nombre de la variable que queremos guardar, y el segundo es el valor que queremos guardar.

```js
localStorage.setItem('nombre', 'Juan')
```

## Leer datos

Para leer datos del navegador, usaremos el método `getItem` del objeto `localStorage`, este método recibe un parámetro, el nombre de la variable que queremos leer, y devuelve el valor de la variable.

```js
const nombre = localStorage.getItem('nombre')
```

## Eliminar datos

Para eliminar datos del navegador, usaremos el método `removeItem` del objeto `localStorage`, este método recibe un parámetro, el nombre de la variable que queremos eliminar.

```js
localStorage.removeItem('nombre')
```

## Limpiar datos

Para eliminar todos los datos del navegador, usaremos el método `clear` del objeto `localStorage`, este método no recibe parámetros.

```js
localStorage.clear()
```

