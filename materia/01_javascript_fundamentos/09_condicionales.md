# Condicionales

Los elementos condicionales nos permiten ejecutar código en función de si se cumple o no una condición, alterando el flujo de ejecución del programa.


[MDN Guia](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores)

## Condicional if

```javascript
let a = 1
let b = 2

if (a > b) {
  console.log("a es mayor que b")
}
```

## Condicional if-else

```javascript
let a = 1

if (a > 2) {
  console.log("a es mayor que 2")
} else {
  console.log("a es menor o igual que 2")
}
```

## Condicional if-else if-else

```javascript
let a = 1

if (a > 2) {
  console.log("a es mayor que 2")
} else if (a < 2) {
  console.log("a es menor que 2")
} else {
  console.log("a es igual que 2")
}
```

## Condicional switch

```javascript
let a = 1

switch (a) {
  case 1:
    console.log("a es igual que 1")
    break
  case 2:
    console.log("a es igual que 2")
    break
  default:
    console.log("a no es ni 1 ni 2")
}
```

```javascript
let dia = "Lunes"

switch (dia) {
  case "Lunes":
  case "Martes":
  case "Miercoles":
  case "Jueves":
  case "Viernes":
    console.log("Hay que trabajar hoy")
    break
  case "Sabado":
  case "Domingo":
    console.log("Es un día festivo")
    break
  default:
    console.log("No es un día válido")
}
```

## Gestión de errores

Podemos gestionar los errores que se producen en nuestro programa utilizando un bloque `try-catch`.

El bloque try se utiliza para envolver el código que puede producir un error. Si se produce un error, el bloque catch capturará el error y nos permitirá gestionarlo y evitar que el programa se detenga, lanzar un nuevo error o realizar la acción que consideremos oportuna.

```javascript
  let a = 1
  let b = 2
try {

  if (a > b) {
    console.log("a es mayor que b")
  }
} catch (error) {
  console.log(error)
}
```

## Lanzamiento de errores

Podemos lanzar un error utilizando la palabra clave `throw`. Esto nos permite detener la ejecución del programa y mostrar un mensaje de error personalizado. Debemos usarlo cuando sucede una situación que no debería suceder nunca en nuestro programa.

```javascript
let a = 1
let b = 2

if (a > b) {
  console.log("a es mayor que b")
} else {
  throw new Error("a no es mayor que b")
}
```
