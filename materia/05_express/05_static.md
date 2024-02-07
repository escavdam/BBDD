# Static middleware

El middleware estático es un middleware que se utiliza para servir archivos estáticos, como archivos HTML, imágenes, CSS y JavaScript.

Para usar el middleware estático, debemos pasarle un parámetro que es la ruta de la carpeta que queremos servir. Por ejemplo, si queremos servir la carpeta `public`, debemos hacer lo siguiente:

```js
app.use(express.static('public'))
```

En este ejemplo, estamos sirviendo la carpeta `public` en la raíz del servidor. Si queremos servir la carpeta `public` en una ruta específica, debemos hacer lo siguiente:

```js
app.use('/static', express.static('public'))
```

En este ejemplo, estamos sirviendo la carpeta `public` en la ruta `/static`.

Os permite crear un deploy rápido de una aplicación web, ya que no necesitamos configurar un servidor para servir archivos estáticos, pero también os permite crear una API REST de forma rápida, ya que podemos servir archivos estáticos y crear rutas con el mismo servidor.

