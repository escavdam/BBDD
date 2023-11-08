# Peticiones HTTP

Llegamos a una de las partes más importante de este curso, las peticiones HTTP. En este capítulo veremos cómo hacer peticiones HTTP con JS, y cómo trabajar con las respuestas que nos devuelve un servidor.


## ¿Qué es una petición HTTP?

Una petición HTTP es una petición que se hace a un servidor web para pedirle información. Por ejemplo, cuando entras en una página web, tu navegador hace una petición HTTP GET al servidor de esa página para pedirle que le envíe la página web, cuando rellenas un formulario y lo envías, tu navegador hace una petición HTTP POST al servidor para enviarle los datos del formulario.

Hay **muchas** formas de hacer peticiones HTTP, para iniciar, vamos a ver cómo hacerlas con JavaScript con *XMLHttpRequest*.

## Asincronía

Antes de empezar a ver cómo hacer peticiones HTTP, vamos a ver qué es la asincronía, y por qué es importante.

JavaScript es un lenguaje de programación single-thread, esto significa que solo puede hacer una cosa a la vez, y que si está haciendo algo, no puede hacer otra cosa hasta que termine lo que está haciendo.

Esto es un problema, porque si queremos hacer una petición HTTP, y tenemos que esperar a que termine para poder hacer otra cosa, nuestro programa se quedaría bloqueado hasta que termine la petición, y no podríamos hacer nada más.

Para solucionar esto, JavaScript usa la asincronía, que es la capacidad de hacer varias cosas a la vez, sin tener que esperar a que termine una para hacer otra.

