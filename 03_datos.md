# Datos
Los ordenadores son herramientas fundamentalmente creadas para crear, almacenar y procesar datos.

Para un ordenador todos los datos se reducen a valores expresados de manera binaria (ceros y unos), convirtiendo esos valores en abstracciones mas cercanas al lenguaje y la logica humana podemos hacer que trabajar con ellos sea más facil. 

Por ejemplo, si queremos almacenar el nombre de una persona, deberemos codificarlo en números, por ejemplo, utilizando la tabla ASCII:

| Caracter | ASCII |
|----------|--------|
| A        | 65     |
| B        | 66     |
| C        | 67     |
| D        | 68     |
| E        | 69     |
| F        | 70     |
| G        | 71     |
| ♥        | 3      |

Por lo que el nombre "Ana" se codificaría como 65, 78, 65.

Esos valores numéricos se pueden convertir facilmente a binario como 01000001, 01001110, 01000001.

Como vemos, surge una necesidad de categorizar los datos segun diferentes criterios para poder trabajar con ellos de manera mas eficiente.

[+info codificación ASCII](https://www.ascii-code.com/ASCII)

## Tipos de datos

Los tipos de datos que tenemos disponibles dependen de diversos factores, si estamos trabajando en un lenguaje de programación, en una base de datos, en un sistema operativo, etc.

Pero podemos dividir los tipos de datos en dos grandes grupos:
### Datos primitivos

Los datos primitivos son aquellos que no pueden ser descompuestos en otros datos mas simples. Son los datos mas basicos que podemos encontrar en un lenguaje de programación.

Datos primitivos en Python:
- `int` - Enteros
- `float` - Punto flotante
- `bool` - Booleanos
- `str` - Cadenas de caracteres
- `None` - Valor nulo
- `bytes` - Secuencia de bytes
- `bytearray` - Secuencia de bytes modificable
- `complex` - Números complejos
- `tuple` - Tuplas
- `frozenset` - Conjunto inmutable
- `set` - Conjunto
- `list` - Lista
- `dict` - Diccionario
- `range` - Rango
- `memoryview` - Vista de memoria

Datos primitivos en JavaScript:
- `undefined` - Valor indefinido
- `null` - Valor nulo
- `boolean` - Booleano
- `number` - Número
- `string` - Cadena de caracteres
- `symbol` - Símbolo
- `bigint` - Entero de precisión arbitraria
- `object` - Objeto

Datos primitivos en C#:
- `bool` - Booleano
- `byte` - Entero sin signo de 8 bits
- `sbyte` - Entero con signo de 8 bits
- `char` - Caracter Unicode de 16 bits
- `decimal` - Decimal de 128 bits
- `double` - Punto flotante de 64 bits
- `float` - Punto flotante de 32 bits
- `int` - Entero con signo de 32 bits
- `uint` - Entero sin signo de 32 bits
- `long` - Entero con signo de 64 bits
- `ulong` - Entero sin signo de 64 bits
- `object` - Objeto

### Datos estructurados

Los datos estructurados son aquellos que pueden ser descompuestos en otros datos mas simples. Son los datos que se utilizan para crear estructuras de datos mas complejas.

El ejemplo mas simple de dato estructurado es la cadena de caracteres, que es una secuencia de caracteres.

Otros ejemplos de datos estructurados son:
- Listas
- Tuplas
- Diccionarios
- Conjuntos
- Arreglos
- Matrices
- Grafos
- Árboles
- Archivos
- Imágenes
- Videos
- Sonidos

## Datos primitivos
Dependiendo de en que contexto estemos trabajando, los datos primitivos pueden ser diferentes, pero los mas comunes son:

### Enteros
Los enteros son números sin parte decimal, pueden ser positivos o negativos.

> 0, 100, -32 o 1000000000 son ejemplos de enteros.
>
> Tu edad o numero de telefono son ejemplos de cosas reales que pueden ser abstraidas como enteros.

Debemos tener en cuenta que los enteros pueden tener un rango de valores, por ejemplo, en JavaScript el rango de valores de un entero es de -2^53 a 2^53, mientras que en C# el rango de valores de un entero es de -2^31 a 2^31.

### Punto flotante
Los números de punto flotante son números con parte decimal, pueden ser positivos o negativos.

> 0.0, 100.0, -32.0 o 1000000000.0 son ejemplos de números de punto flotante.
>
> Tu peso o tu altura son ejemplos de cosas reales que pueden ser abstraidas como números de punto flotante.

### Booleanos
Los booleanos son valores que pueden ser `True` o `False`.

> `True` y `False` son ejemplos de booleanos.
> 
> Un interruptor, un led o el estado de vivir son ejemplos de cosas reales que pueden ser abstraidas como booleanos.

### Cadenas de caracteres
Conocidas como `strings` en la mayoria de los lenguajes de programación, las cadenas de caracteres son secuencias de caracteres.

> "Hola mundo" es un ejemplo de cadena de caracteres.

### Pointers
Los pointers son valores que apuntan a una dirección de memoria.

> 0x7fffbf7bdaa0 es un ejemplo de pointer.

## Tipado fuerte vs tipado debil
El tipado fuerte es aquel que no permite realizar operaciones entre tipos de datos diferentes, por ejemplo, no podemos sumar un entero con una cadena de caracteres.

El tipado debil es aquel que permite realizar operaciones entre tipos de datos diferentes, por ejemplo, podemos sumar un entero con una cadena de caracteres.

JavaScript es un lenguaje de tipado debil, igual que Python, PHP o Ruby.

C# es un lenguaje de tipado fuerte, igual que Java, C o C++.

```javascript
// JavaScript
1 + "1" // "11"
```

```python
# Python
1 + "1" # TypeError: unsupported operand type(s) for +: 'int' and 'str'
```


## Tipado estatico vs tipado dinamico
El tipado estatico es aquel que requiere que los tipos de datos sean especificados en tiempo de compilación.

El tipado dinamico es aquel que no requiere que los tipos de datos sean especificados en tiempo de compilación.

C# es un lenguaje de tipado estatico, igual que Java, C o C++.

JavaScript es un lenguaje de tipado dinamico, igual que Python, PHP o Ruby.

```javascript
// JavaScript
let a = 1
a = "1"
```

```python
# Python
a = 1
a = "1"
```

## Variables
Una variable es un espacio de memoria que se utiliza para almacenar un valor.

Las variables tienen un nombre, un tipo de dato y un valor, este valor puede modificarse en cualquier momento por parte de nuestro código.

```javascript
// JavaScript
let a = 1
a = a + 2
```

```python
# Python
a = 1
```

```csharp
// C#
int a = 1;
```

## Constantes
Una constante es un espacio de memoria que se utiliza para almacenar un valor.

Las constantes tienen un nombre, un tipo de dato y un valor, pero estas no pueden ser modificadas, nos dará error.

```javascript
// JavaScript
const a = 1
```

```python
# Python
A = 1
```

# Variables y constantes

Para trabajar con datos en nuestro código, debemos almacenarlos en espacios de memoria, a los que llamamos variables y constantes.

Además, dependiendo del lenguaje de programación que estemos utilizando, las variables y constantes pueden tener diferentes características, como por ejemplo:

- **Mutabilidad**: Capacidad para cambiar de valor a lo largo de la ejecución del código.
- **Tipado**: Capacidad para almacenar un tipo de dato concreto.
- **Ámbito**: Pueden ser globales, o tener un ámbito limitado a un bloque (locales).
- **Visibilidad**: Podemos especificar si son visibles desde otros bloques de código o no.
- **Inicialización**: En algunos lenguajes deben ser inicializadas al declararlas o no.