const { Router } = require('express');
const router = Router();
const { jsonPerson } = require('../data/person'); // se requiere mi jsonperson con la ruta especificada




//GET
router.get('/', (req, res) => {
  const rutParam = req.query.rut;// aqui se obtiene el parametro de rut de la consulta url (si se busca 123 entonces rutParam es 123)

  if (!rutParam) {
    return res.status(400).json({ error: 'Se requiere el parámetro "rut".' });
  }//si rutParam es nulo o undefined se retona el error " se requiere el parametro"

  const person = jsonPerson.find((p) => p.rut === rutParam);
//utilizamos el metodo find para buscar una persona en mi array jsonperson y que coincida con el rut  con el valor de rutparam
  if (person) {
    res.json(person);//si se encuentra esta persona el servidor responde la informacion de esta persona en formato json 
  } else {
    res.status(404).json({ error: 'Persona no encontrada.' });// si no la encuentra me arroja este error de persona no encontrada.
  }
});



//EXPORTADOR DE RUTA 
module.exports = router;
