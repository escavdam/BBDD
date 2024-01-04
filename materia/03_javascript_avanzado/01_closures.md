# Closures

## ¿Qué es un closure?

Un closure es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es que son funciones que retornan otras funciones.

## ¿Para qué sirven los closures?

Los closures nos permiten crear funciones que pueden ser invocadas en diferentes momentos, y que pueden recordar el estado de las variables que existían en el momento en el que fueron creadas.

## Ejemplo de closure

```javascript
function crearSaludo(saludo) {
  return function(nombre) {
    console.log(`${saludo} ${nombre}`)
  }
}

const saludoHola = crearSaludo("Hola")
const saludoAdios = crearSaludo("Adios")

saludoHola("Juan")
saludoHola("Maria")
```

Es útil si queremos hacer varias funciones similares, pero con pequeñas diferencias.

```javascript
function createStyleLine(a,b,c){
    return function createLine(w){
        let string = a
        for(let x = 0; x < w; x++){
            string += b
        }
        string += c
        return string
    }
}

const maketop = createStyleLine('╔', '═', '╗')
const makebottom = createStyleLine('╚', '═', '╝')
const makecenter = createStyleLine('║', ' ', '║')

console.log(maketop(2))
console.log(makecenter(2))
console.log(makebottom(2))
```

La función anterior nos permite crear líneas de diferentes tamaños y estilos.

## Ejemplo de closure con variables privadas

```javascript
function crearContador() {
  let contador = 0
  return {
    incrementar: function() {
      contador = contador + 1
      return contador
    },
    decrementar: function() {
      contador = contador - 1
      return contador
    }
  }
}

const contador = crearContador()
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.decrementar())
```

Si queremos acceder a la variable contador, no podemos hacerlo directamente, sino que tenemos que hacerlo a través de las funciones incrementar y decrementar.

