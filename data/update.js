const { Router} = require ('express');
const router = Router();
const { jsonPerson } = require('./person');// se requiere mi jsonperson en la ruta especificada 



//MUESTRA MI JSON
router.get('/', (req, res) => {
    res.json(jsonPerson);
  });


  //METODO UPDATE
// Definición de la ruta PUT para actualizar los datos de una persona por su rut
router.put('/:rut', (req, res) => {
    // Extraer el parámetro rut de la URL
    const rutParam = req.params.rut;
  
    // Buscar la persona en el arreglo por su rut
    const persona = jsonPerson.findIndex((p) => p.rut === rutParam);
  
    // Verificar si la persona existe
    if (persona !== -1) {
      // Actualizar los datos de la persona con los datos proporcionados en el cuerpo de la solicitud
      jsonPerson[persona] = { ...jsonPerson[persona], ...req.body };
  
      // Enviar una respuesta exitosa al cliente
      res.send('Persona actualizada exitosamente✅');
    } else {
      // Enviar una respuesta de error si la persona no fue encontrada
      res.status(404).send('Persona no encontrada❌');
    }
  });
  

//EXPORTADOR DE RUTA 
module.exports = router;