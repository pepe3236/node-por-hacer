//const argv = require('yargs').argv

//console.log(argv );
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('../Proyecto/multiplicar/multiplicar');
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')


let commando = argv._[0];

switch(commando){
    case 'crear':
      let tarea = porHacer.crear(argv.descripcion)
      console.log(tarea);
        break;

        case 'listar':
        
            listado = porHacer.getListado();

            for (const tarea of listado) {
                    console.log('======Por hacer======'.green);
                    console.log(tarea.descripcion);
                    console.log('Estado', tarea.completado);
                    console.log('======================='.green);
            }
            
        break;

        case 'actualizar':
            let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
        break;

        case 'borrar':
            let borrar = porHacer.borrar(argv.descripcion);
            console.log(borrar);
        break;
        
        case 'complete':
            let complete = porHacer.complete(argv.completado);
            console.log(complete);
        break;
        default:
            console.log('Comando no reconocido.');
}