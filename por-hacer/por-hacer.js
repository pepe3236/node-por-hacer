const { rejects } = require('assert');
const { promises } = require('dns');
const fs = require('fs')
const argv = require('../config/yargs')



let listadoPorHacer = [''];

//guardarDB
cArchivo = () => {

    let db = JSON.stringify(listadoPorHacer)

 const data = new Uint8Array(Buffer.from(db));
fs.writeFile(`db/data.json`, data, (err) => {
    if (err) throw new Error('No se pudo grabar', err)
})

}

cargarDb= () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = []
    }
}

crear = (descripcion) =>{

cargarDb();

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porhacer)

    cArchivo();

    return porhacer;
}


getListado = () => {
   cargarDb()
   return listadoPorHacer;
}


//la funcion actualizar marca una tarea como fnalizada 
actualizar = (descripcion, completado = true) => {
    cargarDb();
    
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
console.log(index);
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        cArchivo();
        return true;
    }else{
        return false;
    }
}

borrar = (descripcion) => {

        cargarDb();

        let nuevoListado = listadoPorHacer.filter(tarea =>{
            return tarea.descripcion !== descripcion
        });
        if(nuevoListado.length === listadoPorHacer.length) {
            return false;
        }else{
            listadoPorHacer = nuevoListado;
            cArchivo();
            return true;
        }
}

complete = (completado) => {

    cargarDb();

    let completados = listadoPorHacer.filter(tarea => {
        return tarea.completado = true
    });

    if (argv.completados = true){
        return completados;
    }else{
        return false;
    }

}





module.exports = {
    crear,
    cArchivo,
    getListado,
    actualizar,
    borrar,
    complete
}
