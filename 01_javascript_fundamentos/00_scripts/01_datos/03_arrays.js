//Los arrays o listas son estructuras de datos que nos permiten almacenar varios valores en una sola variable.

const lista_valores = [12, 0, 2, 2, 3, 100]
let lista_variada = ["un string", 123, true, false, ["otro string", 123], { nombre: "Juan", edad: 32 }];

// Podemos acceder al valor de cualquier elemento de la lista usando su índice.

console.log(lista_valores[0]);
const mi_valor = lista_variada[3]
console.log(mi_valor)

// También podemos agregar valores a una lista usando el método push.

lista_valores.push(true)
console.log(lista_valores)

// También podemos eliminar el último valor de una lista usando el método pop. Los arrays funcionan por LILO (Last In, Last Out)

lista_valores.pop()
console.log(lista_valores)
