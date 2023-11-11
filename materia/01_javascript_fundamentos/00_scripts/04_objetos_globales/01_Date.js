// Date es un objeto global que nos permite crear fechas y obtener datos de ellas.

// Creamos una fecha y guardamos su fecha actual en una variable.
let fechaActual = new Date();

// Imprimimos la fecha actual.
console.log(fechaActual);

// Imprimimos la fecha actual en formato de texto.
console.log(fechaActual.toString());

// Imprimimos la fecha actual en formato de texto y hora.
console.log(fechaActual.toLocaleString());

// Imprimimos la fecha actual en formato de texto y hora en español.
console.log(fechaActual.toLocaleString('es-ES'));

// Imprimimos el año
console.log(fechaActual.getFullYear());

// Imprimimos el mes
console.log(fechaActual.getMonth());

// Imprimimos el dia
console.log(fechaActual.getDate());

// Imprimimos el dia de la semana
console.log(fechaActual.getDay());

// Imprimimos la hora
console.log(fechaActual.getHours());

// Imprimimos los minutos
console.log(fechaActual.getMinutes());

// Imprimimos los segundos
console.log(fechaActual.getSeconds());

// Imprimimos los milisegundos
console.log(fechaActual.getMilliseconds());

// Imprimimos la hora en formato de 24 horas
console.log(fechaActual.getHours());

// Imprimimos la hora en formato de 12 horas y minutos
console.log(fechaActual.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' }));

