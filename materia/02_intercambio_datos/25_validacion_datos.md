# Validación de datos

La validación de datos es un proceso que se realiza para determinar si los datos ingresados por el usuario son correctos y se encuentran dentro de los parámetros establecidos por nuestro sistema, en caso de que no sea así, se le informa al usuario que los datos ingresados no son correctos y se le solicita que los ingrese nuevamente.

## Validación de datos en el lado del cliente (Frontend)

La validación de datos en el lado del cliente se realiza mediante el uso de JavaScript, el cual nos permite validar los datos ingresados por el usuario en el navegador web, sin necesidad de enviarlos al servidor.

Esto nos permite:

- Evitar llamadas innecesarias al servidor.
- Mejorar la experiencia del usuario, ya que no es necesario esperar a que el servidor responda para saber si los datos ingresados son correctos o no.
- Validar los datos antes de enviarlos al servidor, lo cual nos permite reducir el número de errores en el servidor.
- Validar los datos en tiempo real, es decir, mientras el usuario los está ingresando.
- Validar los datos sin necesidad de recargar la página.

### Validación de datos con JavaScript

Ya sabemos acceder a 