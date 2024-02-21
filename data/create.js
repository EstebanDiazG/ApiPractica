const { Router} = require ('express');
const router = Router();
const { jsonPerson } = require('./person');// se requiere mi jsonperson en la ruta especificada 


//MUESTRA MI JSON
router.get('/', (req, res) => {
    res.json(jsonPerson);
  });

// METODO CREATE
router.post('/', (req, res) => {
    // Extraer los datos del cuerpo de la solicitud (assumiendo que es un objeto JSON)
    const { rut, nombre, apellido, correo, telefono } = req.body;
  
    // Verificar si todos los campos necesarios están presentes y no son nulos
    if (rut && nombre && apellido && correo && telefono) {
      // Crear un nuevo objeto 'NuevaPersona' que incluya todos los campos del cuerpo de la solicitud
      const NuevaPersona = { ...req.body };
  
      // Agregar la nueva persona al array jsonPerson
      jsonPerson.push(NuevaPersona);
  
      // Enviar una respuesta exitosa al cliente
      res.send('Persona Ingresada ✅');
    } else {
      // Enviar una respuesta de error si algún campo está ausente o nulo
      res.send('Error: Persona no ingresada ✖️');
    }
  });
  


//EXPORTADOR DE RUTA 
module.exports = router;