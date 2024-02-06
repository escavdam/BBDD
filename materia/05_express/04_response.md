# Response

El objeto `res` representa la respuesta HTTP, y tiene métodos para enviar la respuesta al cliente, como `send()`, `json()`, `redirect()`, y más.

Vamos a ver los diferentes métodos y propiedades del objeto `res`.

## send

El método `send` nos permite enviar una respuesta al cliente. Podemos enviar texto, HTML, JSON...

```js
app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.get('/html', (req, res) => {
  res.send('<h1>Hola mundo</h1>')
})

app.get('/json', (req, res) => {
  res.send({ mensaje: 'Hola mundo' })
})

```

## json

El método `json` nos permite enviar una respuesta en formato JSON.

```js
app.get('/json', (req, res) => {
  res.json({ mensaje: 'Hola mundo' })
})
```

Para usarla, necesitaremos configurar el middleware `express.json` en nuestra app previamente.

## status

El método `status` nos permite cambiar el código de estado de la respuesta.

```js
app.get('/error', (req, res) => {
  res.status(404).send('Página no encontrada')
})
```

## redirect

El método `redirect` nos permite redirigir al cliente a otra página.

```js
app.get('/redirigir', (req, res) => {
  res.redirect('https://google.com')
})
```

### set

El método `set` nos permite establecer el valor de una cabecera.

```js
res.set('Content-Type', 'text/plain')
```

### append

El método `append` nos permite añadir un valor a una cabecera.

```js
const miHeader = {
    'Content-Type': 'text/plain',
    'Content-Length': '123'
}

res.append(valores)
```

### remove

El método `remove` nos permite eliminar una cabecera.

```js
res.remove('Content-Type')
```

Podemos usar `remove` para eliminar una cabecera que no queremos enviar al cliente y que se ha establecido por defecto.

### json

El método `json` nos permite enviar una respuesta en formato JSON.

```js
app.get('/json', (req, res) => {
  res.json({ mensaje: 'Hola mundo' })
})
```

Para usarla, necesitaremos configurar el middleware `express.json` en nuestra app previamente.

### sendFile

El método `sendFile` nos permite enviar un archivo al cliente.

```js
app.get('/archivo', (req, res) => {
  res.sendFile('/ruta/a/mi/archivo.txt')
})
```

### download

El método `download` nos permite enviar un archivo al cliente para que lo descargue.

```js
app.get('/descargar', (req, res) => {
  res.download('/ruta/a/mi/archivo.txt')
})
```

### end

El método `end` nos permite finalizar la respuesta.

```js
app.get('/end', (req, res) => {
  res.end()
})
```

### write

El método `write` nos permite escribir una respuesta en el cuerpo de la respuesta, pudiendo separar la respuesta en varias partes.

```js
app.get('/write', (req, res) => {
  res.write('Hola')
  res.write(' mundo')
  res.end()
})
```

### writeHead

El método `writeHead` nos permite escribir la cabecera de la respuesta.

```js
res.writeHead(200, { 'Content-Type': 'text/plain' })
```
