## Ejercicio 

> Haremos estas practicas en clase! No os preocupeis de ellas en casa

## Ejercicio 21

1. Crea el archivo `ejercicio_14.js`.
2. En este ejercicio debes crear un pequeño juego para consola usando JavaScript en el que generamos un numero entero aleatorio entre 0 y 100, y el usuario debe adivinarlo. Haz uso de la funcion `prompt` para pedir al usuario que introduzca el número que crea es el correcto, el juego termina cuando el usuario acierta el número o escribe "salir". Si el usuario acierta el número, mostraremos por consola un mensaje de victoria, pero si hemos introducido salir, mostraremos un mensaje de derrota.

> [Información acerca de la funcion prompt](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)

## Ejercicio 22

1. Crea el archivo `ejercicio_12.js`.
2. Copia esto en tu archivo:

```javascript
let lista = ['🧁', '💣', '🍠', '💣', '🍡', '💣', '🥟', '💣', '🥑', '💣', '🍾', '💣', ' 🍎', '💣']
let comida = []
```
3. En esta práctica, debes hacer un programa que recorra el array "lista", y almacenar en el array "comida" todos los elementos que no tengan el valor '💣'. Debes usar un bucle for, pero no puedes hacer comparaciones que hagan uso del valor '💣'.

## Ejercicio 23

1. Crea el archivo `ejercicio_13.js`.
2. Copia esto en tu archivo:
    
```javascript
function getRandomList(){
    const lista = ['🧁', '🍠', '🍡', '🥟', '🥑', '🍾', ' 🍎'];
    let output = []
    const len = Math.floor(Math.random()*100 + 20)

    for(let i = 0; i < len; i++){
        const val = Math.random()*80+20
        if(val > 50){
            output.push(getRandomElement(lista))    
        }else{
            output.push("💣")
        }
    }
function getRandomElement(arr){
  return arr[Math.floor(Math.random() * lista.length)]
}
  return output
}

let lista = getRandomList()
let comida = []  
```

La variable `lista` es un array que contiene *n* elementos cada vez que inicias el programa, donde *n* puede ser un numero del 20 al 100.

Estos elementos pueden ser o comida (🧁, 🍠, 🍡, 🥟, 🥑, 🍾, 🍎) o bombas (💣).

3. Recorre el array `lista` y almacena en el array `comida` todos los elementos que no sean bombas. Debes usar los metodo `push` y `pop`, y un bucle `while`, de forma que al final del programa, el array `lista` esté vacío y el array `comida` contenga todos los elementos que había en `lista` excepto las bombas.


## Ejercicio 24

1. Crea el archivo `ejercicio_13.js`.
2. Copia esto en tu archivo:

```javascript
const string = "Dejad de darle la vuelta a mis strings!"
```

3. Haz una función que reciba un string y devuelva el mismo string, con cada caracter en sentido inverso, pero respetando el orden entre palabras. De tal manera que al pasarle el string anterior, devuelva:

```
"dajeD ed elrad al atleuv a sim !sgnirts"
```


## Ejercicio xx

1. Crea el archivo `ejercicio_.js`.
2. Copia esto en tu archivo:

```javascript

```

3. En esta práctica debes crear un dispositivo para hacer alquimia, deberás crear un objeto llamado `dispositivo` que tenga las siguientes propiedades:
    - `beta`: Debe ser Pi, no deberías usar el valor numérico escrito literalmente, o el dispositivo fallará.
    - `gamma`: Debe ser la raíz cuadrada de `beta`.
    - `delta`: Debe ser un número aleatorio entre 0 y 100. No deberías usar numeros decimales o el dispositivo fallará.
    - `epsilon`: Debe ser el resultado de elevar `beta` a la potencia `delta`.
    - `zeta`: Debe ser un string con exactamente 265 caracteres como este: 💎.
    - `velocidad`: Debe ser un número aleatorio entre 0 y 1 decimal.
    - `foco`: Debe ser un string con longitud 0.
    - `ingredientes`: Debe ser un array con los siguientes elementos: plomo, hierro, cobre, mercurio, estaño y agua.
    - `operador`: Debe ser un booleano que tenga el valor `true` si `beta` es mayor que `delta`, y `false` en caso contrario.
    - `resultado`: Debe ser un string con longitud 0.