# HTTP

HTTP es un protocolo de comunicación que permite la transferencia de información en la web. Es el protocolo que permite que el navegador pueda solicitar recursos al servidor y que este le responda con los datos solicitados.

## Sintaxis

HTTP es un protocolo de petición-respuesta. El cliente realiza una petición al servidor y este le responde con los datos solicitados.

### Petición

Una petición HTTP se compone de:

- **Método**: Indica la acción que se quiere realizar sobre el recurso. Los métodos más comunes son:
  - **GET**: Solicita una representación del recurso especificado.
  - **POST**: Envía datos al servidor para crear un recurso.
  - **PUT**: Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
  - **DELETE**: Borra el recurso especificado.

- **Ruta**: Especifica el recurso sobre el que se quiere realizar la acción. Por ejemplo, `/users/1` para obtener el usuario con id 1.

- **Cabeceras**: Información adicional sobre la petición. Por ejemplo, el tipo de contenido que se acepta, el tipo de contenido que se envía, etc.

- **Cuerpo**: Datos que se envían al servidor. Por ejemplo, los datos de un formulario.

### Respuesta

Una respuesta HTTP se compone de:

- **Código de estado**: Indica el resultado de la petición. Los códigos de estado más comunes son:
  - **1xx**: Respuestas informativas.
  - **2xx**: Respuestas satisfactorias.
  - **3xx**: Redirecciones.
  - **4xx**: Errores del cliente.
  - **5xx**: Errores del servidor.

- **Cabeceras**: Información adicional sobre la respuesta. Por ejemplo, el tipo de contenido que se acepta, el tipo de contenido que se envía, etc.

- **Cuerpo**: Datos que se envían al cliente. Por ejemplo, el contenido de una página web.

## Ejemplo

### Petición

```
GET /users/1 HTTP/1.1
Host: ejemplo.com
Accept: application/json
```

Esta petición solicita al servidor el usuario con id 1 en formato JSON.

```
GET /images/logo.png HTTP/1.1
Host: ejemplo.com
Accept: image/png
```

Esta petición solicita al servidor el logo de la página web en formato PNG.

```
POST /users HTTP/1.1
Host: ejemplo.com
Content-Type: application/json

{
  "name": "adminrefachero",
  "password": "qwer"
}
```

Esta petición envía al servidor los datos de un nuevo usuario en formato JSON.

### Respuesta

```
HTTP/1.1 200 OK

{
  "id": 1,
  "name": "adminrefachero",
  "password": "qwer"
}
```

Esta respuesta indica que la petición se ha realizado correctamente y devuelve los datos del usuario con id 1 en formato JSON.

