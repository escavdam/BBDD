# Eventos

[MDN Eventos](https://developer.mozilla.org/es/docs/Web/Events)

Podemos utilizar eventos de diferentes formas, la más común es utilizando el atributo `on` en el elemento HTML que queremos que tenga un evento y asignarle una función.

```html
<button onclick="alert('Hola mundo!')">Click me!</button>
<button onclick="mi_funcion()">Click me!</button>
```

También podemos asignar un evento a un elemento desde JavaScript utilizando el método `addEventListener`:

```js
const boton = document.querySelector('button');

boton.addEventListener('click', function() {
  alert('Hola mundo!');
});
```

Por último, podemos asignar un evento a un elemento desde JavaScript utilizando el atributo `on` directamente en el elemento:

```js
const boton = document.querySelector('button');

boton.onclick = function() {
  alert('Hola mundo!');
};
```

Solo podemos asignar un evento a un elemento utilizando el atributo `on`, **si asignamos otro evento se sobreescribirá el anterior**, este comportamiento no ocurre con `addEventListener`.