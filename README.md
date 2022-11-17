# Prueba técnica para Axpe

Este proyecto es una prueba técnica para el proceso de selección con Axpe.

La prueba consiste en dos ejercicios. El primero es una parte teórica, cuya solución encontraremos en este mismo archivo README. Y el segundo, se trata de un proyecto desarrollado con React, JavaScript y HTML/CSS.

## Ejercicio 1


## Ejercicio 2

*Como ejecutar el proyecto*

### `npm install`

Si es la primera vez que inicias el proyecto, antes de nada debes instalar las dependencias.

### `npm start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en el navegador.

> **DESARROLLO:**

- **Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres.** 
Primero de todo, para que header aparezca en la posición que nos encontramos, debemos fijarlo con la propiedad de CSS `position: fixed`.
Después, para hacerlo aparecer y desaparecer, necesitamos hacer una condición usando el hook `useState`: si la posición o el punto vertical donde nos encontramos en la ventana al hacer scroll es menor a la del header, este último se mostrará. He considerado varias maneras de hacerlo: añadiendo o quitando una clase con una propiedad de CSS que no muestre la cabecera (tal vez `display: blocked` o `visibility: hidden`) o con la variable `show`, que es boolean. He optado por esta última opción por simplicidad, pero consideraría porque tal vez es más fácil de testear.


- **Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url.** 
Para ello, he usado React Router. He implementado la última version, React Router v6, que cambia ligeramente con la versión anterior a la hora de implementarla para este caso. He creado dos rutas, `/favorites` y `/new`, además de la que se da por defecto y he asignado a la página donde aparecen todos los "Meetup".

- **El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos.**
Antes de nada, he creado un componente para hacer una lista de "Meetup" para poder reutilizarlo tanto en la página principal como en la de favoritos. Este componente tiene una función añade y elimina elementos al array dependiendo de si ya los contiene o no. Este array de favoritos se pasa por props desde el componente App a los distintos componentes que lo necesitan. Además, he cambiado el header donde indica el número de elementos que se han marcado como favoritos.

- **Implementación de algún test.**
Tras los cambios hechos anteriormente, he tenido que arreglar algún test que ya existía porque daba error.
Lo primero que he intentado hacer es un test que detecte si el botón de añadir favoritos, añadía o eliminaba elementos al array. Para ello he probado tanto "enzyme" (que nunca lo había usado) como "Jest". Primero, he simulado un click con "enzyme" y esperaba que el array de favoritos contuviese el elemento que pasaba por props, pero no funcionaba. He cambiado la función donde se encuentra el componente original (`<MeetupList />`) donde el botón, además, añadía una clase "test-button" para testear si el elemento contiene la clase. La prueba funcionaba en el navegador, pero tampoco conseguía pasar el test. He probado seleccionando el elemento botón tanto con "Jest" como con "enzyme" para inspeccionarlo, pero no he solucionado nada. Finalmente, por tiempo, he optado por un test más sencillo que compruebe que cuando clicamos en el botón, se llama a la función.

Después, he probado a testear que el navegador aparece y desaparece cuando hacemos scroll en la página, pero tampoco me ha funcionado el evento scroll. El punto horizontal de la pantalla era el mismo (0), tanto antes como después del evento. He borrado este test por claridad del código, pero se puede ver lo que he hecho en este commit: https://github.com/mteresa-jimenez/prueba-tecnica-axpe/commit/4bfa4e360b5d1ec8a1d94c7e2b073b2d9737f88e








