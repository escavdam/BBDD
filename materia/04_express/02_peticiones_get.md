# Peticiones GET

En Express crear una ruta es muy sencillo. Para crear una ruta, debemos usar el método `get` del objeto `app`. Este método recibe dos parámetros: la ruta, y un callback que se ejecutará cuando se visite la ruta.

```js
app.get('/', (req, res) => {
  res.send('Hola mundo')
})
```

Podemos mandar cualquier tipo de dato en la respuesta. Por ejemplo, podemos mandar un objeto:

```js
app.get('/', (req, res) => {
  res.send({ mensaje: 'Hola mundo' })
})
```

O un array:

```js
app.get('/', (req, res) => {
  res.send([1, 2, 3])
})
```

No es necesario convertir los datos a JSON, Express lo hace automáticamente.

Si quieres enviar un archivo HTML, puedes usar el método `sendFile`:

```js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
```
