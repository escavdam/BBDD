# Teoria de bases de datos

Vamos a aprender algunos de los conceptos clave para trabajar con bases de datos.

## Bases de datos no relacionales

Las bases de datos no relacionales son bases de datos que no utilizan tablas para almacenar los datos, en su lugar usan documentos de texto plano que luego se parsea siguiendo unas reglas. Las bases de datos no relacionales son muy utilizadas en aplicaciones web, ya que son muy escalables y muy rápidas, aunque muchas han quedado en desuso.

Uno de los aspectos más positivos de las bases de datos no relacionales es que no es necesario definir la estructura de los datos, ya que estos se almacenan en documentos de texto plano. Además, escalarlos horizontal y verticalmente es muy sencillo, ya que no es necesario modificar la estructura de estos documentos.

Por el contrario, uno de los aspectos más negativos de las bases de datos no relacionales es que no es posible realizar consultas sobre los datos, ya que no se almacenan en tablas, por lo que no es posible relacionar los datos entre sí. Además, la integridad de los datos recae en nosotros como desarrolladores, ya que no es posible definir restricciones sobre la entrada de los mismos, y si tenemos un proceso que requiere modificar varios documentos es posible que se produzcan inconsistencias en los datos si no tenemos cuidado.

Vamos a ver algunos de los formatos de texto plano más utilizados para representar datos:

### JSON

JSON es un formato de texto que se utiliza para representar datos. La estructura de un documento JSON es muy similar a la estructura de un objeto en JavaScript. Un documento JSON es una colección de pares clave-valor. Los valores pueden ser de cualquier tipo de dato, incluso otros documentos JSON. Se guarda en archivos con extensión `.json`.

```json
{
    "nombre": "Juan",
    "apellidos": "García",
    "edad": 20,
    "email": "
}
```

Es junto a XML el formato de texto más utilizado para representar datos.

### XML

XML es un formato de texto que se utiliza para representar datos. La estructura de un documento XML es muy similar a la estructura de un documento HTML. Un documento XML es una colección de etiquetas, con libertad de anidamiento. Los valores pueden ser de cualquier tipo de dato, incluso otros documentos XML. Se guarda en archivos con extensión `.xml`.

```xml
<alumno>
    <nombre>Juan</nombre>
    <apellidos>García</apellidos>
    <edad>20</edad>
    <email>
</alumno>
```

### YAML

YAML es un formato de texto que se utiliza para representar datos. La estructura de un documento YAML es muy similar a la estructura de un objeto en JavaScript. Un documento YAML es una colección de pares clave-valor. Los valores pueden ser de cualquier tipo de dato, incluso otros documentos YAML. Se guarda en archivos con extensión `.yml`.

```yaml
nombre: Juan
apellidos: García
edad: 20
posts:
    - title: Post 1
      content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    - title: Post 2
      content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

### CSV

CSV (Comma Separated Values) es un formato de texto que se utiliza para representar datos. La estructura de un documento CSV es muy similar a la estructura de una tabla. Se guarda en archivos con extensión `.csv`.

```csv
nombre,apellidos,edad,email
Juan,García,20,juangarcia@gmail.com
José,Pérez,21,joseperez@gmail.com
```

**NO** es muy utilizado para representar datos, pero es muy utilizado para exportar datos de una base de datos a un archivo de texto plano.

Todos estos formatos son muy simples, pero tienen una gran desventaja: no son escalables. Modificarlos no solo conlleva modificar todo el archivo, al tener toda la información en un único archivo es muy difícil mantener la integridad de los datos.

No nos aportan ninguna ventaja a la hora de trabajar con los datos, ya que no podemos realizar consultas sobre los datos, ni podemos relacionar los datos entre sí, todo este aspecto recae en nosotros como desarrolladores.

## Bases de datos relacionales

El álgebra relacional es un modelo de datos que se utiliza para representar datos en forma de tablas. Una base de datos relacional es una colección de tablas que se relacionan entre sí. Las tablas se relacionan entre sí mediante claves primarias y claves foráneas.

## Tipos de datos en SQL

Los datos son información que se almacena en un formato determinado. Los datos pueden ser de cualquier tipo de dato, desde un número, hasta una imagen, pasando por un texto, un documento, etc.

Los datos en SQL pueden ser de los siguientes tipos:

### **Texto**: `CHAR`, `VARCHAR`, `TEXT`, `ENUM`, `SET`

Cada uno de estos tipos de datos tiene una longitud máxima, por ejemplo, `CHAR(10)` solo puede almacenar 10 caracteres, `VARCHAR(10)` puede almacenar hasta 10 caracteres, pero no tiene por qué usarlos todos, `TEXT` puede almacenar hasta 65535 caracteres.

### **Número**: `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, `BIGINT`, `FLOAT`, `DOUBLE`, `DECIMAL`

Cada uno de estos tipos de datos tiene un rango de valores, por ejemplo, `TINYINT` puede almacenar valores entre -128 y 127, `INT` puede almacenar valores entre -2147483648 y 2147483647, `FLOAT` puede almacenar valores entre -3.402823466E+38 y 3.402823466E+38, etc.

### **Fecha**: `DATE`, `DATETIME`, `TIMESTAMP`, `TIME`, `YEAR`

Dependiendo del tipo de dato, puede almacenar desde una fecha hasta una fecha y una hora.

### **Binario**: `BINARY`, `VARBINARY`, `BLOB`, `ENUM`, `SET`

Cada uno de estos tipos de datos tiene una longitud máxima, por ejemplo, `BINARY(10)` solo puede almacenar 10 bytes, `VARBINARY(10)` puede almacenar hasta 10 bytes, pero no tiene por qué usarlos todos, `BLOB` puede almacenar hasta 65535 bytes y se utiliza para almacenar imágenes, archivos, etc.

### **Otros**: `JSON`, `GEOMETRY`, `POINT`, `LINESTRING`, `POLYGON`, `MULTIPOINT`, `MULTILINESTRING`, `MULTIPOLYGON`, `GEOMETRYCOLLECTION`

## Características

Cada dato puede poseer diferentes características, se definen mediante palabras clave que se colocan después del tipo de dato.

### No-nulidad

Cuando un campo es `no-nulo` significa que **debe** tener un valor. El valor nulo es un valor especial que se utiliza para indicar que el campo no tiene ningún valor.

### Único

Cuando un campo es `unico` significa que no puede tener valores repetidos. Por ejemplo, si un campo es único, significa que no puede haber dos registros con el mismo valor en ese campo.

### Clave primaria

Una `clave primaria` es un campo que identifica de forma única a cada registro de una tabla. Una clave primaria no puede tener valores repetidos, y no puede ser nula.

### Clave foránea

Una `clave foránea` es un campo que se utiliza para relacionar dos tablas. Una clave foránea puede tener valores repetidos, y puede ser nula.

### Valor por defecto

Cuando un campo tiene un `valor por defecto` significa que si no se especifica ningún valor para ese campo, se utilizará el valor por defecto.

### Autoincremento

Cuando un campo tiene `autoincremento`` significa que el valor de ese campo se incrementará automáticamente cada vez que se inserte un nuevo registro en la tabla.

## Estructura de datos en SQL

En SQL los datos se estructuran en tablas, por ejemplo, una tabla de alumnos, de productos o pedidos. Cada tabla tiene una coleccion de registros.

Un registro puede ser un alumno, un producto o un pedido. Cada registro tiene una colección de campos.

Un campo puede ser el nombre de un alumno, el precio de un producto o el nombre de un cliente. Cada campo tiene un valor.

Un valor puede ser "Juan", "Zapatillas" o "Pepito".

![](/media/sql_0.svg)

## ¿Qué es una base de datos relacional?

Una base de datos relacional es una colección de tablas que se relacionan entre sí. 

Las tablas se relacionan entre sí mediante claves **primarias** y claves **foráneas**.

![](/media/claves_foraneas_primarias.svg)


## Clave primaria

Una clave primaria es un campo que identifica de forma única a cada registro de una tabla. Una clave primaria no puede tener valores repetidos, y no puede ser nula.

Las claves primarias son **muy importantes** para identificar los registros de una tabla.

Considera una tabla de alumnos con las siguentes columnas:

- `id`: clave primaria, numero
- `nombre`: texto
- `password`: texto

En esta tabla, el campo `id` es la clave primaria, ya que identifica de forma única a cada registro de la tabla.

## Clave foránea

Una clave foránea es un campo que se utiliza para relacionar dos tablas. Una clave foránea puede tener valores repetidos, y puede ser nula.

Piensa en la tabla anterior:

- `usuario_id`: clave primaria, numero
- `nombre`: texto
- `password`: texto
- `pedido_id`: clave foránea, numero

Piensa que tenemos otra tabla de pedidos con las siguientes columnas:

- `pedido_id`: clave primaria, numero
- `usuario_id`: clave foránea, numero
- `producto`: texto
- `cantidad`: numero

En esta tabla, el campo `usuario_id` es una clave foránea, ya que se utiliza para relacionar las dos tablas, al igual que el campo `pedido_id`, que es la clave primaria de la tabla de pedidos y la clave foránea de la tabla de usuarios.

