# Funciones

## Funciones

Una función es un bloque de código que se puede ejecutar cuando se le llama. En JavaScript, las funciones se declaran con la palabra clave `function`.

Cuando se declara una función, se le puede dar un nombre, que se utiliza para llamar a la función junto a los paréntesis `()`.

```javascript
function myFunction() { //declaración de la función
  // código
}

myFunction() // llamada a la función
```

```javascript

function saludar() {
  console.log("Hola")
}

saludar() // Hola
```

Las funciones pueden recibir parámetros, que son variables que se pasan a la función para que esta pueda hacer uso de ellas.

```javascript

function saludar(nombre) {
  console.log(`Hola, me llamo ${nombre}`)
}
```

Las funciones pueden devolver un valor mediante la palabra clave `return`.

```javascript
function double(x) {
  return x * 2
}

let a = double(2)
console.log(a) // 4
```