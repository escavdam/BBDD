# DOM (Document Object Model)

El DOM es la representación del documento HTML en forma de árbol, generada por el navegador, que se puede modificar con JavaScript para cambiar dinámicamente los contenidos y aspecto de la página web.

Una web no es más que un documento HTML que el navegador interpreta y muestra en pantalla. El DOM es la representación de ese documento en forma de árbol, que se puede modificar con JavaScript para cambiar dinámicamente los contenidos y aspecto de la página web.

Como ya hemos visto, los objetos poseen propiedades y métodos. El DOM es un conjunto de objetos que representan todos los elementos de la página web, y que poseen propiedades y métodos para interactuar con ellos mediante js.

## `document`

El objeto `document` es el nodo raíz del DOM. Es el punto de partida para acceder a todos los elementos de la página web.

```javascript
console.log(document)
```

### Propiedades

#### `document.location`

La propiedad `document.location` contiene información sobre la URL de la página web.

```javascript
console.log(document.location)
```

#### `document.title`

La propiedad `document.title` contiene el título de la página web.

```javascript
console.log(document.title)
```

#### `document.body`

La propiedad `document.body` contiene el elemento `<body>`.

```javascript
console.log(document.body)
```

#### `document.head`


La propiedad `document.head` contiene el elemento `<head>`.

```javascript
console.log(document.head)
```

### Métodos

#### Selectores

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByTagName()`
- `document.querySelector()`
- `document.querySelectorAll()`
- `document.getElementsByName()`
- `document.forms()`
- `document.images()`
- `document.links()`
- `document.scripts()`
- `document.styleSheets()`
- `document.embeds()`
- `document.plugins()`
- `document.hasFocus()`
- `document.activeElement()`
- `document.hasChildNodes()`

#### Crear elementos

- `document.createElement()`
- `document.createTextNode()`
- `document.createAttribute()`
- `document.createComment()`
- `document.createDocumentFragment()`
- `document.createEvent()`
- `document.createRange()`
- `document.createTreeWalker()`

#### Modificar elementos

- `document.appendChild()`
- `document.insertBefore()`
- `document.replaceChild()`
- `document.removeChild()`
- `document.cloneNode()`
- `document.normalize()`
- `document.hasAttributes()`
- `document.hasChildNodes()`

#### Otros

- `document.write()`
- `document.writeln()`
- `document.open()`
- `document.close()`

## `element`

Los elementos HTML son los nodos del DOM que representan las etiquetas HTML. Por ejemplo, el elemento `<body>` representa la etiqueta `<body>`.

```javascript
console.log(document.body)
```

### Propiedades

#### `element.tagName`

La propiedad `element.tagName` contiene el nombre de la etiqueta HTML.

```javascript
console.log(document.body.tagName)
```

#### `element.innerHTML`

La propiedad `element.innerHTML` contiene el contenido HTML del elemento.

```javascript
console.log(document.body.innerHTML)
```

#### `element.outerHTML`

La propiedad `element.outerHTML` contiene el contenido HTML del elemento, incluyendo la etiqueta de apertura y cierre.

```javascript
console.log(document.body.outerHTML)
```

#### `element.textContent`

La propiedad `element.textContent` contiene el contenido de texto del elemento.

```javascript
console.log(document.body.textContent)
```

#### `element.id`

La propiedad `element.id` contiene el valor del atributo `id` del elemento.

```javascript
console.log(document.body.id)
console.log(document.querySelector('.botonA').id)
```

#### `element.className`

La propiedad `element.className` contiene el valor del atributo `class` del elemento.

```javascript
console.log(document.body.className)
```
