/*
- API RESTFU: PELICULAS

http://localhost/api/peliculas

- GET: (/ o /14) Obtener todas o una pelicula puntual
- POST: (/) Funciona con el endpoint vacio. Recibe y genera una nueva pelicula
- PUT: (/14) Recibe y actualiza una pelicula puntual 
- DELETE: (/14) Recibe y borra una pelicula puntual
*/

const express = require("express") //en gitBash 'npm install express'
const bodyParser = require("body-parser")

const api = express()

api.listen(80) //usa el puerto 80


//Endpoints
api.get("/api/peliculas", function(request, response){
	response.end("Aca voy a mostrar peliculas")	
})

api.post("/api/peliculas", function(request, response){
	response.end("Aca voy a crear peliculas")	
})

api.put("/api/peliculas", function(request, response){
	response.end("Aca voy a actualizar peliculas")	
})

api.delete("/api/peliculas", function(request, response){
	response.end("Aca voy a borrar peliculas")	
})

