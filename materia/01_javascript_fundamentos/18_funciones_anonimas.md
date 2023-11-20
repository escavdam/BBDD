# Funciones anónimas

Hasta ahora, hemos trabajado principalmente con **funciones declaradas**, es decir, funciones que tienen un nombre y que podemos invocar en cualquier momento.

```js
function saludar() { //declaración
  console.log('Hola mundo!');
}

saludar(); //invocación
```

Pero esta no es la única forma de declarar funciones en JavaScript!

## Expresiones de función

Las **expresiones de función** son funciones que se asignan a una variable, o se pasan como argumentos a otras funciones.

```js
const saludar = function() { //expresión
  console.log('Hola mundo!');
}
```

En cierta forma, las expresiones de función son similares a las funciones declaradas, pero tienen algunas diferencias importantes que las hacen más útiles en diferentes situaciones:

- Las expresiones de función no necesitan un nombre, por lo que se conocen como **funciones anónimas**, esto es muy importante, es el principal motivo por el que se utilizan las expresiones de función.
- Las expresiones de función se pueden invocar inmediatamente, o almacenar en una variable para invocarlas más tarde.
- Las expresiones de función no se elevan, por lo que no podemos invocarlas antes de declararlas.
- Las expresiones de función se pueden pasar como argumentos a otras funciones.
- Las expresiones de función se pueden utilizar como valores para las propiedades de los objetos.
- Las expresiones de función se pueden utilizar como valores para los elementos de un array.
- Las expresiones de función se pueden utilizar como valores para las variables.
- Las expresiones de función se pueden utilizar como valores de retorno para otras funciones, podemos hacer funciones que devuelven funciones!

## Funciones flecha

Esta es la forma más moderna de declarar funciones en JavaScript, las **funciones flecha** son una forma más corta de escribir expresiones de función.

```js
const saludar = () => { //función flecha
  console.log('Hola mundo!');
}
```

🤔...

Sé que esto puede parecer un poco confuso, pero no te preocupes, vamos a ver la sintaxis de las funciones flecha:

- `const saludar =`: El nombre de la variable que va a almacenar la función, hasta aqui, es igual que las expresiones de función.
- `()`: Los paréntesis que van después del nombre de la variable, son los parámetros de la función, si la función no recibe parámetros, los paréntesis se dejan vacíos.
- `=>`: La flecha indica que estamos declarando una función flecha, a su izquierda quedan los argumentos de la función, y a su derecha, abriremos los brackets `{}` donde escribiremos nuestra función.

Veamos otros ejemplos :)

```js
function getRandomNumber() {
  return Math.random();
}

const getRandomNumber = () => {
  return Math.random();
}

const iterarArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  } 
}
```

Como puedes ver, las funciones flecha son muy similares a las expresiones de función, pero tienen una sintaxis más corta y clara.

## Funciones flecha con un solo parámetro

Si la función flecha recibe un solo parámetro, podemos omitir los paréntesis.

```js
const saludar = nombre => {
  console.log(`Hola ${nombre}!`);
}
```

## Funciones flecha con un solo parámetro y una sola línea

Si la función flecha recibe un solo parámetro y solo tiene una línea de código, podemos omitir los paréntesis de los argumentos, las llaves de la función y la palabra `return`.

```js
const saludar = nombre => console.log(`Hola ${nombre}!`);
```

```js	
const selector = tag => document.querySelector(tag);
```

☝️🤓 Esta forma de declarar funciones es **MUY** utilizada en JavaScript, es muy común ver funciones flecha con un solo parámetro y una sola línea de código, no te asustes si las ves y no las entiendes. Intenta incorporarlas poco a poco a tu código.

## Funciones anónimas como callbacks

Las funciones anónimas son muy útiles cuando queremos pasar una función como argumento a otra función, esto es muy común en JavaScript, y se conoce como **callback**. Funciones como `addEventListener`, `setInterval` o `setTimeout` reciben una función como argumento, y la ejecutan cuando ocurre un evento o cuando pasa un tiempo.

Aqui vemos como hemos usado funciones declaradas cuando hemos usado callbacks:

```js
let count = 0

function add(){
  console.log(count)
  count+= Math.floor(Math.random()*100)
}

setInterval(add, 1000)
```

Pero podemos usar funciones anónimas para hacer lo mismo:

```js
let count = 0

setInterval(() => {
  console.log(count)
  count+= Math.floor(Math.random()*100)
}, 1000)
```