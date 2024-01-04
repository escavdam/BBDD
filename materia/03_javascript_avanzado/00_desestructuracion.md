# Desestructuración de datos

La desestructuración es una forma de extraer datos de un objeto o array y asignarlos a variables.

Normalmente, cuando queremos acceder a los datos de un objeto o array, lo hacemos de la siguiente forma:

```javascript
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
    calle: 'Av. Siempre Viva',
    numero: 742
  }
}

console.log(persona.nombre)
const calle = persona.direccion.calle
const numero = persona.direccion.numero
console.log(calle, numero)
```

Sin embargo, acceder a varios elementos de esta forma puede ser tedioso y propenso a errores. Por ejemplo, si quisieramos acceder a la calle y al número de la dirección de una persona, tendríamos que escribir `persona.direccion.calle` y `persona.direccion.numero` respectivamente. Si nos equivocamos en la escritura de alguna de estas propiedades, obtendremos `undefined` como resultado.

La desestructuración nos permite extraer los datos de un objeto o array y asignarlos a variables, de la siguiente forma:

```javascript
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
    calle: 'Av. Siempre Viva',
    numero: 742
  }
}

const { nombre, apellido, edad } = persona
console.log(nombre, apellido, edad)

const { calle, numero } = persona.direccion
console.log(calle, numero)
```

## Desestructuración de arrays

La desestructuración también puede ser utilizada con arrays. En este caso, los elementos del array son asignados a las variables en el orden en el que se encuentran.

```javascript
const posJugador = [2,20]

const [x, y] = posJugador

console.log(x, y)
```

## Desestructuración de argumentos

La desestructuración también puede ser utilizada con los argumentos de una función a la hora de crearlas. En este caso, los argumentos son asignados a las variables en el orden en el que se encuentran

```javascript
const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 30,
  direccion: {
    calle: 'Av. Siempre Viva',
    numero: 742
  }
}

function saludar({ nombre, apellido, edad }) {
  console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}

saludar(persona)
```

Esta funcionalidad es muy útil cuando queremos pasar un objeto como argumento a una función, ya que nos permite acceder a sus propiedades sin tener que escribir `objeto.propiedad` cada vez, aunque perdemos la posibilidad de asignar valores por defecto a los argumentos.

## Desestructuración de argumentos con valores por defecto

Si queremos asignar valores por defecto a los argumentos de una función, podemos hacerlo de la siguiente forma:

```javascript
function saludar({ nombre = 'Juan', apellido = 'Perez', edad = 20 }) {
  console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}

saludar(persona)
```

## Desestructuración de argumentos con valores por defecto y asignación de alias

También podemos asignar alias a las variables que extraemos de un objeto o array, de la siguiente forma:

```javascript
function saludar({ nombre: nombrePersona = 'Juan', apellido: apellidoPersona = 'Perez', edad: edadPersona = 20 }) {
  console.log(`Hola, mi nombre es ${nombrePersona} ${apellidoPersona} y tengo ${edadPersona} años`)
}

saludar(persona)
```

## Desestructuración de argumentos con valores por defecto y asignación de alias y valores por defecto

También podemos combinar las dos funcionalidades anteriores, de la siguiente forma:

```javascript
function saludar({ nombre: nombrePersona = 'Juan', apellido: apellidoPersona = 'Perez', edad: edadPersona = 20 } = {}) {
  console.log(`Hola, mi nombre es ${nombrePersona} ${apellidoPersona} y tengo ${edadPersona} años`)
}

saludar()
```
