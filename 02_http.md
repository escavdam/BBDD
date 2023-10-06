# Comunicación
Si queremos comunicarnos con una persona, necesitaremos:
- **Emisor** (nosotros) que envía el mensaje
- **Receptor** (la otra persona) que recibe el mensaje
- **Mensaje**, información codificada en un lenguaje que entendemos (castellano, inglés) 
- **Reglas**, no interrumpir, hablar a un volumen adecuado, etc.
- **Medio de transmisión**, habla, caracteres, dibujos

La comunicación entre dispositivos digitales es muy similar a este proceso, necesitaremos:
- **Cliente** quien envía una solicitud
- **Servidor** quien recibe la solicitud y envía una respuesta
- **Mensaje** información codificada en un lenguaje que entendemos (castellano, inglés)
- **Protocolo** reglas que nos permiten intercambiar información entre dos dispositivos, por ejemplo, HTTP, FTP, SSH, Profibus, etc.
- **Medio de transmisión** cable, fibra óptica, aire, etc.


## Protocolo HTTP
El protocolo HTTP (Hypertext Transfer Protocol) es un protocolo de la capa de aplicación que permite la transferencia de información en la World Wide Web. Fue desarrollado por el World Wide Web Consortium y la Internet Engineering Task Force, colaboración que culminó en 1999 con la publicación de una serie de RFC, el más importante de ellos es el RFC 2616 que especifica la [versión 1.1](https://tools.ietf.org/html/rfc2616) del protocolo.

### Características
- **Sin estado**: cada petición HTTP contiene toda la información necesaria para ejecutarla, por lo que ni el cliente ni el servidor necesitan recordar ningún estado previo para satisfacerla. En este sentido, el protocolo HTTP es considerado como un protocolo sin estado.
- **Mediante texto plano**: HTTP utiliza texto plano para transmitir los datos, lo que significa que no se requiere ningún tipo de codificación de los datos para su transporte. Esto hace que sea más fácil de implementar y depurar, pero también significa que no es seguro, ya que la información puede ser leída por cualquier persona que sea capaz de interceptar la transmisión.
- **Independiente de la plataforma**: HTTP permite la comunicación entre diferentes sistemas de tipos de datos y arquitecturas a través del uso de tipos de datos genéricos, que son interpretados de la misma manera por el cliente y el servidor.
- **Extensible**: HTTP permite la definición de tipos de datos y métodos de comunicación adicionales, lo que facilita la ampliación de su funcionalidad.
- **Basado en URLs**: HTTP utiliza URLs (Uniform Resource Locators) para identificar los recursos de información.
- **Basado en transacciones**: HTTP es un protocolo de solicitud-respuesta, lo que significa que una solicitud y su respuesta correspondiente se consideran una sola transacción. Las transacciones HTTP consisten en un comando del cliente y su respuesta correspondiente por parte del servidor.

### Mensajes
HTTP utiliza un modelo de solicitud-respuesta en el que el cliente envía una solicitud al servidor para solicitar un recurso y el servidor devuelve una respuesta al cliente. Las solicitudes y respuestas HTTP se definen en el RFC 2616.

[Referencia](https://datatracker.ietf.org/doc/html/rfc2616#section-4)

#### Solicitud
Una solicitud HTTP consta de tres partes:
- Una línea de solicitud, que especifica el método HTTP a utilizar, el recurso solicitado y la versión del protocolo HTTP que se está utilizando.
- Una cabecera, que contiene información adicional sobre la solicitud, como el tipo de navegador que está utilizando el cliente y el tipo de contenido que acepta.
- Un cuerpo, que contiene los datos que se van a enviar al servidor. El cuerpo de una solicitud HTTP es opcional y sólo se utiliza en ciertos casos, como cuando se envían datos de un formulario HTML.

```http
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0
```

```http
POST /login.php HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:12.0) Gecko/20100101 Firefox/12.0
Content-Type: application/x-www-form-urlencoded
form_user=maria_90&form_pass=badbadbadnotgood&form_email=mariadelgado%gmail.com
```
