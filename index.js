const express = require('express');
const app = express();
app.use(express.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
 }
);

app.post(
    '/api/suma',
    (req, res)=>{
        const {num1, num2}= req.body;
        const resultado=num1+num2;
    res.json(resultado);
    res.json(req.body);
    }
);

app.post(
    '/api/resta',
    (req,res)=>{
        const {num1, num2}= req.body;
        const resultado=num1-num2;
    res.json(resultado);
    }
);

app.post(
    '/api/multiplicacion',
    (req, res)=>{
        const {num1, num2}= req.body;
        const resultado=num1*num2;
    res.json(resultado);
    }
);

app.post(
    '/api/division',
    (req, res)=>{
        let resultado;

        try{
            const {num1, num2}= req.body;
            resultado=num1/num2;
        }
        catch(error){
            resultado=error;
        }
        res.json(resultado);
    }
);

//Crea un servicio para escuchar peticiones a través del puerto 5500

app.listen(
    5500,
    ()=>{
        console.log("El puerto 3000 está siendo ejecutado por el Servidor")
    }
);