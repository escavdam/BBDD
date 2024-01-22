# Instalación

MongoDB nos ofrece **bastantes** herramientas para trabajar con sus bases de datos. Pueden ser algo confusas al principio, pero una vez las conozcas, te resultará muy fácil trabajar con ellas. Las principales son:

- **mongod**: El demonio de MongoDB, es el que se encarga de gestionar la base de datos.
- **mongosh**: La herramienta que nos permite interactuar con la base de datos.
- **compass**: Una herramienta gráfica para gestionar bases de datos MongoDB.

## Mongod

Para instalar mongod, sigue las instrucciones de la [documentación oficial](https://docs.mongodb.com/manual/administration/install-community/).

En Windows, asegúrate de seleccionar la opción de `Run Service as Network Service User` cuando lo instalas y también de instalar las herramientas de terminal incluidas (mongosh). Asegurate de que se ha instalado correctamente ejecutando `mongod --version` en una terminal.

Mongod se de arrancar el servidor de MongoDB. Es el que se encarga de gestionar la base de datos. Para iniciarlo, ejecuta `mongod` en una terminal. Si ves **MUCHO** texto, es que todo ha ido bien.

### mongod.conf

mongod tiene un archivo de configuración que se encuentra en `/etc/mongod.conf` por defecto en Ubuntu, `/usr/local/etc/mongod.conf` en macOS y `C:\Program Files\MongoDB\Server\4.4\bin\mongod.cfg` en Windows. En este archivo podemos configurar el puerto en el que escucha mongod, el directorio en el que se guardan los datos, el nivel de log, etc.

## Mongosh

Mongosh viene incluido en el paquete de MongoDB, por lo que no es necesario instalarlo por separado. Asegurate de que se ha instalado correctamente ejecutando `mongosh --version` en una terminal.

Si no lo tienes instalado, puedes descargarlo desde la [documentación oficial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

Mongosh es la herramienta que nos permite interactuar con la base de datos. Para iniciarlo, ejecuta `mongosh` en una terminal. Debería conectarse a la base de datos automáticamente si ya has iniciado mongod.

## Compass

Compass es una herramienta gráfica para gestionar bases de datos MongoDB. Puedes descargarla desde la [documentación oficial](https://docs.mongodb.com/compass/master/install/).

Viene incluido con mongoDB, y también podemos usar mongosh desde la terminal para gestionar la base de datos, pero Compass es una herramienta muy útil para visualizar los datos y hacer consultas.