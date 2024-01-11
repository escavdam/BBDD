# Validación de datos

1. Crea un formulario de registro con los siguientes campos:

- Nombre
- Email
- Contraseña
- Submit

Cada campo debe tener un label asociado (excepto el submit), y deben estar encapsulados en una etiqueta `form`.

2. Añade un `addEventListener` con el evento `submit` al formulario, donde validaremos los datos del formulario.

3. El campo **nombre** debe tener las siguientes restricciones:
    - Debe tener una longitud mínima de 3 caracteres.
    - Debe tener una longitud máxima de 12 caracteres.
    - Debe contener solo letras o numeros.

4. El campo **email** debe tener las siguientes restricciones:
    - Debe ser un email válido, aceptando "gmail.com", "hotmail.com" y "yahoo.com".
    - Debe tener una longitud máxima de 30 caracteres.

5. El campo **contraseña** debe tener las siguientes restricciones:
    - Debe tener una longitud mínima de 6 caracteres.
    - Debe tener una longitud máxima de 12 caracteres.
    - Debe contener al menos una letra mayúscula.
    - Debe contener al menos un número o caracter especial ("@#$%&*-_").

6. Si algún campo no cumple con las restricciones, se debe mostrar un mensaje de error debajo del formulario, indicando el campo que no cumple con las restricciones y pidiendo al usuario que lo corrija.