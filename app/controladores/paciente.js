const Paciente = require('../modelos/Paciente.js');
const sql = require("../modelos/db");

module.exports = {
  create: async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio"
      });
    }
    const { edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas } = req.body;
    const newPaciente = new Paciente(
      edad, 
      edadFumador, 
      genero, 
      cigarrillosDia, 
      puntos, 
      dependencia, 
      recomendaciones,
      respuestas
    );
    newPaciente.diagnostico();
    // Create a new Paciente
    sql.promise().query("INSERT INTO paciente SET ?", {
      edad: newPaciente.edad,
      edadFumador: newPaciente.edadFumador,
      genero: newPaciente.genero,
      cigarrillosDia: newPaciente.cigarrillosDia,
      puntos: newPaciente.puntos,
      dependencia: newPaciente.dependencia,
      recomendaciones: newPaciente.recomendaciones,
    }).then(data => {
      res.send(newPaciente);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear el paciente."
      });
    });
  },
  find: async (req, res) => {
    // Create a new Paciente
    sql.promise().query("SELECT * FROM paciente").then(data => {
      res.send(data[0]);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear el paciente."
      });
    });
  },
  findById: async (req, res) => {
    // Create a new Paciente
    sql.promise().query("SELECT * FROM paciente WHERE idpaciente = ?", req.params.id).then(data => {
      res.send(data[0]);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear el paciente."
      });
    });
  },
  update: async (req, res) => {
    const { edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas } = req.body;
    const newPaciente = new Paciente(
      edad, 
      edadFumador, 
      genero, 
      cigarrillosDia, 
      puntos, 
      dependencia, 
      recomendaciones,
      respuestas
    );
    newPaciente.diagnostico();
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio"
      });
    }
    // Update Paciente
    sql.promise().query("UPDATE paciente SET ? WHERE idpaciente = ?", [{
      edad: newPaciente.edad,
      edadFumador: newPaciente.edadFumador,
      genero: newPaciente.genero,
      cigarrillosDia: newPaciente.cigarrillosDia,
      puntos: newPaciente.puntos,
      dependencia: newPaciente.dependencia,
      recomendaciones: newPaciente.recomendaciones,
    }, req.params.id]).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear el paciente."
      });
    });
  },
  delete: async (req, res) => {
    // Delete Paciente
    sql.promise().query("DELETE FROM paciente WHERE idpaciente = ?", req.params.id).then(data => {
      res.send({ message: "Paciente eliminado correctamente." });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error al crear el paciente."
      });
    });
  },
  result: async (req, res) => {

    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio"
      });
    }
    const { edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas } = req.body;
    const newPaciente = new Paciente(
      edad, 
      edadFumador, 
      genero, 
      cigarrillosDia, 
      puntos, 
      dependencia, 
      recomendaciones,
      respuestas
    );
    newPaciente.diagnostico();
    
    res.status(200).send(newPaciente);
  }
};
