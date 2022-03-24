const express = require('express');
const app = express();
const port =3000;

let clientes =[
    {nombre:'saul', ruc:'123456', direccion:'mz klt1', localidad:'lima'},
    {nombre:'carlos', ruc:'1234456', direccion:'mz klt31', localidad:'sjdl'},
    {nombre:'miguel', ruc:'1243456', direccion:'mz klt51', localidad:'ate'},
]
//INICIANDO SERVIDOR
app.listen(port,function(){
    console.log('servidor escuchado');
})
app.get('/',function(req,res){
    res.status(200).send(clientes);
})

