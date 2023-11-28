# Práctica 3

¡Arrancamos con JavaScript!

Vamos a comenzar a trabajar con JavaScript, crea un repositorio en tu cuenta de GitHub llamado `javascript_fundamentals`, clónalo en tu ordenador y abre el proyecto con Visual Studio Code.

## Ejercicio 1

1. Crea un archivo llamado `01_ejercicio.js`.
2. Crea una **variable** llamada `nombre` y asígnale tu nombre.
3. Muestra el valor de la variable por consola.

```js
let nombre = "Juan"
console.log(nombre)
```

## Ejercicio 2

1. Crea un archivo llamado `02_ejercicio.js`.
2. Crea una **variable** llamada `valor` y asígnale un valor.
3. Muestra el *doble* de la variable por consola.

```js
let valor = 5
console.log(valor * 2)
```

## Ejercicio 3

1. Crea un archivo llamado `03_ejercicio.js`.
2. Crea un **objeto** llamado `usuario` con las siguientes propiedades:
   - `nombre`: Tu nombre.
   - `edad`: Tu edad.
   - `ciudad`: Tu ciudad.

3. Crea una variable llamada "saludo" y asígnale un valor que sea una **plantilla de texto** que incluya las propiedades del objeto `usuario`, de manera que al mostrar el valor de la variable por consola se muestre el siguiente texto con los datos de vuestro objeto:

```
Hola, me llamo <nombre>, tengo <edad> años y soy de <ciudad>.
```

```js
let usuario = {
    nombre: "Juan",
    edad: 32,
    ciudad: "Granada"
}

let saludo = `Hola, me llamo ${usuario.nombre}, tengo ${usuario.edad} años y soy de ${usuario.ciudad}.`
console.log(saludo)
```

## Ejercicio 4

1. Crea un archivo llamado `04_ejercicio.js`.
2. En este ejercicio debes crear varias funciones simples:
   - Crea una función llamada `sumar` que reciba dos parámetros y devuelva la suma de ambos.
   - Crea una función llamada `restar` que reciba dos parámetros y devuelva la resta de ambos.
   - Crea una función llamada `multiplicar` que reciba dos parámetros y devuelva el producto de ambos.
   - Crea una función llamada `dividir` que reciba dos parámetros y devuelva el cociente de ambos.
   - Crea una función llamada `doble` que reciba un parámetro y devuelva el doble del mismo.
3. Muestra los resultados de las funciones por consola.

```js
function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

function doble(a){
    return a * 2;
}

//callback
function calc(a, b, accion){
    return accion(a, b);
}

console.log(calc(2, 3, sumar));
```


## Ejercicio 5

1. Crea un archivo llamado `05_ejercicio.js`.
2. Crea una función que nos permita calcular el área de un círculo.
3. La función se llamará `areaCirculo` y recibirá un parámetro que será el radio del círculo.
4. La función mostrará por consola el resultado de calcular el área de un círculo con el radio que le hemos pasado y devolverá el mismo valor.
   
> **Recuerda** que el área de un círculo se calcula con la siguiente fórmula:
>
> A = π * r²

```js
function areaCirculo_aux(radio){
    return 3.1416 * radio * radio;
}
```

## Ejercicio 6

1. Crea un archivo llamado `06_ejercicio.js`.
2. Vamos a crear una función que nos permita convertir grados Celsius a Fahrenheit. La función se llamará `celsiusToFahrenheit` y recibirá un parámetro que será la temperatura en grados Celsius.
3. La función mostrará por consola el resultado de calcular la conversión de grados Celsius a Fahrenheit con el valor que le hemos pasado y devolverá el mismo valor.

> **Recuerda** que la conversión de grados Celsius a Fahrenheit se calcula con la siguiente fórmula:
>
> F = (C * 1.8) + 32

```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32;
}
```

## Ejercicio 7

1. Crea un archivo llamado `07_ejercicio.js`.
2. Vamos a crear una función que nos permita calcular el precio de un producto aplicando el IVA. La función se llamará `calcularPrecioConIva` y recibirá un parámetro que será el precio sin IVA.
3. La función mostrará por consola el resultado de calcular el precio de un producto con IVA con el valor que le hemos pasado y devolverá el mismo valor.

> **Recuerda** que el IVA se calcula aplicando un 21% al precio sin IVA.

```js
function calcularPrecioConIva(precioSinIva) {
  return precioSinIva * 1.21;
}
```

## Ejercicio 8

1. Crea un archivo llamado `08_ejercicio.js`.
2. Haz un programa que muestre por consola los números del 1 al 10 de manera ascendente utilizando un bucle.

El resultado debería ser el siguiente:

```
1
2
3
4
5
6
7
8
9
10
```

```js
for(let i = 1; i <= 10; i++){
    console.log(i);
}
```

## Ejercicio 9

1. Crea un archivo llamado `09_ejercicio.js`.
2. Haz un programa que muestre por consola los números del 1 al 10 de manera descendente utilizando un bucle.

El resultado debería ser el siguiente:

```
10
9
8
7
6
5
4
3
2
1
```

```js
for(let i = 10; i >= 1; i--){
    console.log(i);
}
```

## Ejercicio 10

1. Crea un archivo llamado `10_ejercicio.js`.
2. Haz un programa que muestre por consola los numeros del -10 al 1 de manera ascendente utilizando un bucle.

El resultado debería ser el siguiente:

```
-10
-9
-8
-7
-6
-5
-4
-3
-2
-1
```

```js
for(let i = -10; i <= 1; i++){
    console.log(i);
}
```
