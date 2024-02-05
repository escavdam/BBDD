# Body

El cuerpo de una petición o respuesta HTTP contiene los datos que se envían al servidor o al cliente. Por ejemplo, los datos de un formulario, el contenido de una página web, etc.

El usuario puede usar diferentes partes del body para enviar informacion:

- **Formulario**: Los datos se envían en formato `x-www-form-urlencoded` o `multipart/form-data`.
- **JSON**: Los datos se envían en formato JSON.
- **Texto**: Los datos se envían en formato texto.
- **Binario**: Los datos se envían en formato binario.
- **XML**: Los datos se envían en formato XML.

Cuando estamos en express, podemos acceder al cuerpo de la petición con `req.body`. Para poder usarlo, necesitaremos configurar el middleware `express.json` en nuestra app previamente.
