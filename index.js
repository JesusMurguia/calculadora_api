const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(
    cors({
      origin: "*",
    })
  );
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.post('/paciente', function (req, res) { 
    let paciente=Object.assign(new Paciente(), req.body);

    paciente.diagnostico(); 

    res.status(200).send(paciente);

});


class Paciente{
    constructor(edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas){
        this.edad = edad;
        this.edadFumador = edadFumador;
        this.genero = genero;
        this.cigarrillosDia = cigarrillosDia;
        this.puntos = puntos;
        this.dependencia = dependencia;
        this.recomendaciones = recomendaciones;
        this.respuestas=respuestas;
    }
    diagnostico(){
        this.puntos = this.respuestas.reduce((a, b) => a + b, 0);
        if (this.puntos >= 7){
            this.recomendaciones = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
            this.dependencia = "Alta";
        } else if (this.puntos >=4){
            this.recomendaciones = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.";
            this.dependencia = "Media";
        } else {
            this.recomendaciones = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
            this.dependencia = "Baja";
        }
    }
}