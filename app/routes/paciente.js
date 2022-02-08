module.exports = app => {
    const paciente = require("../controladores/paciente");
    let router = require("express").Router();
    const auth = require("../utils/auth");


    router.post("/autenticacion", auth, (req, res) => {
        res.status(200).send("Autenticado correctamente.");
      });


    router.post("/", paciente.create);
    router.post("/skip", paciente.result);
    router.get("/", paciente.find);
    router.get("/:id", paciente.findById);
    router.put("/:id", paciente.update);
    router.delete("/:id", paciente.delete);
    app.use("/api/paciente", router);
  };