# Color
El color es un tipo de dato un poco especial, ya que no es un tipo de dato primitivo, sino que es un tipo de dato compuesto, y depende mucho del contexto y tecnologia que estamos utilizando.

Aun así, vamos a ver algunos conceptos básicos que nos ayudarán a entender como funcionan los colores en las aplicaciones web, los ordenadores y las pantallas en general.

## Modelos de color
Los modelos de color son abstracciones que nos permiten representar los colores mediante un conjunto de valores.

Estos modelos sirven diferentes propósitos, por ejemplo, el modelo RGB se utiliza para representar los colores en las pantallas, mientras que el modelo CMYK se utiliza para representar los colores en formato impreso físico, los modelos HSB y HSL se utilizan para representar los colores de una manera más intuitiva para los humanos.

### RGB
En este modelo, los colores se representan mediante la mezcla de tres colores primarios: rojo, verde y azul.
Es el modelo de color que se utiliza en las pantallas, y como normalmente descomponemos el color tambien en el mundo físico, ya que los leds de color variable tambien tienen tres colores primarios: rojo, verde y azul.

### HSB/HSL
En este modelo, los colores se representan mediante tres valores: tono, saturación y brillo (HSB) o tono, saturación y luminosidad (HSL). Es un modelo mucho mas natural de trabajar para los humanos, ya que el tono representa el color, la saturación representa la intensidad del color y el brillo o luminosidad representa la cantidad de luz que refleja el color.

## Rangos de valor
Cada uno de los valores de los modelos de color tiene un rango de valores, los más comunes son:

### Vector (0.0 - 1.0)
Un vector es un tipo de dato que representa una magnitud y una dirección en el espacio, es común utilizarlo para representar colores, ya que nos permite representar los colores mediante un vector de tres dimensiones, donde cada dimensión representa un color primario.

### Entero (0 - 255)
Es muy común usarlo tanto en programación como en programas con interfaz.

### Hexadecimal (#000000 - #FFFFFF)
Muy comun en programacion web, podemos reconocerla por el uso de la almohadilla (#) y los 6 caracteres hexadecimales que representan los valores de los colores primarios.

```
R = 255
G = 128
B = 0

#FF8000
```

Puedes usar un [color picker interactivo](https://g.co/kgs/RKJRZb) para entender mejor como funcionan e interaccionan los modelos de color y la conversion entre diferentes rangos de valores.