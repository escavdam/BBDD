# This

this es una palabra reservada de javascript que hace referencia al objeto que esta ejecutando el código actual, es decir, hace referencia al objeto que contiene el código.

# Contexto global

Cuando usamos this en el contexto global, this hace referencia al objeto window.

```javascript
console.log(this) // window
```

# Contexto de un objeto

Cuando usamos this dentro de un objeto, this hace referencia al objeto que contiene el código.

```javascript
var objeto = {
    nombre: 'objeto',
    metodo: function() {
        console.log(this) // objeto
    }
}
```

Si usamos un intervalo dentro de un objeto, this hará referencia al objeto window, ya que el intervalo se ejecuta en el contexto global.

```javascript
var objeto = {
    nombre: 'objeto',
    metodo: function() {
        setInterval(function() {
            console.log(this) // window
        }, 1000)
    }
}
```

Para solucionar esto, podemos guardar el valor de this en una variable, y usar esa variable dentro del intervalo.

```javascript
var objeto = {
    nombre: 'objeto',
    metodo: function() {
        var self = this
        setInterval(function() {
            console.log(self) // objeto
        }, 1000)
    }
}
```

