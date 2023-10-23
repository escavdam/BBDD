# Engines de JavaScript

JavaScript es un lenguaje de programación que se ejecuta en el navegador. Es un lenguaje interpretado, lo que significa que el código JavaScript no se compila, sino que se interpreta y se ejecuta directamente en el navegador.

Por defecto, no tenemos manera de ejecutar código JavaScript fuera del navegador. Para poder ejecutar código JavaScript fuera del navegador, necesitamos un programa que interprete y ejecute el código JavaScript, siendo Nodejs uno de los mas conocidos.

## Nodejs

Nodejs es un entorno de ejecución de JavaScript que nos permite ejecutar código JavaScript fuera del navegador. Nodejs utiliza el motor de JavaScript V8, el mismo que utiliza Google Chrome.

Además, al poder ejecutar JavaScript a nivel de sistema operativo, podemos utilizar Nodejs para crear aplicaciones de escritorio, aplicaciones de consola, servidores, etc...

## V8

V8 es el motor de JavaScript que utilizan Google Chrome y Nodejs. V8 es un motor de JavaScript de código abierto desarrollado por Google, escrito en C++ y que se ejecuta en sistemas operativos Windows, Linux y macOS.

## Instalar y ejecutar scripts con Nodejs

Para instalar Nodejs, podemos descargarlo desde su página web oficial: [https://nodejs.org/es/](https://nodejs.org/es/).

Una vez instalado, podemos ejecutar un script de JavaScript con Nodejs de la siguiente manera:

```bash
node nombre_del_archivo.js
```

> **Recuerda** que debes estar en el mismo directorio que el archivo que quieres ejecutar con la terminal, o usar una ruta completa hasta el archivo.

## Ejecutar código JavaScript en el navegador

Para ejecutar código JavaScript en el navegador, podemos abrir la consola de desarrollador del navegador con F12, ir a la seccion de consola y escribir el código JavaScript que queramos ejecutar linea a linea.

Adicionalmente, podemos programar en IDEs virtuales como [CodePen](https://codepen.io/pen/), [JSFiddle](https://jsfiddle.net/) o [JSBin](https://jsbin.com/?html,output), donde solo hay que abrir la web, y comenzar a programar en el lenguaje que deseamos.

## La forma clásica (Solo HTML)

La manera más clásica de lanzar un script es mediante un archivo `html` con el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titulo</title>
</head>
<body>
  <script>
    console.log("Hola mundo")
    //Pon aqui tu código
  </script>
</body>
</html>
```

En este caso, podemos escribir directamente el código JavaScript en el archivo `html` entre las etiquetas `<script>` y `</script>`

## La forma clásica (HTML y JS)

Muy similar al anterior, pero cargamos el archivo JavaScript desde un archivo externo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titulo</title>
</head>
<body>
  <script>
    console.log("Hola mundo")
    //Pon aqui tu código
  </script>
</body>
</html>
```

Debes subir a neocities u otro hosting tus archivos html y js, o utilizar la extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de Visual Studio Code para ejecutar tu código en local, instalalo y luego dale click en "Go Live" en la esquina inferior derecha de tu editor o busca el comando con F1, escribiendo "live server" y seleccionando la opción "Open with live server".