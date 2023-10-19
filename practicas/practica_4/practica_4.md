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

## Ejercicio 13

1. Crea el archivo `ejercicio_13.js`.
2. Crea una función que reciba un array de números y devuelva la suma de todos los elementos del array.
3. Almacena el resultado en una variable global y muestrala en consola.

## Ejercicio 14

1. Crea el archivo `ejercicio_14.js`.
2. Crea una función que reciba un array de números y devuelva el menor de los números.
3. Crea otra función que reciba un array de números y devuelva el mayor de los números.
4. Crea otra función que reciba un array de números y devuelva la media de todos ellos.
5. Crea una función que reciba un array de números y devuelva un objeto con las siguientes propiedades:
    - `min`: El menor de los números.
    - `max`: El mayor de los números.
    - `media`: La media de todos los números.

## Ejercicio 15

1. Crea el archivo `ejercicio_15.js`.
2. Crea una función que devuelva true si un numero es par y false si es impar.

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

# Ejercicio 17

1. Crea el archivo `ejercicio_17.js`.
2. Crea una función que reciba un string y devuelva una copia del string modificandolo de la siguiente manera:

```javascript
"hola mundo" // "hOla mUndO"
```

# Ejercicio 18

1. Crea el archivo `ejercicio_18.js`.
2. Crea una función que cambie las vocales de un string por la vocal que pases como argumento a la misma. Por ejemplo, si le pasamos "hola mundo" como string a modificar y "a" como caracter a introducir, debería devolver "hala manda".

# Ejercicio 19

1. Crea el archivo `ejercicio_19.js`.
2. Copia el siguiente código en tu archivo:

```javascript
const cadena = "🦇🎃🎃🦇🦇🎃🦇🎃🎃🎃🦇🦇🎃🎃"
```

1. Crea una funcion a la que le pases una cadena y cuente el número de calabazas y murciélagos que hay en la misma y las muestre en consola.

# Ejercicio 20

1. Crea el archivo `ejercicio_20.js`.
2. Copia el siguiente código en tu archivo:

```javascript
let cadena = "“It is said that your life flashes before your eyes just before you die. That is true, it’s called life.”"
```

3. Haz una funcion que cuente cuantas veces se repite la palabra `life` en la cadena de texto y devuelva el resultado.



