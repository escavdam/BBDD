# Eventos

[MDN Eventos](https://developer.mozilla.org/es/docs/Web/Events)

Los eventos son acciones que ocurren en el navegador, como hacer click en un botón, escribir en un input, mover el ratón, etc. El navegador puede vigilar estos eventos y ejecutar código cuando estos ocurren.

## Eventos en HTML

Podemos utilizar eventos de diferentes formas, la más común al empezar es utilizando el evento `on` seguido de su accion en el elemento HTML al que queremos asignar un evento, `onclick`, `oninput`, `onchange` son ejemplos de eventos que el navegador puede vigilar. Cuando estos eventos tienen lugar, se ejecutará el código que hayamos asignado a la propiedad `on` del elemento HTML.

```html
<button onclick="alert('Hola mundo!')">Click me!</button>
<button onclick="mi_funcion()">Click me!</button>
```

## Event Listeners

Muchas veces necesitaremos asignar un evento a un elemento desde JavaScript, para ello podemos utilizar el método `addEventListener` del elemento HTML al que queremos asignar un evento. Este método recibe dos parámetros, el primero es el nombre del evento y el segundo es la función que queremos que se ejecute cuando el evento tenga lugar.

Esto es lo que se conoce como **callback**, una función que se ejecuta cuando ocurre un evento.

```js
const boton = document.querySelector('button');

boton.addEventListener('click', function() {
  alert('Hola mundo!');
});
```
## Event Handler

Por último, podemos asignar un evento a un elemento desde JavaScript utilizando el atributo `on` directamente en el elemento:

```js
const boton = document.querySelector('button');

boton.onclick = function() {
  alert('Hola mundo!');
};
```

Solo podemos asignar un evento a un elemento utilizando el atributo `on`, **si asignamos otro evento se sobreescribirá el anterior**, este comportamiento no ocurre con `addEventListener`.