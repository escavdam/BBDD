# Audio

## Clase Audio

Podemos crear un elemento de audio de la siguiente manera:

```javascript
const audio = new Audio('audio.mp3');
```

Para reproducirlo, podemos utilizar el método `play`:

```javascript
audio.play();
```

Para pausarlo, podemos utilizar el método `pause`:

```javascript
audio.pause();
```

Para saber si el audio se está reproduciendo, podemos utilizar la propiedad `paused`:

```javascript
if (audio.paused) {
  console.log('El audio está pausado');
} else {
  console.log('El audio se está reproduciendo');
}
```

Para saber si el audio se ha terminado de reproducir, podemos utilizar el evento `ended`:

```javascript
audio.addEventListener('ended', () => {
  console.log('El audio se ha terminado de reproducir');
});
```

## Elemento audio

Podemos crear un elemento de audio de la siguiente manera:

```html
<audio src="audio.mp3"></audio>
```

Para reproducirlo, podemos utilizar el método `play`:

```javascript
const audio = document.querySelector('audio');
audio.play();
```

Lo usual, es añadir un addEventListener al elemento audio para reproducirlo cuando el usuario haga click en un botón:

```javascript
const audio = document.querySelector('audio');
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
  audio.play();
});
```

