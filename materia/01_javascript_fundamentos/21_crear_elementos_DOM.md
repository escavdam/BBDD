# Crear elementos HTML mediante JavaScript

En muchos casos deberemos crear elementos HTML mediante JavaScript. Esto es muy útil cuando queremos crear elementos dinámicamente, por ejemplo, cuando queremos mostrar una lista de elementos que vienen de una base de datos o introducidos por el usuario.

Para esto, usaremos dos métodos del objeto `document`, `createElement` y `appendChild`:

## Crear elementos

Para poder crear elementos HTML mediante JavaScript, debemos utilizar el método `createElement` del objeto `document`.

```javascript
const elemento = document.createElement('p');
```

Este elemento es un nodo del DOM, pero aún no tiene contenido, ni está añadido a nuestro documento HTML.

```javascript
const elemento = document.createElement('p');
elemento.innerHTML = 'Hola mundo';
document.body.appendChild(elemento);
```

Este código crea un elemento `<p>` con el texto `Hola mundo` y lo añade al final del elemento `<body>`. Podemos añadirlo en cualquier otro elemento, por ejemplo, en un elemento con la clase `contenedor`, siendo idealmente este un elemento `<div>`.

```javascript
const elemento = document.createElement('p');
elemento.innerHTML = 'Hola mundo';
const contenedor = document.querySelector('.contenedor');
contenedor.appendChild(elemento);
```

Podemos evitar el HTML por completo:

```javascript
const elemento = document.createElement('p');
const contenedor = document.createElement('div');
contenedor.appendChild(elemento);
document.body.appendChild(contenedor);
```