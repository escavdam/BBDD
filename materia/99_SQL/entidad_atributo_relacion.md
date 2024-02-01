# Diagramas ER

Los diagramas ER (Entidad-Relacion) son diagramas que nos permiten representar las entidades de una base de datos y las relaciones entre ellas.

## Entidades

Las entidades son abstracciones de los objetos y cosas que representamos en una base de datos.

Por ejemplo, si tenemos una base de datos de alumnos, las entidades serían los alumnos.

## Atributos

Los atributos son las características de las entidades. En el caso de los alumnos, los atributos podrían ser el nombre, el apellido, la edad, que curso están realizando, etc.

## Relaciones

Las relaciones son las conexiones entre las entidades. En el caso de los alumnos, podríamos tener una relación entre los alumnos y los cursos que están realizando.

### Relaciones 1 a 1

Las relaciones 1 a 1 son relaciones donde una entidad se relaciona con otra entidad.

Por ejemplo, si tenemos una base de datos de alumnos y cursos, podríamos tener una relación entre los alumnos y los cursos que están realizando.

![Relación 1 a 1](/media/relacion_1_1.svg)

### Relaciones 1 a N

Las relaciones 1 a N son relaciones donde una entidad se relaciona con varias entidades.

Por ejemplo, si tenemos una base de datos de alumnos y cursos, podríamos tener una relación entre los alumnos y los cursos que están realizando.

![Relación 1 a N](/media/relacion_1_m.svg)

### Relaciones N a N

Las relaciones N a N son relaciones donde varias entidades se relacionan con varias entidades.

Por ejemplo, si tenemos una base de datos de alumnos y cursos, podríamos tener una relación entre los alumnos y los cursos que están realizando.

![Relación N a N](/media/relacion_m_m.svg)

### Relaciones opcionales

Las relaciones opcionales son relaciones donde una entidad se relaciona con otra entidad, pero no es obligatorio que se relacione.

![Relación opcional](/media/relacion_opt_optm.svg)

### Ejemplo ER

En este ejemplo, `alumno`, `curso`, `carnet estudiante` y `clases optativas` son entidades, cada una con sus atributos.

Las relaciones entre las entidades son:

- `alumno` y `curso` tienen una relación 1 a N, con un minimo de 1 y un máximo de N alumnos.
- `alumno` y `carnet estudiante` tienen una relación 1 a 1, con un minimo de 1 y un máximo de 1 alumno.
- `alumno` y `clases optativas` tienen una relación N a N, con un minimo de 0 y un máximo de N alumnos.

![Ejemplo ER](/media/ER_ejemplo.svg)