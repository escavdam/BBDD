# .env

El modulo `dotenv` nos permite cargar variables de entorno desde un archivo `.env` en nuestro proyecto. Esto nos permite tener un archivo de configuración para nuestro proyecto, y no tener que preocuparnos por las variables de entorno en cada entorno de ejecución.

## Instalación

Podemos instalar el modulo `dotenv` usando `npm`:

```bash
npm install dotenv
```

## Uso

Para usar `dotenv`, primero debemos crear un archivo `.env` en la raíz de nuestro proyecto. En este archivo, podemos definir nuestras variables de entorno, usando el formato `NOMBRE=VALOR`. Por ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
API_KEY=123456
```

Una vez que tenemos nuestro archivo `.env`, podemos cargarlo en nuestro proyecto usando `dotenv`. Para hacer esto, debemos importar el modulo `dotenv` al principio de nuestro archivo, y llamar al método `config`:

```js
require('dotenv').config();
```

Una vez que hemos llamado a `config`, podemos acceder a nuestras variables de entorno usando `process.env`. Por ejemplo:

```js
const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const apiKey = process.env.API_KEY;
```

El archivo `.env` no debe ser compartido con otras personas, ya que puede contener información sensible, como contraseñas o claves de API. Si estamos trabajando en un proyecto en equipo, podemos crear un archivo `.env.example` con las variables de entorno, pero sin los valores, y compartir este archivo con el equipo. De esta forma, cada miembro del equipo puede crear su propio archivo `.env` con sus propias variables de entorno.

**NUNCA** debemos subir el archivo `.env` a un repositorio público, como GitHub, ya que puede ser accesible para cualquier persona. Haz un `.gitignore` con el archivo `.env` para evitar subirlo a un repositorio público o crea un archivo `.env.example` con las variables de entorno, pero sin los valores, y compártelo con el equipo.