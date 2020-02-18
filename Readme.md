La ciudad de Barcelona, ​​como cualquier ciudad, está formada por un número muy grande de edificios. Hay muchas clases de edificios: edificios de viviendas, hospitales, escuelas, bloques de apartamentos, bloques de oficinas, hoteles, cines, etc.
 
El ejercicio propuesto consistirá en crear una aplicación que contendrá una clase Edificio y varias clases derivadas. No s'instanciarà ningún objeto de la clase Edificio, sino que s'instanciaran objetos de las clases derivadas de ésta.
 
Todos los edificios tendrán ciertos datos comunes (nombre, número de plantas, superficie (m²)) que se darán en crear el edificio y no se modificarán, pero sí que se deberá poder acceder a ellas para leerlas.
 
Se creará un método limpiar () en la clase adecuada, lo mostrará por pantalla el tiempo que se ha tardado en limpiar el edificio, teniendo en cuenta que se tarda en limpiar un minuto por cada 5 m². Además, si un edificio tiene más de una planta, se tarda en subir medio minuto de una planta a otra. Por lo tanto, añadiremos medio minuto por cada planta adicional. Por cada minuto de trabajo se pagará un euro diario. Además, como que se limpia cada día, para obtener el coste mensual, tendremos que multiplicar por 30 (este coste mensual también se mostrará por pantalla)
 
Además, se implementará un método llamado calcularCostVigilancia () que mostrará lo que cuesta al mes contratar vigilantes en cada edificio. Se considera que cada vigilante de hotel u hospital puede vigilar 1000 m². Por lo tanto, si un edificio tiene una superficie de 5500 m², necesitaremos 6 vigilantes. En cambio, los vigilantes de los cines pueden vigilar 3000 m². Contratar cada vigilante cuesta a los propietarios del edificio 1.300 euros mensuales, pero los vigilantes de hoteles cobran un plus de peligrosidad de 500 euros mensuales.
 
Entre los edificios que se deberán crear, estarán: un hotel, un hospital y un cine, aunque se pueden crear más.
 
En el hospital se reparte comida para los enfermos tres veces al día. Habrá una función repartirDinar () en el lugar adecuado que mostrará, cuando sea llamada, el mensaje "Se están repartiendo xxx raciones", donde xxx deberá contener el número de enfermos del hospital. Este número puede variar a lo largo del tiempo, y por tanto, se deberá permitir acceder al atributo correspondiente, tanto para leerlo como para modificarlo, aunque no se haga directamente.

En el cine se pasa una película varias veces al día (en función del día de la semana o de si es un día festivo). En función del día y la hora, en cada sesión se cobrará la entrada a un precio diferente. Se creará en el lugar adecuado la función projectarSessio (), que mostrará el mensaje "Se han recaudado xxx.xx euros", teniendo en cuenta que, para calcular la recaudación, se multiplicará el precio de una entrada por el número de asistentes a la sesión, que no podrá superar el aforo máximo. Por lo tanto, la función projectarSessió deberá recibir como parámetros el número de asistentes y el precio de la entrada para esa sesión. El número de asistentes a la sesión no puede ser mayor que el aforo total de la sala.
Precio sesión: El coste de la entrada entre semana es 5.50 €, Viernes, sábado y domingo: El coste de la entrada antes de las 16h es 6.50 € y a partir de las 16h es 7.50 €

En los hoteles cada día pasa el servicio de habitaciones. Se calcula que cada miembro del servicio puede atender 20 habitaciones. Se creará un método que calcule, y muestre por pantalla: a) ¿Cuántas personas son necesarias para atender el servicio de habitaciones del hotel. b) ¿Cuál es el total necesario para los sueldos de estas personas, teniendo en cuenta que cada persona cobra 1.000 euros al mes.
 
Se puede completar la práctica creando otros edificios e implementando otras funciones para estos edificios y otros edificios.
 
Crearemos, como mínimo: El "Hospital de Vilafranca", de 1.950 m² y 2 plantas. En este momento tiene 26 enfermos. El "Hospital General de Cataluña", de 25.350 m² y 10 plantas. En este momento tiene 315 enfermos. El "Cine Montecarlo", de 3180 m² y 1 planta. El "Cine Principal", de 12.450 m² y 2 plantas. El "Hotel Hilton", de 73.858 m² y 22 plantas. Tiene 583 habitaciones. El "Hotel Pepita", de 593 m² y 3 plantas. Tiene 12 habitaciones.
 
Además, en cada edificio, llamaremos a todos los métodos para ver todos los datos por pantalla.