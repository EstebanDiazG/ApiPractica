const express = require('express'); //requiere de express
const { jsonPerson } = require('./data/person'); // requiere mi archivo person.js de mi data aqui sacamos mis datos de las personas

const app = express(); // a express le asignamos nuestra variable app
const port = 3000; // variable con el localhoost en este caso 3000

//setings
app.set('json spaces', 2);// setting para que mi archivo json en web se vea como formato json separandolo en espacios.

//MIDDLEWARES
app.use(express.urlencoded({extended: false})) // Permite a la aplicación analizar datos de formularios codificados en la URL
app.use(express.json()); // Permite que la aplicación entienda datos JSON



// RUTAS
app.use('/api/person/getAll',require('./data/getAll')); // Establece la ruta '/api/person/getAll' y usa el middleware de './data/getAll'
app.use('/api/person/getByRut',require('./data/getByRut'));// Establece la ruta '/api/person/getByRut' y usa el middleware de './data/getByRut'
app.use('/api/person/create', require('./data/create'));
app.use('/api/person/update', require('./data/update'));
app.use('/api/person/delete', require('./data/delete'));



app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  }); // aqui es donde me escucha mi servidor