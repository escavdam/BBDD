# Express

Express es una librería de Node.js que nos permite crear un servidor web. Es una librería muy popular, y es la base de muchos otros frameworks de Node.js.

## Instalación

Para instalar Express, debemos ejecutar el comando `npm install` seguido del nombre del paquete que queremos instalar.

```bash
npm install express
```

Esto instalará el paquete en la carpeta `node_modules` de nuestro proyecto, y agregará una entrada en el archivo `package.json` con el nombre y la versión del paquete.

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

## Conceptos básicos de servidores (HTTP)

Un servidor es un programa que recibe peticiones y envía respuestas. En el caso de un servidor web, las peticiones y respuestas siguen el protocolo HTTP.

### Peticiones

Una petición HTTP tiene la siguiente estructura:

```
<VERBO> <RUTA> <VERSION>
<HEADERS>

<CUERPO>
```

- **VERBO**: El verbo HTTP que indica la acción que queremos realizar. Los verbos más comunes son `GET`, `POST`, `PUT`, `PATCH`, y `DELETE`.

- **RUTA**: La ruta del recurso que queremos obtener o modificar. Por ejemplo, `/usuarios`.

- **VERSION**: La versión del protocolo HTTP que estamos usando. Por ejemplo, `HTTP/1.1`.

- **HEADERS**: Información adicional sobre la petición. Por ejemplo, `Content-Type: application/json`.

- **CUERPO**: El cuerpo de la petición. Por ejemplo, `{ "nombre": "Juan" }`.

En express, podemos acceder a la información de la petición usando el objeto `req`.

### Respuestas

Una respuesta HTTP tiene la siguiente estructura:

```
<VERSION> <CODIGO> <MENSAJE>
<HEADERS>

<CUERPO>
```

Es muy similar a la petición, pero tiene un campo más:

- **CODIGO**: El código de respuesta HTTP. Por ejemplo, `200` para indicar que la petición fue exitosa.

En express, podemos enviar una respuesta usando el objeto `res`.

