const { Router} = require ('express');
const router = Router();

const { jsonPerson } = require('../data/person');// se requiere mi jsonperson en la ruta especificada 

//GET se define la ruta para el metodo get
router.get('/', (req, res) => {
    res.json(jsonPerson);
  }); //cuando se recibe una solicitud get a la ruta esta funcion se ejecuta y esta responde la 
  //solicitud enviando mi jsonperson en formato json



//EXPORTADOR DE RUTA 
module.exports = router;