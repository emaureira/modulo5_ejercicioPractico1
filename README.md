Proyecto React Modulo 5 Ejercicio Práctico 1
1.- Para para su instalacion:
crear una carpeta
ejecutar git clone
Este proyecto utiliza React, Bootstrap y Axios para realizar peticiones a una API que devuelve una lista de doctores.

Nombre: Edwin Maureira
curso: Frontend Corfo grupo 1

Se utiliza Axio principalmente por:

*Protección contra XSRF* : Incorpora soporte para la protección XSRF utilizando cookies de formar predeterminada, lo que es una opción mas segura por decto, frente a Fetch API,no trae protección

*Mayor Facilidad de Uso* : Es más simple e intuitiva para realizar peticios HTTP, ya que posee una sintaxis más agradable y fácil de recordar frente a Fecth API que requiere más esfuerzo para escribir y entender

*JSON* : Axios transforma automáticamente las respuestas JSON a objetos javascript, reduciendo la cantidad de código y lograndoun trabajo más facil con los datos, Fetch API, requiere usar response.json(), para parsear las respuestas como JSON, siendo un paso extra necesario cuando se esperan datos en formato JSON

*Manejo de Errores* Axios, lanza automáticamente un error cuando la respuesta tiene un código de estado fuera del rango 2xx, simplificando el código de manejor de errores. Fecth api debe verificar primero con response.ok y luego lanzar manualmente el error
