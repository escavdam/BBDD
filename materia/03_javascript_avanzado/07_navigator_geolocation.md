# Geolocalización

La API de geolocalización nos permite obtener la ubicación del usuario, podemos obtener esta información de diferentes maneras, por ejemplo, mediante su IP, mediante GPS si el dispositivo dispone de el, o de la propia red a la que está conectado y su distancia con una torre de comunicaciones.

## API de geolocalización

JavaScript tiene una API de geolocalización que nos permite obtener la ubicación del usuario usando el método `getCurrentPosition` del objeto `navigator.geolocation`.

Este método recibe dos funciones como parámetros, la primera se ejecuta si la ubicación se obtiene correctamente, y la segunda si ocurre algún error.

```js
navigator.geolocation.getCurrentPosition(exito, error);

function exito(posicion) {
  console.log(posicion);
}

function error(error) {
  console.log(error);
}
```
`getCurrentPosition()` es un método asíncrono, por lo que no podemos saber cuando se va a ejecutar, por eso le pasamos dos funciones como parámetros, una para cuando se obtiene la ubicación correctamente, y otra para cuando ocurre algún error.

El objeto `posicion` que recibe la función `exito` tiene la siguiente estructura:

```js
{
  coords: {
    accuracy: 65,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 19.432608,
    longitude: -99.133209,
    speed: null
  },
  timestamp: 1587399290000
}
```

De propiedades relacionadas con la posición, geolocation mandará (por lo menos) estos tres : `latitude`, `longitude` y `accuracy`.

- `latitude` y `longitude` son las coordenadas de latitud y longitud de la ubicación del usuario.
- `accuracy` es la precisión de la ubicación en metros, es decir, la distancia máxima que puede haber entre la ubicación real del usuario y la ubicación que nos devuelve la API.
- `timestamp` es la fecha y hora en la que se obtuvo la ubicación.
- `altitude` es la altitud en metros sobre el nivel del mar.
- `altitudeAccuracy` es la precisión de la altitud en metros.
- `heading` es la dirección en la que se mueve el usuario.
- `speed` es la velocidad a la que se mueve el usuario.

## Seguridad

Poder coger los datos de ubicación del usuario es algo muy útil, pero también puede ser peligroso si no se usa con cuidado, por eso los navegadores piden permiso al usuario antes de compartir su ubicación.

Cuando llamamos al método `getCurrentPosition` del objeto `navigator.geolocation`, el navegador muestra un mensaje al usuario pidiendo permiso para compartir su ubicación, si el usuario acepta, se ejecuta la función `exito`, si el usuario rechaza, se ejecuta la función `error`.

## Manejando errores

Si el usuario rechaza compartir su ubicación o hay algún problema capturando su ubicación, se ejecuta la función `error` y se recibe un objeto `error` con la siguiente estructura:

```js
{
  code: 1,
  message: "User denied Geolocation"
}
```

El objeto `error` tiene dos propiedades: `code` y `message`.

- `code` es un número que indica el tipo de error que ha ocurrido, los posibles valores son:
  - `1`: El usuario ha rechazado compartir su ubicación.
  - `2`: No se ha podido determinar la ubicación del usuario.
  - `3`: Se ha superado el tiempo máximo para obtener la ubicación del usuario.
- `message` es un mensaje de texto que describe el error.
  - `PERMISSION_DENIED` es el código de error que se recibe cuando el usuario rechaza compartir su ubicación.
  - `POSITION_UNAVAILABLE` es el código de error que se recibe cuando no se puede determinar la ubicación del usuario.
  - `TIMEOUT` es el código de error que se recibe cuando se ha superado el tiempo máximo para obtener la ubicación del usuario.

## Precisión de la ubicación

La propiedad `accuracy` del objeto `coords` nos indica la precisión de la ubicación en metros, es decir, la distancia máxima que puede haber entre la ubicación real del usuario y la ubicación que nos devuelve la API.

Esta precisión varia según el dispositivo, la red a la que está conectado el usuario y la forma en la que se obtiene la ubicación.

### Dispositivos

Algunos dispositivos pueden tener tecnologías de geolocalización más precisas que otros, por ejemplo, un dispositivo con GPS es más preciso que un dispositivo que obtiene la ubicación mediante la red a la que está conectado.

### Redes

La precisión de la ubicación también depende de la red a la que está conectado el usuario, por ejemplo, si el usuario está conectado a una red WiFi, la precisión **debería** ser mayor que si está conectado a una red móvil, aunque el mundo real siempre os dará sorpresas.

### ¿Como de importante es la precisión?

Dependiendo de la aplicación que estemos desarrollando, la precisión de la ubicación puede ser más o menos importante. Si sólo necesitamos obtener su ubicación aproximada para mostrar información relacionada con su ubicación, como restaurantes, cartelera del cine o eventos cercanos, la precisión no es tan importante, pero si necesitamos obtener su ubicación exacta para mostrarle información relacionada con su ubicación, como la ruta más corta para llegar a un sitio, o en juegos como Pokemon Go, la precisión es muy importante, hasta el punto de que la aplicación simplemente no funcionará si tiene problemas para obtener la ubicación del usuario.

## Obteniendo la ubicación precisa del usuario

Hasta ahora, hemos pasado dos argumentos al método `getCurrentPosition` del objeto `navigator.geolocation`, una función para cuando se obtiene la ubicación correctamente, y otra para cuando ocurre algún error, pero este método también acepta un tercer argumento, un **objeto** donde podemos especificar algunas opciones para obtener la ubicación del usuario.

```js

function exito(posicion) {
    console.log(posicion);
}

function error(error) {
    console.log(error);
}

const opciones = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

navigator.geolocation.getCurrentPosition(exito, error, opciones);
```

El objeto `opciones` puede tener las siguientes propiedades:

- `enableHighAccuracy`: Es un booleano que indica si queremos obtener la ubicación más precisa posible, por defecto es `false`.
- `timeout`: Es un número que indica el tiempo máximo en milisegundos que queremos esperar para obtener la ubicación del usuario, por defecto es `Infinity`.
- `maximumAge`: Es un número que indica el tiempo máximo en milisegundos que queremos usar la ubicación almacenada en la caché del navegador, por defecto es `0`.
- `accuracy`: Es un string que indica la precisión que queremos obtener, puede ser `high`, `medium` o `low`, por defecto es `low`.
- `frequency`: Es un número que indica cada cuanto queremos obtener la ubicación del usuario, en milisegundos, por defecto es `0`. Solo funciona con el método `watchPosition`.

En el ejemplo, hemos especificado que queremos obtener la ubicación más precisa posible, que queremos esperar un máximo de 5 segundos para obtener la ubicación del usuario y que no queremos usar la ubicación almacenada en la caché del navegador.

## Obteniendo la ubicación del usuario continuamente

El método `getCurrentPosition` del objeto `navigator.geolocation` obtiene la ubicación del usuario una sola vez, pero si queremos obtener la ubicación del usuario continuamente, podemos usar el método `watchPosition`.

```js

function exito(posicion) {
    console.log(posicion);
}

function error(error) {
    console.log(error);
}

const opciones = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const id = navigator.geolocation.watchPosition(exito, error, opciones);
```

El método `watchPosition` funciona igual que el método `getCurrentPosition`, pero en lugar de obtener la ubicación del usuario una sola vez, la obtiene continuamente, y devuelve un número que podemos usar para detener la obtención de la ubicación del usuario.

```js
const btn = document.querySelector('button');

function exito(posicion) {
    console.log(posicion);
}

function error(error) {
  console.log(error);
}

const opciones = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const id = navigator.geolocation.watchPosition(exito, error, opciones);

btn.addEventListener('click', () => {
  navigator.geolocation.clearWatch(id);
});
```

En el ejemplo, hemos guardado el número que devuelve el método `watchPosition` en una variable llamada `id`, y hemos añadido un evento `click` al botón que ejecuta el método `clearWatch` del objeto `navigator.geolocation` para detener la obtención de la ubicación del usuario.


