# Header

El header de una petición HTTP es un objeto que contiene información adicional sobre la petición. 

## Cabeceras comunes

### Accept

Indica el tipo de contenido que acepta el cliente. Acepta los siguientes valores:

- `text/html`: HTML.
- `text/plain`: Texto plano.
- `application/json`: JSON.
- `application/xml`: XML.
- `image/png`: PNG.
- `image/jpeg`: JPEG.
- `image/gif`: GIF.
- `application/octet-stream`: Cualquier tipo de archivo.
- `*/*`: Cualquier tipo de contenido.
- `text/*`: Cualquier tipo de contenido de texto.
- `image/*`: Cualquier tipo de contenido de imagen.
- `audio/*`: Cualquier tipo de contenido de audio.
- `video/*`: Cualquier tipo de contenido de vídeo.
- `application/*`: Cualquier tipo de contenido de aplicación.
- `message/*`: Cualquier tipo de contenido de mensaje.
- `multipart/*`: Cualquier tipo de contenido multipart.

Estos valores son conocidos como [MIME types](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

### Content-Type

Indica el tipo de contenido que se envía al servidor. Acepta los mismos valores que `Accept`.

### Content-Length

Indica el tamaño del cuerpo de la petición en bytes.

### User-Agent

Aporta información sobre el sistema operativo y la versión del navegador que realiza la petición.

### Accept-Language

Indica el idioma que acepta el cliente. Acepta los siguientes valores:

- `es`: Español.
- `en`: Inglés.
- `fr`: Francés.
- `de`: Alemán.
- `it`: Italiano.
- `pt`: Portugués.
- `ar`: Árabe.
- `ru`: Ruso.
- `zh`: Chino.
- `ja`: Japonés.
- `hi`: Hindi.
- `bn`: Bengalí.

Podemos indicar varios idiomas separados por comas. Por ejemplo: `es, en, fr`.

### Authorization

Indica el tipo de autenticación que se utiliza para realizar la petición. **No confundir con autenticación HTTP**.

Acepta los siguientes valores:

- Basic: Autenticación básica.
- Bearer: Autenticación con token.
- Digest: Autenticación digest.

### Cookie

Indica las cookies que se envían al servidor. Las cookies son pequeños archivos que se almacenan en el navegador y que se envían al servidor con cada petición. Se usan para almacenar información sobre el usuario.

Aunque al principio se usaban para almacenar información sobre el usuario, hoy en día se usan para almacenar información sobre la sesión del usuario. Por ejemplo, el identificador de la sesión.

Si queremos almacenar información sobre el usuario o la sesión, es mejor usar el almacenamiento local o las sesiones de Express.

### Set-Cookie

Indica las cookies que se envían al cliente. Las cookies son pequeños archivos que se almacenan en el navegador y que se envían al servidor con cada petición. Se usan para almacenar información sobre el usuario.

