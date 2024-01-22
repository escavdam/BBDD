# Mongoose

Mongoose es una librería de NodeJS que nos permite trabajar con MongoDB de una forma mas sencilla. Nos permite definir modelos, crear documentos, buscarlos, actualizarlos, etc.

## Instalación

Para instalar mongoose, ejecuta `npm install mongoose` en tu proyecto.

Luego, en tu script, puedes iniciar la conexion con tu base de datos de la siguiente forma:

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/libros');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', function () {
  console.log('Conexión a MongoDB establecida');
});
```

Con esto, mongoose se conectará a la base de datos `libros` en `localhost:27017` y nos avisará si hay algún error o si la conexión se ha establecido correctamente.

**Recuerda** comprobar el puerto en el que se está ejecutando mongod, ya que por defecto es el 27017, y tambien la base de datos a la que te quieres conectar.

## Modelos

Los modelos son la forma que tiene mongoose de representar los documentos de una colección. Para crear un modelo, utilizamos el método `mongoose.model()`.

```js
const libroSchema = new mongoose.Schema({
  autor: String,
  titulo: String,
});

const Libro = mongoose.model('Libro', libroSchema);
```

En este ejemplo, hemos creado un modelo llamado `Libro` que representa los documentos de la colección `libros`. Este modelo tiene dos campos, `autor` y `titulo`, ambos de tipo `String`.

Podemos usar este modelo para crear nuevos documentos:

```js
const libro = new Libro({
  autor: 'Ted Chiang',
  titulo: 'Exhalación',
});

libro.save()
  .then(() => console.log('Libro guardado'))
  .catch((err) => console.error(err));
```

En este ejemplo, hemos creado un nuevo documento de la colección `libros` con los campos `autor` y `titulo` y los valores `Ted Chiang` y `Exhalación` respectivamente. Luego, hemos guardado el documento en la base de datos.

## Consultas

Podemos utilizar nuestro modelo para realizar consultas a la base de datos. Por ejemplo, podemos buscar todos los libros de un autor:

```js
Libro.find({ autor: 'Isaac Asimov' })
  .then((libros) => console.log(libros))
  .catch((err) => console.error(err));
```

En este ejemplo, hemos buscado todos los libros de Isaac Asimov. El método `find()` nos devuelve una promesa que se resuelve con un array de documentos que coinciden con el filtro.

O buscar un libro en concreto:

```js
Libro.findOne({ titulo: 'Fundación' })
  .then((libro) => console.log(libro))
  .catch((err) => console.error(err));
```

## Actualizaciones

Podemos utilizar nuestro modelo para actualizar documentos de la base de datos. Por ejemplo, podemos actualizar el título de un libro:

```js
Libro.updateOne({ titulo: 'Fundación' }, { $set: { titulo: 'Fundación #1'} })
    .then(() => console.log('Libro actualizado'))
    .catch(error => console.log(error));
```

En este ejemplo, hemos actualizado el título del libro `Fundación` a `Fundación #1`.

**Recuerda** que estos metodos de actualización editan el primer documento que encuentran coincidiendo en el filtro. Si por ejemplo hay libros con mismo título pero distinto autor, debemos de ser mas específicos en el filtro:

```js
Libro.updateOne({ titulo: 'Fundación', autor: 'Isaac Asimov' }, { $set: { titulo: 'Fundación #1'} })
    .then(() => console.log('Libro actualizado'))
    .catch(error => console.log(error));
```

## Eliminaciones

Podemos utilizar nuestro modelo para eliminar documentos de la base de datos. Por ejemplo, podemos eliminar un libro:

```js
Libro.deleteOne({ titulo: 'Fundación' })
    .then(() => console.log('Libro eliminado'))
    .catch(error => console.log(error));
```

En este ejemplo, hemos eliminado el libro `Fundación`.
