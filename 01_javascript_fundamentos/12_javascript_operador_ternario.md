## Operador ternario

Muchas veces encontraremos este patron de código:

```javascript
let a = 1
let b

if (a > 2) {
  b = "a es mayor que 2"
} else {
  b = "a es menor o igual que 2"
}
```

Este patrón de código se puede simplificar usando el operador ternario:

```javascript
let a = 1
let b = a > 2 ? "a es mayor que 2" : "a es menor o igual que 2"
```