# Librerías en JavaScript

Las librerías no es más que código JavaScript que alguien ha escrito para que podamos utilizarlo en nuestros proyectos. Existen librerías para todo tipo de tareas, desde crear interfaces de usuario, a crear gráficos, bases de datos, visualización de datos, etc.

## ¿Cómo utilizamos una librería?

Tenemos varias formas de utilizar una librería:

- Localmente, descargando el código de la librería y añadiéndolo a nuestro proyecto.
- Usando un CDN, que es un servidor que nos proporciona el código de la librería.
- Instalando la librería con un gestor de paquetes.

### Localmente

Para utilizar una librería localmente, primero debemos descargar el código correspondiente a la librería, generalmente un archivo `.js`.

Una vez descargado, debemos añadirlo a nuestro proyecto mediante una etiqueta `script`, igual que hacemos con nuestro código JavaScript:

```html
<script src="libreria.js"></script>
<script src="mi_script.js"></script>
```
Ten en cuenta que necesitarás añadir el código de la librería antes de tu código, ya que si no, no podrás utilizarla.

En muchos casos, las librerías estarán en sus webs oficiales, como es el caso de [p5](https://p5js.org/es/download/), en otros casos, las librerías estarán en repositorios remotos.

### Usando un CDN

Un CDN es un servidor que nos proporciona el código de la librería, para utilizarlo, debemos añadir una etiqueta `script` con la URL donde tengan alojada la libreria:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
<script src="mi_script.js"></script>
```

### Gestores de paquetes

> No deberíais usar npm aún, pero es importante que sepáis que existe y para qué sirve, nos servirá mas adelante.

Los gestores de paquetes son herramientas que nos permiten instalar librerías en nuestros proyectos, para ello, debemos utilizar la terminal y ejecutar el comando correspondiente al gestor de paquetes que estemos utilizando.

En el caso de JavaScript, el gestor de paquetes más utilizado es [npm](https://www.npmjs.com/), este viene incluido con nodejs, para instalar una librería con npm, debemos primero, crear un proyecto con `npm init`, esto nos creará un archivo `package.json` donde se guardarán las librerías que instalemos.

Una vez creado el proyecto, podemos instalar librerías con `npm install`, por ejemplo, para instalar p5, debemos ejecutar:

```bash
npm install p5
```

Esto nos creará una carpeta `node_modules` donde se guardará el código de la librería, para utilizarla, debemos añadir una etiqueta `script` con la ruta a la librería:

```html
<script src="node_modules/p5/lib/p5.js"></script>
<script src="mi_script.js"></script>
```