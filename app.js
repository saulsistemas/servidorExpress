const express = require('express');
const app = express();
const port =3000;

let clientes =[
    {nombre:'saul', ruc:'123456', direccion:'mz klt1', localidad:'lima'},
    {nombre:'carlos', ruc:'1234456', direccion:'mz klt31', localidad:'sjdl'},
    {nombre:'miguel', ruc:'1243456', direccion:'mz klt51', localidad:'ate'},
]
app.use(express.json()) //MIDELWARE PARSEA A JSON
app.use(express.urlencoded({extended:true})) //MIDELWARE PARSEA A JSON
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

//PETICIONES POST
app.post('/',function(request,response){
    if (request.body ===undefined) {
        return response.status(400).json({
            mensaje:"datos de cliente obiligatorio"
        })
    }
    clientes.push(request.body);
    response.status(201).json({
        mensaje:'el cliente ha sido registrado correctamente',
    });
    console.log(clientes);
});
app.get('/',function(req,res){
    res.status(200).send(clientes);
})

app.put('/:ruc',function(request,response){
    if (request.body ===undefined) {
        return response.status(400).json({
            mensaje:"datos de cliente a actualizar obiligatorio"
        })
    }
    if (request.params.ruc ===undefined) {
        return response.status(400).json({
            mensaje:"el ruc del cliente a actualizar es obligatorio"
        })
    }
    const posicion = clientes.findIndex(elem =>{
        return elem.ruc === request.params.ruc;
        
    })
    console.log(posicion);
    if (posicion <0) {
        return response.status(404).json({
            mensaje:"cliente no encontrado"
        })
    }
    if (request.body.nombre !== undefined) {
        clientes[posicion].nombre = request.body.nombre;
    }
    if (request.body.direccion !== undefined) {
        clientes[posicion].direccion = request.body.direccion;
    }
    if (request.body.localidad !== undefined) {
        clientes[posicion].localidad = request.body.localidad;
    }

    response.status(201).json({
        mensaje:'El cliente ha sido actualizado correctamente',
    })
    console.log(clientes);
})
