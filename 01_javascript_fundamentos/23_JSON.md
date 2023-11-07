# JSON

## Introducción 

JSON (JavaScript Object Notation) es un formato de intercambio de datos, es capaz de ser leído por humanos y por máquinas, y practicamente cualquier lenguaje de programación puede leerlo y escribirlo, haciendo de este formato el ideal para **intercambiar** datos entre aplicaciones, sin tener que preocuparnos por que tecnología usa la aplicación que envía los datos, o la aplicación que los recibe.

Algunos de los usos más comunes de JSON son:

- Enviar datos desde el servidor al cliente.
- Enviar datos desde el cliente al servidor.
- Almacenar datos en el navegador (localmente)
- Almacenar datos en el servidor.
- Almacenar datos en archivos.
- Crear archivos de configuración.
- Crear archivos de idiomas.

Cada vez es más usado y no ha dejado de crecer con los años:
![json a lo largo de los años](/01_javascript_fundamentos/imgs/image.png)

El primer mensaje de JSON fue enviado en 2001, y era asi:

```html
<html><head><script>
    document.domain = 'fudco';
    parent.session.receive(
        { to: "session", do: "test",
          text: "Hello world" }
    )
</script></head></html>
```

Es bastante diferente a la sintaxis que escribimos a dia de hoy para este archivo, este código solo es un objeto de JavaScript, que se le pasa a una funcion llamada `received`.

Sus creadores aprovecharon que podían abusar de como html usa los frames (una ventana de una web dentro de otra) para ejecutar un código de JavaScript y devolver ese objeto de vuelta a la web que lo envió.

Usar JSON en 2023 es mucho más sencillo, y su sintaxis es muy parecida a la de los objetos de JavaScript, pero con algunas diferencias.

Para crear un archivo local en formato JSON, debemos crear un archivo de texto con la extensión `.json`, y escribir en el la información que queremos almacenar, siguiendo la sintaxis adecuada.

## Sintaxis

La sintaxis de JSON es muy sencilla, y muy parecida a la de los objetos de JavaScript, pero con algunas diferencias:

- Los nombres de las propiedades deben ir entre comillas dobles `""` **SIEMPRE**.
- Los nombres de las propiedades deben ir seguidos de dos puntos `:`.
- Los valores de las propiedades pueden ser de cualquier tipo, pero deben ir entre comillas dobles `""` si son cadenas de texto.
- Los valores de las propiedades deben ir separados por comas `,`.
- Los objetos deben ir entre llaves `{}`.
- Los arrays deben ir entre corchetes `[]`.

### Elementos

JSON permite crear dos tipos principales de elementos, objetos y arrays.

Para crear un array debemos escribir un par de corchetes `[]`, y dentro de estos, escribir los elementos del array, separados por comas `,`.

```json
[
    "Manzana",
    "Pera",
    "Platano",
    "Naranja",
    "Mandarina"
]
```

Para crear un objeto, debemos escribir un par de llaves `{}`, y dentro de estas, escribir los elementos del objeto, separados por comas `,`, cada elemento debe tener un nombre, seguido de dos puntos `:`, y el valor del elemento.

```json
{
    "bg-color": "#303030",
    "text-color": "#ffffff",
    "player_name": "admin",
    "player_level": 24,
    "player_hp": 103,
    "items": [
        "espada",
        "escudo",
        "pocion"
    ]
}
```

**Solo** podemos tener una lista u objeto como elemento raíz de un archivo JSON, es decir, no podemos tener dos elementos raíz en el mismo archivo:

```json
[
    "Manzana",
    "Pera",
    "Platano",
    "Naranja",
    "Mandarina"
],
{
    "tiempo": 60,
    "puntuacion": 100,
    "items": [
        "espada",
        "escudo",
        "pocion"
    ]
}
```

Esto no es un JSON valido, ya que tenemos dos elementos raíz, un array y un objeto.

```json
"nombre": "Juan",
"edad": 24
```

Esto tampoco es un JSON valido, ya que no tenemos ningún elemento raíz, son dos elementos `clave-valor` independientes.

Podemos validar nuestros JSON en [JSONLint](https://jsonlint.com/).

### Valores

Los valores que pueden tomar los elementos de un JSON son:

- **Cadenas de texto**: Deben ir entre comillas dobles `""`.
- **Números**: Pueden ser enteros o decimales, y pueden ser positivos o negativos.
- **Booleanos**: Pueden ser `true` o `false`.
- **Arrays**: Deben ir entre corchetes `[]`, y pueden contener cualquier tipo de valor.
- **Objetos**: Deben ir entre llaves `{}`, y pueden contener cualquier tipo de valor.

```json
{
    "nombre": "Salchichas",
    "animal": "Gato",
    "edad": 3,
    "ultima_visita": "2020-10-10",
    "vacunas": [
        "rabia",
        "leucemia felina"
    ],
    "dueño": {
        "nombre": "Juan",
        "telefono": "123456789"
    },
    visitas: [
        {
            "fecha": "2020-10-10",
            "motivo": "vacunas"
        },
        {
            "fecha": "2020-10-11",
            "motivo": "rabia"
        }
    ]
}
```

### Comentarios

JSON no permite comentarios, por lo que no podemos añadir información extra dentro de ellos.

### Métodos

JSON no permite añadir métodos a los objetos, esto hace que podamos intercambiarlo entre aplicaciones, ya que cada lenguaje implementa los métodos de forma diferente, y además evita que se ejecute código malicioso en caso de que el JSON sea malicioso.

## JSON en JavaScript

Como has visto, los JSON son muy parecidos a los objetos de JavaScript, y de hecho, JavaScript nos permite convertir un JSON en un objeto, y viceversa.

### JSON.stringify()

El método `JSON.stringify()` nos permite convertir un objeto de JavaScript en un JSON.

```js
const pedido = {
    "nombre": "Paco",
    "telefono": "123456789",
    "direccion": "Calle Falsa 123",
    "items": [
        "pizza",
        "hamburguesa",
        "perrito"
    ]
}

const pedidoJSON = JSON.stringify(pedido)
console.log(pedidoJSON)
console.log(pedido)
```

### JSON.parse()

El método `JSON.parse()` nos permite convertir un JSON en un objeto de JavaScript.

```js
const pedidoJSON = `{
    "nombre": "Paco",
    "telefono": "123456789",
    "direccion": "Calle Falsa 123",
    "items": [
        "pizza",
        "hamburguesa",
        "perrito"
    ]
}`
const pedido = JSON.parse(pedidoJSON)
console.log(pedidoJSON)
console.log(pedido)
```

