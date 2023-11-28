# Práctica 4

Vamos a seguir trabajando algunos aspectos básicos de JavaScript, puedes seguir subiendo los ejercicios al repositorio "javascript fundamentals" que creaste en la práctica anterior.

## Ejercicio 11

1. Crea el archivo `ejercicio_11.js`.
2. Crea un array que contenga:
    - Un valor numérico entero
    - Un valor numérico decimal
    - Un valor de texto
    - Un valor booleano
3. Crea una función que itere sobre el array con un bucle for y muestre el valor y el tipo de dato de cada elemento por consola. Asegurate de que el valor y el tipo de dato se muestren en la misma línea.

> EXTRA: ¿Puedes parametrizar la función? En lugar de leer directamente el array, pásalo como argumento.

```js
function mostrarElementos(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i], typeof array[i]);
    }
}
```

## Ejercicio 12

1. Crea el archivo `ejercicio_12.js`.
2. Crea una función para calcular el IMC de una persona. La función debe recibir dos parámetros, el peso en kilos y la altura en metros.
3. La formula para calcular el IMC es la siguiente:

```
IMC = peso(kg) / altura(m)²
```

4. La función debe devolver un objeto con la siguiente estructura:

```javascript
{
    peso: 80,
    altura: 1.80,
    imc: 24.69
}
```

5. Muestra el resultado por consola usando el metodo `table` de `console`.

```js
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return {
        peso,
        altura,
        imc
    }
}

console.table(calcularIMC(80, 1.80));
```

## Ejercicio 13

1. Crea el archivo `ejercicio_13.js`.
2. Crea una función que reciba un array de números y devuelva la suma de todos los elementos del array.
3. Almacena el resultado en una variable global y muestrala en consola.

```js
function sumaElementos(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];
    }
    return resultado;
}

function sumaNumeros(arr){
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == 'number'){
            resultado += arr[i];
        } else {
            throw new Error('El elemento no es un número');
        }
    }
    return resultado;
}

const arr = [12, 2.5, "hola", true]

console.log(sumaElementos(arr))
console.log(sumaNumeros(arr))
```

## Ejercicio 14

1. Crea el archivo `ejercicio_14.js`.
2. Crea una función que reciba un array de números y devuelva el menor de los números.
3. Crea otra función que reciba un array de números y devuelva el mayor de los números.
4. Crea otra función que reciba un array de números y devuelva la media de todos ellos.
5. Crea una función que reciba un array de números y devuelva un objeto con las siguientes propiedades:
    - `min`: El menor de los números.
    - `max`: El mayor de los números.
    - `media`: La media de todos los números.

```js
function menor(array) {
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
```

## Ejercicio 15

1. Crea el archivo `ejercicio_15.js`.
2. Crea una función que devuelva true si un numero es par y false si es impar.

```js
function esPar(numero) {
    return numero % 2 === 0;
}
```

## Ejercicio 16

1. Crea el archivo `ejercicio_16.js`.
2. Crea una función para capitalizar la primera letra de una cadena de texto, de forma que al pasarle una cadena como esta:

```
"hola mundo"
```

devuelva una cadena como esta:

```
"Hola mundo"
```

```js
function capitalize(str) {
    let caracteres = str.split('');
    caracteres[0] = caracteres[0].toUpperCase();
    return caracteres.join('');
}

function capitalizeBonito(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.time('capitalize')
console.log(capitalize('lorem ipsum'))
console.timeEnd('capitalize')

console.time('capitalizeBonito')
console.log(capitalizeBonito('lorem ipsum'))
console.timeEnd('capitalizeBonito')
```

# Ejercicio 17

1. Crea el archivo `ejercicio_17.js`.
2. Crea una función que reciba un string y devuelva una copia del string modificandolo de la siguiente manera:

```javascript
"hola mundo" // "hOla mUndO"
```

```js
function atontador(string){
        let new_string = ""

    for(let i = 0; i < string.length; i++){
        if(i%2 === 0){
            new_string += string.charAt(i).toUpperCase()
        } else{
            new_string += string.charAt(i).toLowerCase()
        }
    }
    return new_string
}


function atontador(string) {
  let new_string = ""
  let index = 0
  for (const caracter of string){
    new_string += index % 2 ? string.charAt(index).toUpperCase() : string.charAt(index).toLowerCase()
    index++; 
  }
return new_string
}
```

# Ejercicio 18

1. Crea el archivo `ejercicio_18.js`.
2. Crea una función que cambie las vocales de un string por la vocal que pases como argumento a la misma. Por ejemplo, si le pasamos "hola mundo" como string a modificar y "a" como caracter a introducir, debería devolver "hala manda".

```js
function cambiarVocales(string, vocal) {
    let new_string = ""
    for (const caracter of string){
        if(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u"){
            new_string += vocal
        } else {
            new_string += caracter
        }
    }
    return new_string
}
```

# Ejercicio 19

1. Crea el archivo `ejercicio_19.js`.
2. Copia el siguiente código en tu archivo:

```javascript
const cadena = "XOXOOOXOXXXXOXOOXO"
```

1. Crea una funcion a la que le pases una cadena y cuente el número de `X` y `O` que contiene. Debe devolver un objeto con el número de `X` y el número de `O`.

```js
function contarXO(cadena) {
    let x = 0;
    let o = 0;
    for (const caracter of cadena) {
        if(caracter === 'X') {
            x++;
        } else if(caracter === 'O') {
            o++;
        }
    }
    return {x, o}
}
```

# Ejercicio 20

1. Crea el archivo `ejercicio_20.js`.
2. Copia el siguiente código en tu archivo:

```javascript
let cadena = "“It is said that your life flashes before your eyes just before you die. That is true, it’s called life.”"
```

3. Haz una funcion que cuente cuantas veces se repite la palabra `life` en la cadena de texto y devuelva el resultado.

```js
function contarLife(cadena) {
    let contador = 0;
    const palabras = cadena.split(' ');
    for(let i = 0; i < palabras.length; i++) {
        if(palabras[i].toLowerCase() === 'life') {
            contador++;
        }
    }
    return contador;
}
```
