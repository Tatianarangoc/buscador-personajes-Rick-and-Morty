# Módulo 3: Ejercicio de evaluación final

El ejercicio consistia en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje y por la especia. se uso React.

## Vamos de definir las distintas partes del ejercicio:



###  Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a
utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
Foto
Nombre
Especie


###  Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consistia en poder buscarlos
por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al
escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

###  Componentes del listado de personajes
El listado debe tener los siguientes componentes como mínimo:
Componente para el filtro de nombre.
Componente para el listado.
Componente para la tarjeta de cada personaje del listado.
Componente para el detalle de cada personaje.


### Detalle de personajes
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su
información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la
pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de
episodios en los que aparece y si está vivo o muerto.


