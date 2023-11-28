# Errores de calculo

Usar números de coma flotante puede dar lugar a errores de calculo, prueba a hacer alguno de estos calculos en javascript:

0.1 + 0.2
2.98 + 0.01
0.105 + 0.005

## ¿Por qué ocurre esto?

Los números de coma flotante se representan convirtiendo binario a decimal, sin embargo, algunos números decimales no se pueden representar con precisión en binario, este problema no es exclusivo de javascript, ocurre en todos los lenguajes de programación, y en todos los lenguajes de programación se soluciona de la misma manera, redondeando el resultado.

## ¿Cómo lo solucionamos?

Podemos solucionarlo redondeando el resultado, para ello usaremos el método `toFixed()`. Este es el método mas directo:

```javascript
(0.1 + 0.2).toFixed(2)
```

Tambien podemos usar `Math.round()`:

```javascript
Math.round(0.1 + 0.2)
```

En muchos casos, como con el del dinero, no queremos redondear y nos interesa que el resultado sea exacto, para ello podemos simplemente utilizar enteros, y dividir el resultado entre 100 para obtener el valor en euros:

```javascript
0.1 + 0.2 === 0.3 // false
(0.1 + 0.2) / 100 === 0.3 // true
```
