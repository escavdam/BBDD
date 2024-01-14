# Nodejs

## Introducción

Node.js es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node nos permite ejecutar código JavaScript en el servidor o en nuestro ordenador local, sin necesidad de un navegador.

## ¿Por qué ejecutar JavaScript en el servidor?

JavaScript es un lenguaje de programación que se ejecuta en el navegador, y que nos permite crear aplicaciones web interactivas. Sin embargo, JavaScript también puede ser ejecutado en el servidor, y esto nos permite crear aplicaciones web con funcionalidades más avanzadas.

Al ejecutarse en un servidor, JavaScript puede acceder a recursos del sistema operativo, como el sistema de archivos, y a recursos de red, como bases de datos o servicios web. Esto nos permite crear aplicaciones web que pueden almacenar datos, o interactuar con otras aplicaciones. 
Aunque hay otros lenguajes de programación que nos permiten hacer esto (Java, Python...), JavaScript es el lenguaje más popular en el mundo, y el que más desarrolladores tiene, por lo que es una buena opción para crear aplicaciones web. Además, si ya sabes JavaScript, no tienes que aprender otro lenguaje de programación para crear aplicaciones web que necesiten ejecutarse en el servidor.

## Ejecutando JavaScript localmente/servidor

Una vez instalado, podemos ejecutar código JavaScript en nuestro ordenador usando el comando `node` seguido del nombre del archivo que queremos ejecutar.

```bash
node mi_archivo.js
```

Si el archivo se encuentra en una carpeta diferente, debemos especificar la ruta completa al archivo.

```bash
node /home/juan/mi_archivo.js
```

Ademas, si hay un archivo llamado `index.js` o `main.js` en la carpeta actual, podemos ejecutarlo usando el comando `node` sin especificar el nombre del archivo.

```bash
node
```

## global

¿Recuerdas la palabra reservada `this`? Esta palabra reservada hace referencia al objeto global, según el contexto en el que se encuentre.

```js
console.log(this);
```

Según donde lances esto, te dará un resultado u otro. En el navegador, te devolverá el objeto `window`, mientras que en Node.js te devolverá el objeto `global`.

Este objeto global es el equivalente al objeto `window` en el navegador, y contiene todas las variables y funciones globales que podemos usar en nuestro código. Es de donde vienen todas nuestras variables y funciones globales como `console`, `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `require`, `exports`, etc.

