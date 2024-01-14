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

### Validación de datos con HTML

Aunque nuestra herramienta principal para validar datos en el lado del cliente es JavaScript, HTML nos permite realizar algunas validaciones básicas utilizando diferentes atributos:

- `required`: Indica que el campo es obligatorio.
- `minlength`: Indica la cantidad mínima de caracteres que debe tener el campo.
- `maxlength`: Indica la cantidad máxima de caracteres que debe tener el campo.
- `min`: Indica el valor mínimo que puede tener el campo.
- `max`: Indica el valor máximo que puede tener el campo.
- `pattern`: Indica una expresión regular que debe cumplir el campo.

Además, cada tipo de input tiene sus propios atributos para validar los datos:

- `type="text"`: Es el tipo de input por defecto, y no tiene atributos para validar los datos.
- `type="email"`: Valida que el campo tenga un formato de email válido.
- `type="url"`: Valida que el campo tenga un formato de URL válida.
- `type="number"`: Valida que el campo tenga un valor numérico.
- `type="range"`: Valida que el campo tenga un valor numérico dentro de un rango.
- `type="date"`: Valida que el campo tenga un formato de fecha válido.
- `type="time"`: Valida que el campo tenga un formato de hora válido.

Esta validación sienta una buena base para validar los datos en el lado del cliente, pero en muchos casos estas no son suficientes, por lo que es necesario utilizar JavaScript para realizar validaciones más complejas.

Además, las validaciones que aporta HTML no son suficientes para evitar que el usuario envíe datos incorrectos al servidor, ya que el usuario puede desactivar JavaScript en su navegador, o enviar los datos directamente al servidor sin pasar por el formulario.

### Validación de datos con JavaScript

Crear validaciones en JavaScript no necesita librerias externas, solo necesitamos utilizar los métodos y propiedades que nos brinda el lenguaje:

```js
if (nombre.length < 3) {
  alert('El nombre debe tener al menos 3 caracteres');
}
```

```js
if (edad < 18) {
  alert('Debes ser mayor de edad para registrarte');
}
```

Es importante devolver al usuario un feedback claro y conciso, para que sepa que es lo que está mal y pueda corregirlo.

Os recomiendo prácticar a escribir vuestras propias validaciones, ya que es una buena forma de aprender a programar, podeis crear diferentes validaciones en funciones puras y luego utilizarlas en diferentes partes de vuestro código:

```js
function hasNotNumber(string){
    return !/\d/.test(string);
}

function hasNotSpecialChars(string){
    return !/[!@#$%^&*(),.?":{}|<>]/g.test(string);
}

function hasEnoughChars(string, amount){
    return string.length >= amount;
}

function validName(name){
    return hasNotNumber(name) && hasNotSpecialChars(name) && hasEnoughChars(name, 3);
}
```

### Validación de datos con librerias

Existen muchas librerias que nos permiten validar datos de forma sencilla, algunas de las más populares son:

- [jQuery Validation](https://jqueryvalidation.org/)
- [Parsley](https://parsleyjs.org/)
- [Validate.js](https://validatejs.org/)
