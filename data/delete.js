const { Router} = require ('express');
const router = Router();
const { jsonPerson } = require('./person');// se requiere mi jsonperson en la ruta especificada 



//MUESTRA MI JSON
router.get('/', (req, res) => {
  res.json(jsonPerson);
});



//METODO DELETE
router.delete('/:rut', (req, res) => {
  const rutParam = req.params.rut;

  // Verificar si el parámetro "rut" está presente en la solicitud
  if (!rutParam) {
      return res.status(400).json({ error: 'Se requiere el parámetro "rut" para eliminar una persona.' });
  }

  // Buscar la persona en el array por su rut con mi metodo find
  const persona = jsonPerson.findIndex((p) => p.rut === rutParam);

  // Verificar si la persona fue encontrada en el array
  if (persona !== -1) {
      // Eliminar la persona del array y almacenarla en deletedPerson con el metodo splice
      const deletedPerson = jsonPerson.splice(persona, 1);
      res.json({ message: 'Persona eliminada exitosamente✅', deletedPerson });
  } else {
      // Enviar un mensaje de error si la persona no fue encontrada
      res.status(404).json({ error: 'Persona no encontrada✖️' });
  }
});


//EXPORTADOR DE RUTA 
module.exports = router;