# Rutas y http

Cada ruta tiene un método http asociado. Por defecto, el método http es `get`, pero podemos usar otros métodos http, como `post`, `put`, `patch`, y `delete`.

```js
app.get('/usuarios', (req, res) => {
  // Obtenemos todos los usuarios
})
app.post('/usuarios', (req, res) => {
    // Creamos un usuario
})
```

La ruta puede apuntar al mismo recurso, pero con métodos http diferentes. Por ejemplo, podemos tener una ruta `usuarios` que obtiene todos los usuarios, y otra ruta `usuarios` que crea un usuario.

Ten en cuenta que los verbos http tienen un significado específico. Por ejemplo, el verbo `get` se usa para obtener un recurso, y el verbo `post` se usa para crear un recurso. Si usamos el verbo `get` para crear un recurso, estaríamos usando el verbo http de forma incorrecta.

Los verbos aportan algunas diferencias en la forma en la que se envían los datos. Por ejemplo, cuando enviamos datos usando el verbo `get`, los datos se envían en la url. Pero cuando enviamos datos usando el verbo `post`, los datos se envían en el cuerpo de la petición. 

**Nota**: En el caso de `get`, los datos se envían en la url, pero no en el cuerpo de la petición. Esto significa que los datos se pueden ver en la url, y no se pueden enviar datos muy grandes, ademas, estos datos deben ser de tipo texto y pueden ser inseguros, ya que un usuario malicioso podría modificar la url y enviar datos falsos directamente al servidor.