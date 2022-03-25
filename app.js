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
//RUTA CON PARAMETROS MEDIANTE VERBO GET
app.get('/:ruc',function(request,response){
    console.log(request.params.ruc);
    let cliente = clientes.find(elem =>{
        return elem.ruc === request.params.ruc;
    })
    if (cliente===undefined) {
        return response.status(404).json({
            mensaje:'no se encontro registro'
        })
    }
    response.status(200).json({
        cliente:cliente,
    })
})
app.get('/',function(req,res){
    res.status(200).send(clientes);
})

