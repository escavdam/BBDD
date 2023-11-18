# Date

[MDN Date](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

El objeto Date nos deja trabajar con fechas y horas.

Dependiendo de como lo instanciemos, podemos obtener la fecha actual, o una fecha específica.

```javascript
let ahora = new Date()
let navidad = new Date("2023-12-25")
```

A partir de un objeto Date, podemos obtener los distintos componentes de la fecha y la hora.

```javascript
const fecha = new Date()
const horas = fecha.getHours()
const minutos = fecha.getMinutes()
const segundos = fecha.getSeconds()

console.log(horas, minutos, segundos)
```

Podemos manipular el formato en el que se muestran los componentes de la fecha y la hora.

```javascript
const now = new Date();

const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
const [hora, minuto, segundo] = horaEnFormato24Horas.split(":")

console.log(hora, minuto, segundo)
```

Tambien podemos obtener el tiempo transcurrido mediante la diferencia entre dos fechas.

```javascript
const inicio = Date.now()

setTimeout(() => {
  const fin = Date.now()
  const resultado = fin - inicio
  console.log(resultado)
},1000)
```
