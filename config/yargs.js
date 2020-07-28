
const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tarea por hacer'
}
const completado = {
    default: true,
        alias: 'c',
}


const { alias } = require('yargs')

const argv = require('yargs')

.command('crear', 'Crea un elemento por hacer',{
    descripcion
})
.command('actualizar', 'Crea un elemento por hacer',{
    descripcion,
    completado
})
.command('borrar', 'Crea un elemento por hacer', {
    descripcion
})
.command('complete', 'Marca las tareas completadas',{
    completado
})





    
.help()
.argv

module.exports = {
argv
}
