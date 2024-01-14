# Modelo - Vista - Controlador (MVC)

El MVC es un patrón de diseño, es decir, una forma de organizar el código de una aplicación. El MVC divide la aplicación en tres partes:

- **Modelo**: se encarga de gestionar los datos de la aplicación. En el caso de una aplicación web, el modelo se encarga de gestionar los datos que se guardan en el servidor.
- **Vista**: se encarga de mostrar los datos al usuario. En el caso de una aplicación web, la vista se encarga de mostrar los datos en el navegador.
- **Controlador**: se encarga de gestionar las acciones del usuario. En el caso de una aplicación web, el controlador se encarga de gestionar las acciones que el usuario realiza en el navegador, y como gestionar los datos que se envían y reciben del servidor.

# Ejemplo con una solicitud HTTP

Vamos a entender el modelo MVC con un ejemplo del mundo real. Imagina que vas a consultar la información de un libro en una biblioteca. Para ello, debes seguir los siguientes pasos:

1. Una vez accediste a la web de la biblioteca, buscas el libro que quieres consultar. En este paso, la vista te muestra un formulario para que introduzcas el título del libro. Cuando envías el formulario, el controlador recibe los datos del formulario y los envía al modelo.

[![](https://mermaid.ink/img/pako:eNpVjz1uwzAMRq8icLKB5AIeOuUG7WZlICS6IaqfgqIUFEEu1rUXK11P3ciH9_EDHxBqJFhgS_Uebijq3i6-9EYyTb11FK7z7Etep2xiqvPVl7EOboo2hWkNtajUhLHK1cQj685nx0VJMOjPN9r64oLpO281cWA9YLbTO4w0OqVB_0xr5I3DYQ7r_YuTy52ayoH3NjhBJsnI0R55-OKcB71RJg-LjRHlw4MvT_Owa339KgEWlU4n6J8RlS6M74IZlg1To-cv8gFd_w?type=png)](https://mermaid.live/edit#pako:eNpVjz1uwzAMRq8icLKB5AIeOuUG7WZlICS6IaqfgqIUFEEu1rUXK11P3ciH9_EDHxBqJFhgS_Uebijq3i6-9EYyTb11FK7z7Etep2xiqvPVl7EOboo2hWkNtajUhLHK1cQj685nx0VJMOjPN9r64oLpO281cWA9YLbTO4w0OqVB_0xr5I3DYQ7r_YuTy52ayoH3NjhBJsnI0R55-OKcB71RJg-LjRHlw4MvT_Owa339KgEWlU4n6J8RlS6M74IZlg1To-cv8gFd_w)

2. El modelo recibe los datos del controlador, realiza una peticion a su *base de datos* y devuelve los datos del libro al controlador.
3. El controlador recibe los datos del modelo, los manipula y se los envía a la vista.
4. La vista recibe los datos del controlador y los muestra al usuario.

Tener el código y nuestras funciones separados de esta forma nos permite reutilizar el código. Por ejemplo, si queremos mostrar los datos de un libro en una aplicación móvil, podemos reutilizar el modelo y el controlador, y solo tenemos que crear una nueva vista para mostrar los datos en el móvil.

**Recuerda** que JS te permite importar y exportar funciones entre archivos. Esto te permite separar el código en diferentes archivos y reutilizarlo en diferentes partes de tu aplicación.