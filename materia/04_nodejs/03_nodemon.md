# Nodemon

Nodemon es una herramienta que nos permite reiniciar el servidor de NodeJS cada vez que se detecta un cambio en el código fuente.

Puedes instalarlo con `npm install nodemon -D` si solo lo quieres como dependencia de desarrollo.

Para ejecutarlo, debes ejecutar el comando `nodemon` en la carpeta de tu proyecto.

```bash
nodemon
```

Puedes añadirlo a un script de npm para ejecutarlo con `npm run dev`.

```json
{
  "name": "mi_proyecto",
  "version": "1.0.0",
  "scripts": {
    "dev": "nodemon"
  }
}
```
