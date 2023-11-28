# Práctica 8

Vamos a crear varios proyectos rápidos 🔥 crea un repositorio en github llamado `Practica 8 BBDD`, clona el repositorio y abrelo con VScode.

## Ejercicio 0: Template básico

1. Prepara un proyecto básico con `html`, `css` y `js` para poder trabajar.
2. Haz que el body tenga los elementos centrados horizontalmente y verticalmente.
3. En tu index, añade un heading `h1` con el texto `Práctica 8 BBDD`.
4. Añade un heading `h2` con el texto `28 de Noviembre de 2023`.
5. Crea una lista con dos enlaces vacíos que muestren "Ejercicio 1" y "Ejercicio 2", usaremos esta lista para enlazar las siguientes tareas en archivos separados para cada uno:

## Ejercicio 1: Creación de elementos mediante JS

En este ejercicio aprenderás a crear elementos html directamente desde javascript. Crea un input de texto y un boton, al pulsar el boton, se debe crear un elemento `p` con el texto del input y añadirlo al body.

Necesitarás mirar documentación acerca de [createElement](https://developer.mozilla.org/es/docs/Web/API/Document/createElement) y [appendChild](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild).

## Ejercicio 2: Dados aleatorios

Ya sabemos generar numeros aleatorios, vamos a hacer una aplicación que deje lanzar dados y mostrar el resultado.

Para notar lanzamientos de dados usaremos el formato `XdY` donde `X` es el numero de dados y `Y` es el numero de caras de cada dado.

Ejemplos:
- `1d6` -> Lanza un dado de 6 caras.
- `2d6` -> Lanza dos dados de 6 caras.
- `3d20` -> Lanza tres dados de 20 caras.
- `1d100` -> Lanza un dado de 100 caras.

1. Crea un input donde el usuario pueda introducir texto, y un botón para lanzar los dados.
2. Muestra el resultado de los dados en la pantalla.

## Ejercicio 3: Conservar datos complejos

En esta práctica vamos a crear un formulario sencillo para almacenar datos en localStorage, necesitaremos **dos inputs de texto**, uno para almacenar el nombre, y otro para la contraseña. También necesitaremos un botón para enviar el formulario y otro para resetear localStorage.

1. Crea un formulario con los elementos necesarios.
2. Al enviar el formulario, crea un objeto con los datos y guardalo en localStorage, sigue la siguiente estructura: `{name: 'nombre', password: 'contraseña'}` para tu objeto.
3. Al cargar la página, comprueba si hay datos en localStorage, si los hay, rellena los inputs con los datos guardados.

## Ejercicio 4: Validación de datos en el cliente

    - El texto tenga al menos 6 caracteres.
    - El texto no puede tener más de 12 caracteres.
    - El texto no tenga espacios.
    - El texto debe contener al menos una letra mayúscula.
    - El texto debe contener al menos 3 números.
    - El texto no tenga caracteres especiales, estos son: `!@#$%^&*()_+{}|:"<>?[]\;',./`

