# Comandos

Cuando usamos herramientas de shell para trabajar con MongoDB, podemos usar comandos para interactuar con la base de datos. 

## use

El comando `use` nos permite seleccionar una base de datos. Si la base de datos no existe, se creará automáticamente.

```bash
use <nombre_base_de_datos>
use mi_base_de_datos
```

## show dbs

El comando `show dbs` nos muestra todas las bases de datos que tenemos en el servidor actual. Por defecto encontrarás las bases de datos `admin`, `config` y `local`. Estas bases de datos son necesarias para que MongoDB funcione correctamente, por lo que no las podemos eliminar.

```bash
show dbs
```

## show collections

El comando `show collections` nos muestra todas las colecciones que tenemos en la base de datos actual.

```bash
use mi_base_de_datos
show collections
```

## db.collection.find()

Busca documentos en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.find()
```

Podemos pasar un objeto como argumento para filtrar los resultados.

```bash
use mi_base_de_datos
db.usuarios.find({ nombre: 'Pepe' })
```

## db

Muestra la base de datos actual.

```bash
use mi_base_de_datos
db
```

## db.createCollection()

Crea una colección en la base de datos actual.

```bash
use mi_base_de_datos
db.createCollection('usuarios')
```

## db.collection.insertOne()

Inserta un documento en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.insertOne({ nombre: 'Pepe', edad: 20 })
```

## db.collection.insertMany()

Inserta varios documentos en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.insertMany([
  { nombre: 'Pepe', edad: 20 },
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Maria', edad: 40 },
])
```

## db.collection.updateOne()

Actualiza un documento en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.updateOne({ nombre: 'Pepe' }, { $set: { edad: 21 } })
```

## db.collection.updateMany()

Actualiza varios documentos en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.updateMany({ nombre: 'Pepe' }, { $set: { edad: 21 } })
```

## db.collection.deleteOne()

Elimina un documento en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.deleteOne({ nombre: 'Pepe' })
```

## db.collection.deleteMany()

Elimina varios documentos en la colección actual.

```bash
use mi_base_de_datos
db.usuarios.deleteMany({ nombre: 'Pepe' })
```

## db.collection.drop()

Elimina la colección actual.

```bash
use mi_base_de_datos
db.usuarios.drop()
```

## db.dropDatabase()

Elimina la base de datos actual.

```bash
use mi_base_de_datos
db.dropDatabase()
```

## db.collection.countDocuments()

Cuenta los documentos de la colección actual.

```bash
use mi_base_de_datos
db.usuarios.countDocuments()
```

